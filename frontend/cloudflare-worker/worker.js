const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

const BRAND = {
  navy: "#0B1F3A",
  navyDark: "#071225",
  gold: "#C09B5B",
  border: "#E5EAF1",
  slate: "#3D5470",
  muted: "#6B82A0",
  phone: "+1 (973) 900-6754",
  phoneHref: "tel:+19739006754",
  email: "mail@expertlegalinstitute.com",
};

const ALLOWED_ORIGIN = "https://expertlegalinstitute.com";

function corsHeaders(origin) {
  const allowOrigin = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendBrevoEmail(apiKey, payload) {
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

function emailShell({ eyebrow, heading, bodyHtml }) {
  return `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#F1F3F7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F3F7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background-color:#ffffff;">
            <tr>
              <td style="background-color:${BRAND.navyDark};padding:32px 40px;text-align:center;">
                <span style="display:block;font-family:Georgia,'Times New Roman',serif;font-size:19px;font-weight:700;letter-spacing:2.5px;color:#ffffff;text-transform:uppercase;">Experts Legal Institute</span>
              </td>
            </tr>
            <tr>
              <td style="height:3px;line-height:3px;font-size:0;background-color:${BRAND.gold};">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:36px 40px 8px 40px;">
                <span style="display:block;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:${BRAND.gold};text-transform:uppercase;">${eyebrow}</span>
                <span style="display:block;margin-top:10px;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:400;color:${BRAND.navy};line-height:1.3;">${heading}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 40px 8px 40px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px 0 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="border-top:1px solid ${BRAND.border};font-size:0;line-height:0;">&nbsp;</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:${BRAND.navyDark};padding:28px 40px;">
                <span style="display:block;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#ffffff;">Experts Legal Institute</span>
                <span style="display:block;margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:rgba(255,255,255,0.55);">
                  <a href="${BRAND.phoneHref}" style="color:rgba(255,255,255,0.55);text-decoration:none;">${BRAND.phone}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${BRAND.email}" style="color:rgba(255,255,255,0.55);text-decoration:none;">${BRAND.email}</a>
                </span>
                <span style="display:block;margin-top:14px;font-family:Arial,Helvetica,sans-serif;font-size:10.5px;color:rgba(255,255,255,0.32);">
                  &copy; ${new Date().getFullYear()} Experts Legal Institute. All rights reserved. This message and any attachments may contain confidential information and are intended solely for the addressee.
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function fieldRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};" width="150">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:0.8px;color:${BRAND.muted};text-transform:uppercase;">${label}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};">
        <span style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:${BRAND.navy};">${value}</span>
      </td>
    </tr>`;
}

function buildNotificationEmail(f) {
  const bodyHtml = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
      ${fieldRow("Name", f.name)}
      ${fieldRow("Email", `<a href="mailto:${f.email}" style="color:${BRAND.navy};">${f.email}</a>`)}
      ${fieldRow("Phone", f.phone)}
      ${fieldRow("Organization", f.organization)}
      ${fieldRow("Reason", f.reason)}
      ${fieldRow("Timeline", f.timeline)}
    </table>
    <div style="margin-top:24px;">
      <span style="display:block;font-family:Arial,Helvetica,sans-serif;font-size:10.5px;font-weight:700;letter-spacing:0.8px;color:${BRAND.muted};text-transform:uppercase;">Matter Summary</span>
      <p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.75;color:${BRAND.slate};">${f.message}</p>
    </div>
  `;
  return emailShell({
    eyebrow: "New Website Inquiry",
    heading: "A new consultation request has been submitted.",
    bodyHtml,
  });
}

function buildAutoReplyEmail(f) {
  const bodyHtml = `
    <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.8;color:${BRAND.slate};">Dear ${f.firstName},</p>
    <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.8;color:${BRAND.slate};">
      Thank you for contacting Experts Legal Institute. We have received your request regarding
      <strong style="color:${BRAND.navy};">${f.reason}</strong>, and a member of our intake team will respond within one business day.
    </p>
    <p style="margin:0 0 16px 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.8;color:${BRAND.slate};">
      If your matter is time-sensitive, please call us directly at
      <a href="${BRAND.phoneHref}" style="color:${BRAND.navy};font-weight:700;text-decoration:none;">${BRAND.phone}</a>.
    </p>
    <p style="margin:24px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.8;color:${BRAND.slate};">
      Regards,<br/><strong style="color:${BRAND.navy};">Experts Legal Institute</strong>
    </p>`;
  return emailShell({
    eyebrow: "Request Received",
    heading: "We've received your consultation request.",
    bodyHtml,
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const { name, email, phone, organization, reason, timeline, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders(origin) } }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders(origin) } }
      );
    }

    const apiKey = env.BREVO_API_KEY;
    const senderEmail = env.BREVO_SENDER_EMAIL;
    const senderName = env.BREVO_SENDER_NAME || "Experts Legal Institute";
    const companyInbox = env.COMPANY_INBOX_EMAIL;

    if (!apiKey || !senderEmail || !companyInbox) {
      return new Response(
        JSON.stringify({ error: "Email service is not configured yet. Please try again later." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders(origin) } }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "—");
    const safeOrganization = escapeHtml(organization || "—");
    const safeReason = escapeHtml(reason || "General consultation");
    const safeTimeline = escapeHtml(timeline || "—");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const firstName = safeName.split(" ")[0] || safeName;

    try {
      await sendBrevoEmail(apiKey, {
        sender: { name: senderName, email: senderEmail },
        to: [{ email: companyInbox }],
        replyTo: { email, name },
        subject: `New Consultation Request — ${reason || "General"}`,
        htmlContent: buildNotificationEmail({
          name: safeName,
          email: safeEmail,
          phone: safePhone,
          organization: safeOrganization,
          reason: safeReason,
          timeline: safeTimeline,
          message: safeMessage,
        }),
      });

      try {
        await sendBrevoEmail(apiKey, {
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name }],
          subject: "We've received your request — Experts Legal Institute",
          htmlContent: buildAutoReplyEmail({ firstName, reason: safeReason }),
        });
      } catch (autoReplyError) {
        console.error("Brevo auto-reply failed:", autoReplyError);
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    } catch (error) {
      console.error("Brevo notification failed:", error);
      return new Response(
        JSON.stringify({ error: "We couldn't send your request. Please try again or call us directly." }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders(origin) } }
      );
    }
  },
};