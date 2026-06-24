"use client";

import Link from "next/link";
import { useState } from "react";

const evaluatorTypes = [
  { specialty: "Orthopedic Surgery", description: "Spine, joint, and musculoskeletal injury evaluations for workers' compensation and personal injury matters." },
  { specialty: "Neurology & Neurosurgery", description: "TBI, nerve injury, and spinal cord assessments with detailed causation and prognosis opinions." },
  { specialty: "Psychiatry & Psychology", description: "Mental health causation, disability rating, and apportionment evaluations." },
  { specialty: "Internal Medicine", description: "Complex systemic condition reviews covering cardiovascular, pulmonary, and chronic disease claims." },
  { specialty: "Pain Management", description: "Objective chronic pain assessments with treatment necessity and apportionment opinions." },
  { specialty: "Occupational Medicine", description: "Work-relatedness determinations, return-to-work assessments, and industrial injury evaluations." },
];

const process = [
  { step: "01", title: "Intake & Matching", body: "Submit your case details. We identify specialty-matched evaluators based on injury type, jurisdiction, and scheduling needs — typically within 24 hours." },
  { step: "02", title: "Evaluator Confirmation", body: "We verify credentials, confirm board certifications, and ensure the evaluator carries no conflicts of interest before scheduling." },
  { step: "03", title: "Evaluation & Report", body: "The evaluation proceeds. Reports are delivered on agreed timelines — expedited options available for urgent matters." },
  { step: "04", title: "Testimony Support", body: "When depositions or trial testimony are required, we coordinate scheduling and deposition prep with your evaluator." },
];

const benefits = [
  { title: "Jurisdiction-matched placement", body: "We match evaluators who are licensed, credentialed, and familiar with local workers' compensation boards and state-specific PQME requirements — not just the nearest available physician." },
  { title: "Conflict-of-interest screening included", body: "Every evaluator is screened against your claimant, treating physicians, and opposing counsel before placement. Conflicts are disclosed proactively — never discovered at deposition." },
  { title: "One point of contact, start to finish", body: "Your assigned placement coordinator manages the entire engagement from initial matching through report delivery and deposition scheduling. You are never passed between departments." },
  { title: "Expedited placements available", body: "For matters with approaching deadlines, we maintain a network of evaluators available for accelerated timelines — without compromising credential quality." },
  { title: "Report quality guarantee", body: "If a delivered report does not address the referral questions in a manner suitable for submission, we will arrange a supplemental addendum at no additional cost." },
  { title: "National reach, local precision", body: "With evaluators in all 50 states, we can place board-certified specialists in major and secondary markets alike — with advice on jurisdiction-specific evaluation requirements." },
];

const faqs = [
  { q: "What is the difference between an IME and a PQME?", a: "An Independent Medical Evaluation (IME) is used broadly in personal injury, disability, and insurance contexts to obtain an objective medical opinion. A Qualified Medical Evaluator (QME) or Panel Qualified Medical Evaluator (PQME) is a California-specific DWC designation — these evaluators hold specific certifications and are subject to additional regulatory requirements around scheduling, reporting format, and party communications." },
  { q: "How quickly can you place an evaluator?", a: "In most major markets, we confirm a credentialed evaluator within 24–48 hours of intake. For specialty-specific requests in secondary markets, allow 3–5 business days. Expedited placement is available for urgent matters — contact our intake team to discuss your timeline." },
  { q: "Do you handle scheduling logistics?", a: "Yes. Once you confirm a placement, our team handles all coordination with the evaluator's office — appointment confirmation, records transmission, and calendar management. You receive confirmation with all logistical details and do not need to contact the evaluator's office directly." },
  { q: "Can the evaluator testify at deposition or trial?", a: "All evaluators in our network are available for deposition and trial testimony as part of their engagement. We coordinate scheduling for testimony appearances and can facilitate pre-deposition preparation sessions between counsel and the evaluator upon request." },
  { q: "What if I need an evaluation in a state with strict panel requirements?", a: "We are well-versed in state-specific panel requirements including California PQME panel selection rules, and can advise on proper procedures to ensure your evaluation is not subject to procedural challenge." },
  { q: "How are evaluators vetted for bias or prior adverse credibility findings?", a: "Our vetting process includes review of prior published opinions, known adverse credibility rulings, Daubert challenge history, and any DWC disciplinary history where applicable. We do not recommend evaluators with undisclosed adverse history — and where a prior finding exists, we disclose it before placement." },
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

export default function IMEPQMENetwork() {
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
              IME &amp; PQME
              <span className="block italic text-[#C09B5B]">Evaluator Network</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Board-certified independent medical evaluators and qualified medical evaluators across all major specialties — matched to your jurisdiction, case type, and timeline.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Request an Evaluator
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "48 hrs", l: "Avg placement" }, { v: "2,400+", l: "Evaluators" }, { v: "38 states", l: "Coverage" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85" alt="Medical evaluation" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Specialty Coverage</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Evaluators across every major discipline</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {evaluatorTypes.map((item) => (
            <div key={item.specialty} className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
              <h3 className="mb-3 text-[1rem] font-bold tracking-[-0.01em] text-[#0B1F3A]">{item.specialty}</h3>
              <p className="text-[13.5px] leading-[1.8] text-[#6B82A0]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-[#060F1E]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Why ELN</p>
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">What sets our evaluator network apart</h2>
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

      {/* ── Process ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">How It Works</p>
          <h2 className="mb-16 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">From intake to report delivery</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="border-t-2 border-[#C09B5B] pt-7">
                <span className="mb-5 block text-[11px] font-black tabular-nums tracking-[0.2em] text-[#C09B5B]/60">{item.step}</span>
                <h3 className="mb-3 text-[1rem] font-bold text-[#0B1F3A]">{item.title}</h3>
                <p className="text-[13.5px] leading-[1.8] text-[#6B82A0]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[{ stat: "48 hrs", label: "Average placement" }, { stat: "2,400+", label: "Credentialed evaluators" }, { stat: "38", label: "States covered" }, { stat: "100%", label: "Conflict screened" }].map((item) => (
            <div key={item.label} className="border border-[#E5EAF1] bg-white px-6 py-8 text-center">
              <p className="text-[2.2rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{item.stat}</p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B82A0]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">FAQ</p>
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about IME &amp; PQME placements</h2>
              <p className="mt-5 text-[14px] leading-[1.8] text-[#6B82A0]">Don't see your question? Our intake team is available by phone or email.</p>
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
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">IME &amp; PQME insights, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">Updates on PQME panel reforms, workers' compensation developments, evaluator credentialing standards, and expert witness best practices — for attorneys, adjusters, and risk managers.</p>
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
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">Need an evaluator for an upcoming matter?</h2>
            <p className="mt-1 text-[14px] text-white/70">Our intake team responds within one business hour.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Begin Intake →
          </Link>
        </div>
      </section>
    </main>
  );
}