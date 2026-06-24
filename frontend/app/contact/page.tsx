"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const contactReasons = [
  "Expert witness placement",
  "Medical record review",
  "IME / PQME evaluator request",
  "Digital forensics investigation",
  "Economic damages expert",
  "Healthcare compliance support",
  "AI compliance or governance",
  "General consultation",
];

const responseCards = [
  {
    title: "New Matter Intake",
    body: "Share the case type, jurisdiction, timeline, and expert discipline needed. Our team can use those details to identify the right next step.",
  },
  {
    title: "Urgent Deadlines",
    body: "For fast-moving matters, include report due dates, hearing dates, deposition windows, or investigation deadlines in your message.",
  },
  {
    title: "Confidential Review",
    body: "Avoid submitting highly sensitive records through this starter form. Use the form to request secure upload instructions first.",
  },
];

const officeDetails = [
  { label: "Phone", value: "(800) 555-0100", href: "tel:+18005550100" },
  {
    label: "Email",
    value: "consultations@expertlegalnetwork.com",
    href: "mailto:consultations@expertlegalnetwork.com",
  },
  { label: "Response", value: "Within one business day", href: null },
  { label: "Availability", value: "Nationwide matters", href: null },
];

const intakeChecklist = [
  "Matter type and jurisdiction",
  "Expert discipline or service needed",
  "Key deadlines or scheduling constraints",
  "Parties for conflict screening",
  "Preferred contact method",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reason: contactReasons[0],
    timeline: "",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consultation Request - ${form.reason}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Organization: ${form.organization}`,
        `Reason: ${form.reason}`,
        `Timeline: ${form.timeline}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    return `mailto:consultations@expertlegalnetwork.com?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[560px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_380px] lg:px-10 xl:px-12">
          <div className="max-w-[830px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Contact
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Start with the right expert, reviewer, or investigator.
            </h1>

            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.85] text-white/64">
              Tell us what your matter requires. This form is ready for a
              no-backend setup now, and you can later connect it to Formspree,
              Basin, Netlify Forms, Google Forms, Airtable, or another free form
              service.
            </p>
          </div>

          <div className="border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Before You Submit
            </p>
            <ul className="mt-5 space-y-3">
              {intakeChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] leading-snug text-white/62">
                  <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#C09B5B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-6 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 xl:px-12">
          <aside className="space-y-5">
            <div className="border border-[#E1E6EF] bg-white p-6 sm:p-7">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                Contact Details
              </p>

              <div className="space-y-4">
                {officeDetails.map((item) => (
                  <div key={item.label} className="border-t border-[#E5EAF1] pt-4 first:border-t-0 first:pt-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#6B82A0]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-[14px] font-semibold text-[#0B1F3A] transition hover:text-[#C09B5B]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[14px] font-semibold text-[#0B1F3A]">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#E1E6EF] bg-white p-6 sm:p-7">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                Secure Materials
              </p>
              <p className="text-[14px] leading-[1.75] text-[#3D5470]">
                Do not attach confidential records here. Use this intake to
                request secure upload instructions for medical records, forensic
                images, financial materials, or protected documents.
              </p>
            </div>
          </aside>

          <div className="border border-[#E1E6EF] bg-white p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                Consultation Request
              </p>
              <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-light leading-[1.12] text-[#0B1F3A]">
                Tell us about your matter.
              </h2>
              <p className="mt-4 max-w-[680px] text-[14px] leading-[1.75] text-[#6B82A0]">
                This form currently validates the user flow on the frontend. The
                mail link below can send the prepared inquiry by email until you
                connect a form provider.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 border border-[#C09B5B]/35 bg-[#C09B5B]/10 p-5">
                <p className="text-[14px] font-semibold text-[#0B1F3A]">
                  Your inquiry is prepared.
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#3D5470]">
                  Use the email button below to send it now, or connect this
                  form to your preferred form service later.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Full name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Work email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Phone
                  </span>
                  <input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                    placeholder="Optional"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Organization
                  </span>
                  <input
                    value={form.organization}
                    onChange={(e) => updateField("organization", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                    placeholder="Firm, company, or agency"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Reason for contact
                  </span>
                  <select
                    value={form.reason}
                    onChange={(e) => updateField("reason", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] font-bold text-[#0B1F3A]">
                    Timeline
                  </span>
                  <input
                    value={form.timeline}
                    onChange={(e) => updateField("timeline", e.target.value)}
                    className="h-12 border border-[#DDE4EF] bg-white px-4 text-[14px] text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                    placeholder="Urgent, 1 week, 30 days..."
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-[12px] font-bold text-[#0B1F3A]">
                  Matter summary
                </span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={7}
                  className="resize-none border border-[#DDE4EF] bg-white px-4 py-3 text-[14px] leading-relaxed text-[#0B1F3A] outline-none transition focus:border-[#C09B5B]"
                  placeholder="Briefly describe the matter, expert need, jurisdiction, deadlines, and any conflict-check details."
                />
              </label>

              <div className="flex flex-col gap-3 border-t border-[#E5EAF1] pt-6 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#C09B5B]"
                >
                  Prepare Inquiry
                </button>

                <a
                  href={mailtoHref}
                  className="inline-flex h-[50px] items-center justify-center border border-[#DDE4EF] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
                >
                  Send by Email
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[760px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              What Happens Next
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              A simple intake path for serious matters.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {responseCards.map((item) => (
              <article key={item.title} className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
                <div className="mb-5 h-px w-10 bg-[#C09B5B]" />
                <h3 className="font-serif text-[1.55rem] font-light text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#3D5470]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C09B5B]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
              Direct Intake
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Prefer to start by email? Send the matter summary and requested
              expert discipline directly.
            </h2>
          </div>

          <a
            href="mailto:consultations@expertlegalnetwork.com"
            className="inline-flex h-[50px] w-fit items-center justify-center bg-white px-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:bg-[#071225] hover:text-white"
          >
            Email Intake
          </a>
        </div>
      </section>
    </main>
  );
}