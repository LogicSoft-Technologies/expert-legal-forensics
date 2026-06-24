"use client";

import Link from "next/link";
import { useState } from "react";

const deliverables = [
  { title: "Chronological Summaries", body: "Clear, date-ordered medical chronologies that organize years of records into a format counsel can read in minutes." },
  { title: "Injury Causation Analysis", body: "Expert opinions linking documented medical evidence to alleged incidents — identifying gaps, inconsistencies, and supporting findings." },
  { title: "Treatment Necessity Review", body: "Evaluation of whether past, current, and proposed treatments are medically necessary and consistent with the standard of care." },
  { title: "Prognosis & Future Care", body: "Life care cost projections and future medical need assessments authored by licensed clinicians, suitable for damages calculations." },
  { title: "Peer Review Letters", body: "Physician-authored letters for insurance and litigation use, reviewing treating records against applicable clinical guidelines." },
  { title: "Independent Expert Summaries", body: "Concise, attorney-ready summaries authored by board-certified specialists that distill complex medical records into actionable findings." },
];

const useCases = [
  "Workers' compensation defense",
  "Personal injury litigation",
  "Medical malpractice",
  "Insurance coverage disputes",
  "Long-term disability claims",
  "Mass tort case management",
];

const benefits = [
  { title: "Physician-authored, every time", body: "Every review is completed by a licensed, board-certified physician — not support staff or paralegals summarizing records. Our reviewers are active clinicians applying current clinical standards." },
  { title: "HIPAA-compliant chain of custody", body: "All records are handled through encrypted, HIPAA-compliant transmission protocols with documented chain-of-custody tracking suitable for litigation." },
  { title: "Specialty-matched reviewers", body: "We assign reviewers based on the clinical specialty relevant to your case — not just whoever is available. An orthopedic injury gets an orthopedic reviewer." },
  { title: "Consistent, court-ready format", body: "Reports follow a consistent format attorneys and adjusters know how to use — with clear section headings, opinion statements, and supporting citations to the record." },
  { title: "Expedited 24-hour turnaround", body: "For urgent matters, expedited review is available with 24-hour turnaround on standard record volumes. Contact our intake team to confirm availability." },
  { title: "Supplemental opinions on request", body: "If new records are produced in discovery or a treating physician issues an updated report, we can engage the reviewer for a supplemental opinion without re-engaging the full intake process." },
];

const faqs = [
  { q: "Who actually reviews the records — a physician or a paralegal?", a: "Every medical record review we produce is authored by a licensed, board-certified physician or specialist in the relevant clinical field. We do not use paralegals, nurses, or support staff as the primary reviewer. If a nurse case manager or life care planner is involved in a specific deliverable, that role is clearly identified in the report." },
  { q: "What volume of records can you handle?", a: "We have handled single-matter engagements ranging from a few hundred pages to over 100,000 pages across mass tort portfolios. For high-volume matters, we can deploy a review team and provide rolling deliverables on an agreed schedule rather than waiting for completion of the entire record set." },
  { q: "Can the reviewing physician testify as an expert witness?", a: "Yes. Many of our reviewing physicians are also available for deposition and trial testimony. If you anticipate needing testimony, inform us at intake so we can confirm the reviewer's availability and willingness to testify before assigning them to your matter." },
  { q: "How do you handle confidentiality and HIPAA compliance?", a: "All records are transmitted through encrypted, HIPAA-compliant file transfer protocols. We maintain Business Associate Agreements with all reviewing physicians and operate under documented data handling policies. Chain-of-custody documentation is available for all engagements upon request." },
  { q: "What is the standard turnaround time?", a: "Standard turnaround is 72 hours for review volumes under 2,000 pages. Expedited 24-hour turnaround is available for urgent matters. For larger record volumes or complex multi-claimant matters, we provide a scoped timeline at intake based on the specific volume and deliverable type." },
  { q: "Can you review records in languages other than English?", a: "Yes, for Spanish-language records we can engage bilingual reviewing physicians. For other languages, we coordinate with certified medical translators prior to review. Inform our intake team of any non-English records at the time of submission." },
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

export default function MedicalRecordReview() {
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
              Medical Record
              <span className="block italic text-[#C09B5B]">Review &amp; Analysis</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Physician-authored chronologies, causation analyses, and peer review letters that transform complex medical records into clear, litigation-ready findings.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Submit Records for Review
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "72 hrs", l: "Standard turnaround" }, { v: "24 hrs", l: "Expedited" }, { v: "Board-cert.", l: "Physician reviewers" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&q=85" alt="Medical record review" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">What We Produce</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Six core review deliverables</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
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
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Our Standards</p>
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">Why our reviews hold up under scrutiny</h2>
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

      {/* ── Use Cases + Turnaround ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Common Use Cases</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Where we're most often engaged</h2>
              <div className="flex flex-col divide-y divide-[#E5EAF1]">
                {useCases.map((uc) => (
                  <div key={uc} className="flex items-center gap-4 py-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C09B5B]" />
                    <span className="text-[14px] font-medium text-[#3D5470]">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Turnaround & Delivery</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Reports when you need them</h2>
              <p className="text-[15px] leading-[1.9] text-[#6B82A0]">Standard reviews on record volumes under 2,000 pages are delivered within 72 hours. Expedited 24-hour turnaround is available for urgent matters. For high-volume or multi-claimant engagements, we scope a custom delivery schedule at intake.</p>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">All reports are HIPAA-compliant and produced with chain-of-custody documentation where litigation requires it. Supplemental opinions are available when new records are produced in discovery.</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[{ stat: "72 hrs", label: "Standard turnaround" }, { stat: "24 hrs", label: "Expedited available" }].map((item) => (
                  <div key={item.label} className="border border-[#E5EAF1] bg-white p-6">
                    <p className="text-[1.8rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{item.stat}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B82A0]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">FAQ</p>
            <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about medical record review</h2>
            <p className="mt-5 text-[14px] leading-[1.8] text-[#6B82A0]">Have a specific question about your matter? Reach out directly.</p>
            <Link href="/contact" className="mt-6 inline-flex text-[11px] font-black uppercase tracking-[0.16em] text-[#C09B5B] hover:opacity-70 transition-opacity">Contact us →</Link>
          </div>
          <div className="border-t border-[#E5EAF1]">
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-[#0B1F3A]">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Stay Informed</p>
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">Medical-legal insights, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">Updates on medical record review standards, causation opinion jurisprudence, IME best practices, and expert witness developments — for litigators, adjusters, and risk counsel.</p>
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
                      placeholder="you@lawfirm.com"
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
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">Ready to submit records for review?</h2>
            <p className="mt-1 text-[14px] text-white/70">Secure upload available. Assignments confirmed within one business hour.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Start a Review →
          </Link>
        </div>
      </section>
    </main>
  );
}