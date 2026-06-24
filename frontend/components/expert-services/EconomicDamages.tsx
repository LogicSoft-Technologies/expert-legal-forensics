"use client";

import Link from "next/link";
import { useState } from "react";

const damageTypes = [
  { title: "Lost Earnings & Income", body: "Present-value calculations of lost wages, salary, bonuses, and benefits for personal injury, wrongful termination, and discrimination matters." },
  { title: "Lost Business Profits", body: "Revenue loss analysis for breach of contract, tortious interference, and business interruption claims — with but-for scenario modeling." },
  { title: "Diminution in Value", body: "Quantification of property, asset, or business value reductions attributable to the alleged conduct or loss event." },
  { title: "Unjust Enrichment", body: "Disgorgement analysis tracing the benefit obtained by a defendant through wrongful conduct, applied in IP and trade secret matters." },
  { title: "Life Care Cost Plans", body: "Future medical cost projections developed in collaboration with treating physicians and life care planners for catastrophic injury cases." },
  { title: "Reasonable Royalty", body: "Patent and intellectual property reasonable royalty opinions applying the Georgia-Pacific framework and comparable license analysis." },
];

const credentials = [
  "Certified Public Accountants (CPA)",
  "Accredited in Business Valuation (ABV)",
  "Certified Fraud Examiners (CFE)",
  "Certified Valuation Analysts (CVA)",
  "Ph.D. Economists & Labor Statisticians",
  "Chartered Financial Analysts (CFA)",
];

const benefits = [
  { title: "Transparent methodology, every report", body: "Our experts disclose every assumption and cite every data source. Triers of fact — and opposing counsel — can follow the reasoning from premise to conclusion without needing a finance degree." },
  { title: "Rebuttal expert capability", body: "We regularly engage experts to review and rebut opposing damages reports — identifying unsupported assumptions, inflated projections, and methodological errors that undermine the opposing expert's credibility." },
  { title: "Coordinated with liability experts", body: "Where damages analysis depends on the liability theory, our experts work in coordination with your other retained experts to ensure the damages model tracks the specific conduct at issue." },
  { title: "Scalable for large matters", body: "From a single lost earnings calculation to a multi-plaintiff mass tort damages model, we can scale the engagement accordingly — including team assignments for complex, high-volume matters." },
  { title: "Present value and discount rate expertise", body: "Every future loss calculation applies defensible discount rates grounded in current economic literature — not arbitrary assumptions that opposing experts will immediately challenge." },
  { title: "Deposition-ready from day one", body: "Our damages experts are prepared for deposition from the moment they deliver their report. Their files, working papers, and supporting data are organized for production and cross-examination readiness." },
];

const faqs = [
  { q: "What types of economic damages do your experts calculate?", a: "Our experts calculate the full range of economic damages arising in litigation — lost earnings and income capacity, lost business profits, diminution in value, unjust enrichment, reasonable royalty, life care costs and future medical expenses, and lost household services. For any matter involving a quantifiable economic loss, we have experts with the specific methodological background to address it." },
  { q: "What credentials do your damages experts hold?", a: "Our damages experts hold credentials including CPA, ABV (Accredited in Business Valuation), CVA (Certified Valuation Analyst), CFA (Chartered Financial Analyst), CFE (Certified Fraud Examiner), and Ph.D.-level economics and statistics degrees. The appropriate credential depends on the nature of the damages at issue — we match credential type to your specific case." },
  { q: "Can your experts provide rebuttal opinions on opposing damages reports?", a: "Yes, and this is a significant part of our practice. When opposing counsel designates a damages expert, we can rapidly engage a qualified rebuttal expert to review the opposing report, identify methodological flaws and unsupported assumptions, and author a competing opinion. We can typically confirm a rebuttal expert within 24–48 hours of receiving the opposing report." },
  { q: "How do your experts handle discount rate and present value calculations?", a: "Our economists apply discount rates grounded in current economic literature and market data — not arbitrary assumptions. The appropriate rate depends on the nature of the loss (personal vs. commercial), the applicable jurisdiction, and the relevant time horizon. Our experts are prepared to defend their discount rate selection under cross-examination with cited academic and market support." },
  { q: "What is the difference between a lost profits analysis and a business valuation?", a: "A lost profits analysis quantifies the specific revenue or profit stream lost due to the defendant's conduct over a defined damages period — it is backward-looking and case-specific. A business valuation determines the fair market value of an entire business or business interest at a specific date — it is used in disputes involving diminution in value, partnership dissolution, or shareholder oppression. Many matters require both, and our experts can address each within a coordinated damages framework." },
  { q: "Can your experts work with my liability expert to align the damages model with the liability theory?", a: "Yes. We specifically encourage coordination between damages and liability experts early in the engagement. A damages model that is misaligned with the liability theory — calculating losses that exceed or differ from what the alleged conduct caused — is vulnerable to Daubert challenge on relevance grounds. Our experts coordinate with your liability team to ensure the damages analysis is properly scoped." },
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

export default function EconomicDamages() {
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
              Economic
              <span className="block italic text-[#C09B5B]">Damages Experts</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Credentialed economists, forensic accountants, and financial analysts who quantify every form of economic loss with the precision and transparency required to withstand cross-examination.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Request a Damages Expert
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "$2B+", l: "Damages analyzed" }, { v: "320+", l: "Trial engagements" }, { v: "50 states", l: "Coverage" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85" alt="Economic damages analysis" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Damages Types ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Damages Categories</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Every form of economic loss, quantified</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {damageTypes.map((item) => (
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
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">What makes our damages experts court-ready</h2>
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

      {/* ── Credentials + Methodology ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Expert Credentials</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Qualified to opine. Ready for trial.</h2>
              <div className="flex flex-col divide-y divide-[#E5EAF1]">
                {credentials.map((cred) => (
                  <div key={cred} className="flex items-center gap-4 py-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C09B5B]" />
                    <span className="text-[14px] font-medium text-[#3D5470]">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Our Methodology</p>
              <h2 className="mb-8 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Transparent, defensible, court-tested</h2>
              <p className="text-[15px] leading-[1.9] text-[#6B82A0]">Our damages experts produce reports that explain their methodology in plain terms — so the trier of fact understands not just the number, but the reasoning behind it. Every assumption is disclosed and supported by cited data sources.</p>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">We regularly engage experts for rebuttal assignments, reviewing opposing damages reports and identifying methodological flaws, unsupported assumptions, and inflated projections.</p>
              <div className="mt-8 border-t border-[#E5EAF1] pt-8">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">Also available: rebuttal expert assignments →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[{ stat: "$2B+", label: "Damages analyzed" }, { stat: "320+", label: "Trial engagements" }, { stat: "48 hrs", label: "Expert placement" }, { stat: "50", label: "States & territories" }].map((item) => (
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
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about economic damages experts</h2>
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
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">Economic damages insights, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">Daubert rulings on damages methodology, discount rate developments, lost profits case law, and forensic accounting updates — for litigators, in-house counsel, and financial professionals.</p>
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
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">Need a damages expert for your matter?</h2>
            <p className="mt-1 text-[14px] text-white/70">Share your case type and we'll match you with the right expert.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Begin Intake →
          </Link>
        </div>
      </section>
    </main>
  );
}