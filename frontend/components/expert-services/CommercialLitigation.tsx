"use client";

import Link from "next/link";
import { useState } from "react";

const expertiseAreas = [
  { title: "Business Valuation", body: "Certified business appraisers providing defensible enterprise, equity, and asset valuations for disputes, M&A, and partnership dissolution." },
  { title: "Breach of Contract", body: "Industry specialists who can opine on contractual obligations, commercial standards of care, and the reasonableness of disputed conduct." },
  { title: "Intellectual Property", body: "Patent, trademark, and trade secret experts covering technical validity, infringement analysis, and reasonable royalty opinions." },
  { title: "Fraud & Financial Crime", body: "Forensic accountants and former regulators with experience identifying fraudulent schemes, tracing diverted assets, and quantifying losses." },
  { title: "Construction & Real Estate", body: "Licensed engineers, architects, and real estate appraisers for construction defect, delay, and property valuation disputes." },
  { title: "Employment & HR", body: "Human resources, wage and hour, and employment practices experts for discrimination, wrongful termination, and FLSA disputes." },
];

const industries = [
  "Financial Services",
  "Technology & SaaS",
  "Real Estate & Construction",
  "Manufacturing",
  "Professional Services",
  "Healthcare & Life Sciences",
  "Energy & Utilities",
  "Retail & Consumer Goods",
];

const benefits = [
  { title: "Sector-specific depth, not generalists", body: "We match your matter to experts who have operated inside the industry at issue — not academics who study it. A SaaS contract dispute gets a SaaS operator. A construction defect claim gets a licensed engineer with field experience." },
  { title: "Daubert-ready credentials", body: "Every expert we recommend has been reviewed for prior Daubert and Frye challenge history. We disclose any prior exclusions before placement and only recommend experts whose methodology is court-tested and defensible." },
  { title: "Rebuttal expert capability", body: "When opposing counsel designates an expert, we can rapidly identify and place a qualified rebuttal expert — reviewing their report, identifying methodological weaknesses, and authoring a competing opinion." },
  { title: "Conflict screening before recommendation", body: "We screen every candidate against the parties, counsel, and related entities before presenting a recommendation. You receive a clean expert — not one who worked for the opposing firm three years ago." },
  { title: "Deposition and trial-tested", body: "Every expert we place has prior deposition experience. For trial testimony, we can facilitate preparation sessions between your trial team and the expert well in advance of the hearing." },
  { title: "Rapid turnaround on report deadlines", body: "Commercial litigation moves fast. We can identify and confirm an expert within 24 hours of intake, and can work with experts to meet accelerated report production schedules when court-imposed deadlines are tight." },
];

const faqs = [
  { q: "What types of commercial disputes do your experts typically handle?", a: "Our commercial litigation experts cover the full spectrum of business disputes — breach of contract, business valuation, partnership and shareholder disputes, intellectual property infringement, fraud and financial crime, employment and wage disputes, construction defect, and regulatory enforcement matters. If your matter involves a business loss or commercial claim, we have experts who have worked in that context." },
  { q: "How do you ensure an expert can survive a Daubert challenge?", a: "Before recommending any expert, we review their prior testimony record, published reports, and any known Daubert or Frye challenge history. We only place experts whose methodology is grounded in accepted professional standards and who have demonstrated the ability to defend their opinions under cross-examination. Where a prior challenge exists, we disclose it fully and assess whether it materially affects reliability for your specific matter." },
  { q: "Can you place a rebuttal expert after opposing counsel has designated theirs?", a: "Yes, and this is a significant part of our practice. When you receive an opposing expert report, we can rapidly identify a qualified rebuttal expert, facilitate their review of the opposing report, and support the drafting of a responsive opinion. We can typically confirm a rebuttal expert within 24–48 hours of receiving the opposing report." },
  { q: "Do your experts have experience with specific industry standards and customs?", a: "Yes. We specifically seek experts who have operated as practitioners within the relevant industry — not just academics or consultants who study it. An expert on software development contract disputes should have built and shipped software. An expert on banking practices should have worked inside a bank. That practitioner credibility makes a material difference in how juries and judges receive their testimony." },
  { q: "What if I need an expert for an international commercial arbitration?", a: "We have placed experts in ICC, AAA, JAMS, and LCIA arbitration proceedings. International commercial arbitration often requires experts who are familiar with the applicable procedural rules around expert testimony, including the IBA Rules on the Taking of Evidence. Inform our intake team of the arbitral forum and seat at the outset." },
  { q: "How are expert fees structured?", a: "Expert fees vary by discipline, experience level, and engagement scope. We can provide a fee range estimate at intake and will confirm the expert's hourly rate and estimated engagement cost before you confirm the placement. We do not mark up expert fees — our fee is a separate placement and coordination fee disclosed transparently." },
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

export default function CommercialLitigation() {
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
              Commercial
              <span className="block italic text-[#C09B5B]">Litigation Experts</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Industry specialists, forensic accountants, and business valuation experts retained to provide authoritative opinions in complex commercial disputes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Find an Expert
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "180+", l: "Commercial specialists" }, { v: "94%", l: "Daubert survival" }, { v: "24 hrs", l: "Expert placement" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=85" alt="Commercial litigation expert" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Expertise Areas ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Areas of Expertise</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Specialists for every commercial dispute</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((item) => (
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
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">What separates our commercial experts from a directory search</h2>
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

      {/* ── Industries + Credentials ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Industries Served</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Sector-specific expertise</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {industries.map((ind) => (
                  <div key={ind} className="border border-[#E5EAF1] bg-white px-5 py-4">
                    <span className="text-[13.5px] font-medium text-[#3D5470]">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Our Experts</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Credentialed practitioners with courtroom experience</h2>
              <p className="text-[15px] leading-[1.9] text-[#6B82A0]">Commercial litigation demands experts who understand both the technical subject matter and the demands of adversarial proceedings. Every expert we place has prior testimony experience and is prepared to withstand rigorous cross-examination.</p>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">We screen for prior Daubert challenges, adverse credibility findings, and conflicts of interest before recommending any expert to your matter.</p>
              <div className="mt-10 flex gap-6 border-t border-[#E5EAF1] pt-8">
                {[{ stat: "180+", label: "Commercial specialists" }, { stat: "94%", label: "Daubert survival rate" }].map((s) => (
                  <div key={s.label}>
                    <p className="text-[2.2rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.stat}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#6B82A0]">{s.label}</p>
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
            <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about commercial litigation experts</h2>
            <p className="mt-5 text-[14px] leading-[1.8] text-[#6B82A0]">Have a matter-specific question? Our team is available to discuss your needs directly.</p>
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
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">Commercial litigation insights, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">Daubert developments, expert witness case law, industry-specific dispute trends, and valuation methodology updates — for trial counsel, in-house legal teams, and commercial litigators.</p>
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
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">Complex dispute. Specialist required.</h2>
            <p className="mt-1 text-[14px] text-white/70">Describe your matter and we'll identify the right expert within 24 hours.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Request a Specialist →
          </Link>
        </div>
      </section>
    </main>
  );
}