"use client";

import Link from "next/link";
import { useState } from "react";

const serviceAreas = [
  { title: "HIPAA Compliance & Privacy", body: "Certified privacy officers and HIPAA specialists for breach response, OCR investigations, and compliance program assessment." },
  { title: "Medicare & Medicaid Audits", body: "Former CMS auditors and healthcare billing experts for RAC, UPIC, and MAC audit response and overpayment dispute matters." },
  { title: "Fraud, Waste & Abuse", body: "Experts for False Claims Act defense, qui tam relator matters, and OIG/DOJ investigation response across all provider types." },
  { title: "Stark Law & Anti-Kickback", body: "Healthcare transaction specialists reviewing physician compensation, referral arrangements, and joint venture structures for regulatory compliance." },
  { title: "Clinical Standards of Care", body: "Board-certified specialists opining on whether care met applicable clinical standards — for medical malpractice, credentialing, and licensing matters." },
  { title: "Healthcare Operations", body: "Operational experts covering hospital administration, nursing standards, pharmacy practices, and patient safety systems." },
];

const engagementTypes = [
  { type: "Regulatory Defense", description: "Support for organizations under investigation by CMS, OCR, OIG, or state health departments." },
  { type: "Litigation Support", description: "Expert witnesses for medical malpractice, qui tam, and healthcare commercial disputes." },
  { type: "Compliance Advisory", description: "Proactive program assessment and remediation before regulatory exposure becomes litigation risk." },
  { type: "Transaction Due Diligence", description: "Pre-acquisition compliance review identifying regulatory exposure in healthcare M&A transactions." },
];

const benefits = [
  { title: "Former regulators — not just consultants", body: "Our compliance experts include former CMS auditors, OIG investigators, and state health department surveyors. They understand regulatory processes from the inside, which shapes how they assess exposure and advise on response strategy." },
  { title: "Active clinical practitioners", body: "For clinical standards of care opinions, our physician reviewers hold active board certifications and maintain current clinical practice. Their opinions reflect today's clinical environment — not decade-old textbook standards." },
  { title: "Full investigation lifecycle support", body: "From the moment you receive a civil investigative demand or RAC audit notice through final resolution, we can place experts who support document review, interview preparation, and written submissions to the relevant agency." },
  { title: "Proactive compliance positioning", body: "The most effective healthcare compliance support happens before a subpoena arrives. We place compliance experts who assess current program gaps and design remediation plans that reduce audit and investigation risk." },
  { title: "Transaction-ready due diligence", body: "For healthcare M&A, regulatory exposure that isn't identified pre-close becomes the buyer's problem. Our compliance experts conduct pre-acquisition reviews that identify billing irregularities, coding risks, and regulatory flags before they become post-close liabilities." },
  { title: "Multi-disciplinary coverage", body: "Healthcare compliance spans billing, privacy, clinical practice, employment, and corporate structure. We maintain experts across all of these domains and can assemble a coordinated team when a matter requires multi-disciplinary input." },
];

const faqs = [
  { q: "What types of healthcare organizations do your compliance experts work with?", a: "Our healthcare compliance experts work with the full range of provider and payer organizations — hospitals and health systems, physician groups and medical practices, home health agencies, long-term care facilities, ambulatory surgery centers, behavioral health providers, health plans and managed care organizations, and pharmaceutical and life sciences companies. The specific compliance framework varies by organization type, and our experts are matched accordingly." },
  { q: "Can you help us respond to a RAC, UPIC, or MAC audit?", a: "Yes. We regularly place former CMS auditors and healthcare billing specialists to support responses to Recovery Audit Contractor, Unified Program Integrity Contractor, and Medicare Administrative Contractor audit requests. Our experts can review the flagged claims, assess the audit findings, prepare the written response, and support appeals if the initial determination is adverse." },
  { q: "What is the difference between a False Claims Act defense and an OIG investigation defense?", a: "A False Claims Act (FCA) defense arises from a qui tam lawsuit filed by a relator or a DOJ-initiated civil enforcement action alleging fraudulent billing to government health programs. An OIG investigation is a federal administrative investigation that may or may not result in a civil or criminal referral. Both require compliance and clinical experts, but the procedural context, discovery obligations, and resolution mechanisms differ significantly. Our experts have experience supporting both." },
  { q: "Can your experts support Stark Law and Anti-Kickback analysis in healthcare transactions?", a: "Yes. Physician compensation arrangements, service line joint ventures, and hospital-physician alignment structures are among the highest-risk areas in healthcare M&A. Our experts analyze these arrangements for Stark Law technical compliance, Anti-Kickback Statute exception and safe harbor applicability, and fair market value — producing written opinions that can be used in regulatory submissions or transaction due diligence." },
  { q: "How quickly can you place a healthcare compliance expert for an urgent matter?", a: "For most compliance matter types, we can identify and confirm an expert within 24–48 hours of intake. For OCR breach response, OIG investigation notices, and CID responses with near-term deadlines, we flag urgency at intake and expedite the matching process. Contact our intake team directly by phone for urgent placements." },
  { q: "Do your clinical experts provide opinions on nursing standards as well as physician standards of care?", a: "Yes. We maintain a network of nursing experts — including nurse practitioners, clinical nurse specialists, and nursing administrators — who can opine on nursing standards of care in medical malpractice, wrongful death, and regulatory licensing matters. We also have experts in pharmacy practice, respiratory therapy, and other allied health disciplines." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5EAF1]">
      <button onClick={() => setOpen(!open)} className="flex w-full items-start justify-between gap-8 py-6 text-left">
        <span className="text-[15px] font-semibold leading-snug text-[#0B1F3A]">{q}</span>
        <span className={`mt-0.5 shrink-0 text-[#C09B5B] transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && <p className="pb-6 text-[14px] leading-[1.85] text-[#6B82A0]">{a}</p>}
    </div>
  );
}

export default function HealthcareCompliance() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F5F6F8]">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='%230B1F3A' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: "60px 60px" }} />
        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#C09B5B]" />
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12 lg:py-32">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.35em] text-[#C09B5B]">Expert Services</p>
            <h1 className="font-light leading-[0.98] tracking-[-0.01em] text-[#0B1F3A]" style={{ fontSize: "clamp(2.65rem, 4.7vw, 4.8rem)" }}>
              Healthcare
              <span className="block italic text-[#C09B5B]">Compliance Experts</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Former regulators, certified compliance officers, and clinical specialists for healthcare litigation, government investigations, and compliance program advisory.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Find a Healthcare Expert
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "Former CMS", l: "& OIG experts" }, { v: "CHC / CHPC", l: "Certified officers" }, { v: "50 states", l: "Jurisdiction coverage" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=85" alt="Healthcare compliance expert" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Areas of Support</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Across the full regulatory landscape</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((item) => (
            <div key={item.title} className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
              <h3 className="mb-3 text-[1rem] font-bold tracking-[-0.01em] text-[#0B1F3A]">{item.title}</h3>
              <p className="text-[13.5px] leading-[1.8] text-[#6B82A0]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#060F1E]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Why ELN</p>
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">Inside knowledge of how regulators think</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="border border-white/[0.08] bg-[#060F1E] p-6 sm:p-7">
                <div className="mb-4 h-px w-8 bg-[#C09B5B]" />
                <h3 className="mb-3 text-[1rem] font-bold text-white">{b.title}</h3>
                <p className="text-[13.5px] leading-[1.8] text-white/50">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Types ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">How We're Engaged</p>
          <h2 className="mb-12 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Four engagement types</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {engagementTypes.map((item) => (
              <div key={item.type} className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
                <h3 className="mb-3 text-[1rem] font-bold text-[#0B1F3A]">{item.type}</h3>
                <p className="text-[14px] leading-[1.8] text-[#6B82A0]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expert Backgrounds + Stats ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Expert Backgrounds</p>
            <h2 className="mb-6 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Practitioners who've sat on both sides of the table</h2>
            <p className="text-[15px] leading-[1.9] text-[#6B82A0]">Our healthcare compliance experts include former CMS employees, OIG investigators, state health department surveyors, and hospital chief compliance officers. They understand regulatory processes from the inside — and that shapes how they advise on matters.</p>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">For clinical matters, our physician reviewers hold active board certifications and maintain current clinical practice — so their opinions reflect today's clinical environment, not textbook standards from a decade ago.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              { stat: "Former CMS", label: "Auditors & surveyors" },
              { stat: "OIG Alumni", label: "Investigation specialists" },
              { stat: "CHC / CHPC", label: "Certified compliance officers" },
              { stat: "50 States", label: "Regulatory jurisdiction coverage" },
            ].map((item) => (
              <div key={item.label} className="border border-[#E5EAF1] p-8">
                <p className="text-[1.5rem] font-light leading-snug tracking-[-0.01em] text-[#0B1F3A]">{item.stat}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B82A0]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">FAQ</p>
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about healthcare compliance experts</h2>
              <p className="mt-5 text-[14px] leading-[1.8] text-[#6B82A0]">Have a matter-specific question? Our team is available to discuss your needs directly.</p>
              <Link href="/contact" className="mt-6 inline-flex text-[11px] font-black uppercase tracking-[0.16em] text-[#C09B5B] hover:opacity-70 transition-opacity">Contact us →</Link>
            </div>
            <div className="border-t border-[#E5EAF1]">
              {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-[#0B1F3A]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Stay Informed</p>
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">Healthcare compliance insights, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">OIG work plan updates, CMS audit program developments, False Claims Act enforcement trends, HIPAA enforcement actions, and Stark Law regulatory guidance — for healthcare counsel, compliance officers, and hospital administrators.</p>
            </div>
            <div>
              {subscribed ? (
                <div className="border border-[#C09B5B]/30 bg-[#C09B5B]/10 p-8">
                  <p className="text-[15px] font-semibold text-white">You're subscribed.</p>
                  <p className="mt-1 text-[13px] text-white/50">We'll be in touch with relevant updates.</p>
                </div>
              ) : (
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">Enter your work email</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@healthsystem.com"
                      className="h-[52px] min-w-0 flex-1 border border-white/10 bg-white/5 px-5 text-[14px] text-white placeholder-white/25 outline-none focus:border-[#C09B5B]"
                    />
                    <button
                      onClick={() => email && setSubscribed(true)}
                      className="h-[52px] bg-[#C09B5B] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A8843D]"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-white/25">No spam. Unsubscribe at any time.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#C09B5B]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-start gap-6 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">Healthcare investigation or litigation support needed?</h2>
            <p className="mt-1 text-[14px] text-white/70">We'll match you with the right compliance or clinical expert for your matter.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Request an Expert →
          </Link>
        </div>
      </section>
    </main>
  );
}