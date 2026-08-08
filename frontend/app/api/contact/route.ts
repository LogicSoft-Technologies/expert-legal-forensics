import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  reason?: string;
  timeline?: string;
  message: string;
};

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendBrevoEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Brevo request failed (${res.status}): ${errorBody}`);
  }

  return res.json();
}

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, organization, reason, timeline, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Experts Legal Institute";
  const companyInbox = process.env.COMPANY_INBOX_EMAIL;

  if (!apiKey || !senderEmail || !companyInbox) {
    console.error("Missing Brevo env vars: BREVO_API_KEY / BREVO_SENDER_EMAIL / COMPANY_INBOX_EMAIL");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "-");
  const safeOrganization = escapeHtml(organization || "-");
  const safeReason = escapeHtml(reason || "General consultation");
  const safeTimeline = escapeHtml(timeline || "-");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

  try {
    // 1. Notify the company inbox — reply-to is set to the lead so staff can hit "reply" directly.
    await sendBrevoEmail(apiKey, {
      sender: { name: senderName, email: senderEmail },
      to: [{ email: companyInbox }],
      replyTo: { email, name },
      subject: `New Consultation Request — ${reason || "General"}`,
      htmlContent: `
        <div style="font-family:Arial,sans-serif;font-size:14px;color:#0B1F3A;">
          <h2 style="margin:0 0 16px;">New Consultation Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Organization:</strong> ${safeOrganization}</p>
          <p><strong>Reason:</strong> ${safeReason}</p>
          <p><strong>Timeline:</strong> ${safeTimeline}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    // 2. Auto-reply straight to the lead, sent immediately after the notification succeeds.
    try {
      await sendBrevoEmail(apiKey, {
        sender: { name: senderName, email: senderEmail },
        to: [{ email, name }],
        subject: "We've received your request — Experts Legal Institute",
        htmlContent: `
          <div style="font-family:Arial,sans-serif;font-size:14px;color:#0B1F3A;">
            <p>Hi ${safeName.split(" ")[0] || safeName},</p>
            <p>Thank you for reaching out to Experts Legal Institute (ELI). We've received your
            request regarding <strong>${safeReason}</strong> and a member of our team will respond
            within one business day.</p>
            <p>If your matter is urgent, please call us directly at (800) 555-0100.</p>
            <p>Best regards,<br/>Experts Legal Institute</p>
          </div>
        `,
      });
    } catch (autoReplyError) {
      // Notification to the company already succeeded — don't fail the whole request over the
      // auto-reply, just log it so it can be checked in Brevo's transactional log.
      console.error("Brevo auto-reply failed:", autoReplyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Brevo notification failed:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please try again or call us directly." },
      { status: 502 }
    );
  }
}