"use client";

import Link from "next/link";
import { useState } from "react";

const serviceAreas = [
  { title: "AI Risk Assessment", body: "Structured evaluation of your AI systems against applicable regulatory frameworks — EU AI Act, NIST AI RMF, and sector-specific guidance." },
  { title: "Governance Framework Design", body: "Policy, process, and organizational design to establish accountable AI governance that satisfies board, regulator, and audit requirements." },
  { title: "Litigation Expert Opinions", body: "Authoritative opinions on AI system behavior, algorithmic decision-making, and whether outputs met applicable standards of care." },
  { title: "Bias & Fairness Auditing", body: "Technical audits evaluating AI model outputs for discriminatory patterns — required in EEOC, CFPB, and fair housing regulatory proceedings." },
  { title: "Vendor & Procurement Review", body: "Independent assessment of third-party AI tools before enterprise deployment — covering data privacy, contractual risk, and compliance posture." },
  { title: "Incident Response Support", body: "Expert consultation for AI-related incidents including algorithmic harm events, data breaches, and regulatory investigations." },
];

const regulatoryAreas = [
  { label: "EU AI Act (2024)", scope: "High-risk system classification, conformity assessment, CE marking" },
  { label: "NIST AI RMF 1.0", scope: "Risk management, trustworthiness, and governance standards" },
  { label: "EEOC & Title VII", scope: "Automated employment decision tool compliance" },
  { label: "CFPB / Fair Lending", scope: "Credit decisioning model bias and adverse action requirements" },
  { label: "HIPAA / FDA SaMD", scope: "AI-enabled medical device and health data governance" },
  { label: "California CPRA / AI Rules", scope: "Automated decision-making rights and opt-out obligations" },
];

const benefits = [
  { title: "Technical depth meets legal credibility", body: "Our AI experts hold advanced degrees in machine learning and computer science and have direct experience as expert witnesses — bridging the gap between technical accuracy and courtroom persuasiveness." },
  { title: "Regulatory insider knowledge", body: "Our roster includes former FTC, CFPB, and EEOC technologists who have authored AI policy guidance from inside the agencies that now enforce it. That perspective is invaluable in regulatory defense." },
  { title: "Framework-agnostic assessment", body: "We assess AI systems against whichever framework applies to your situation — EU AI Act, NIST RMF, sector-specific guidance, or emerging state-level rules — without bias toward any particular compliance product." },
  { title: "Pre-litigation risk identification", body: "Beyond litigation support, we engage proactively to identify AI liability exposure before it becomes a lawsuit — reviewing governance structures, model documentation, and incident response readiness." },
  { title: "Bias audit documentation for regulatory defense", body: "For organizations facing EEOC, CFPB, or HUD investigations related to algorithmic decision-making, we produce bias audit documentation that meets regulatory evidentiary standards." },
  { title: "Rapid deployment for emerging matters", body: "AI-related litigation moves quickly and often involves novel legal theories. Our placement team can identify and confirm an AI expert within 24 hours of intake for urgent matters." },
];

const faqs = [
  { q: "What qualifies someone as an AI expert witness?", a: "A qualified AI expert witness should hold advanced technical credentials — typically a graduate degree in computer science, statistics, or machine learning — and have direct, hands-on experience building or auditing AI systems. For regulatory matters, relevant policy or agency experience adds significant credibility. We screen for all three: technical depth, practical experience, and prior testimony or regulatory engagement." },
  { q: "Can you provide experts for AI bias claims under the EEOC or CFPB?", a: "Yes. Automated employment decision tools and credit decisioning models are active areas of regulatory enforcement. Our experts have audited hiring algorithms, credit scoring models, and tenant screening systems for discriminatory disparate impact — and have produced audit documentation suitable for EEOC and CFPB proceedings." },
  { q: "What is the EU AI Act and does it affect US-based companies?", a: "The EU AI Act is the European Union's comprehensive regulatory framework for AI systems, enacted in 2024. It applies to any AI system that operates in or affects EU residents — regardless of where the developer or deployer is headquartered. US companies selling AI-enabled products or services in the EU are subject to its requirements, including conformity assessment obligations for high-risk systems." },
  { q: "How do you assess whether an AI system met the applicable standard of care?", a: "Standard of care analysis for AI systems draws on industry best practices (such as IEEE and ISO/IEC standards), applicable regulatory guidance, and the specific design and deployment context. Our experts evaluate whether the system was designed, tested, documented, and monitored in a manner consistent with what a reasonable developer in that space would have done at the time of the alleged harm." },
  { q: "Can your experts assist with AI governance program design — not just litigation?", a: "Yes. A significant portion of our AI engagements are advisory rather than litigation-driven. We place governance framework consultants who can assess your current AI governance posture, identify gaps against applicable frameworks, and help design policy and process infrastructure to meet board, regulator, and audit requirements." },
  { q: "What types of AI incidents trigger the need for expert support?", a: "Common triggers include: a regulatory investigation into algorithmic decision-making; a plaintiff lawsuit alleging harm caused by an AI output; a data breach involving AI-processed data; a product liability claim related to an AI-enabled device; and internal discovery that an AI system produced discriminatory or harmful outputs. We can support incident response, regulatory response, and litigation defense across all of these scenarios." },
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

export default function AIComplianceGovernance() {
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
              AI Compliance
              <span className="block italic text-[#C09B5B]">&amp; Governance</span>
            </h1>
            <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.8] text-[#6B82A0] sm:text-base">
              Technical experts and regulatory specialists for AI-related litigation, compliance program development, and governance advisory — across every major AI regulatory framework.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/contact" className="inline-flex h-[50px] items-center justify-center bg-[#0B1F3A] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#C09B5B] sm:px-9">
                Engage an AI Expert
              </Link>
              <Link href="/expert-services" className="inline-flex h-[50px] items-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A]/50 transition-colors hover:text-[#0B1F3A] sm:px-4">
                ← All Services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-[#E5EAF1] pt-7 sm:grid-cols-3">
              {[{ v: "6+", l: "Regulatory frameworks" }, { v: "Former FTC", l: "& CFPB experts" }, { v: "24 hrs", l: "Expert placement" }].map(s => (
                <div key={s.l}>
                  <p className="text-[1.5rem] font-light tracking-[-0.02em] text-[#0B1F3A]">{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B82A0]">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden min-h-[520px] lg:block">
            <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85" alt="AI governance and compliance" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5F6F8]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="mb-10 border-b border-[#E5EAF1] pb-7 lg:mb-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Services</p>
          <h2 className="font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Advisory, audit, and litigation support</h2>
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
          <h2 className="mb-10 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-white lg:mb-12">What our AI experts bring to your matter</h2>
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

      {/* ── Regulatory Coverage ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Regulatory Coverage</p>
          <h2 className="mb-12 font-light text-[clamp(1.85rem,3vw,2.55rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Frameworks our experts navigate</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {regulatoryAreas.map((item) => (
              <div key={item.label} className="bg-white p-7">
                <h3 className="mb-1.5 text-[14px] font-bold text-[#0B1F3A]">{item.label}</h3>
                <p className="text-[13px] leading-[1.7] text-[#6B82A0]">{item.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Context + Credentials ── */}
      <section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">Why It Matters Now</p>
            <h2 className="mb-6 font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">AI liability is a litigation frontier</h2>
            <p className="text-[15px] leading-[1.9] text-[#6B82A0]">As AI systems make consequential decisions in employment, lending, healthcare, and criminal justice, courts and regulators are increasingly scrutinizing whether those decisions meet applicable standards. AI-related litigation is accelerating across every industry.</p>
            <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">Whether you represent a plaintiff harmed by an algorithmic decision or an enterprise defending its AI governance practices, our experts provide the technical and regulatory credibility your matter requires.</p>
          </div>
          <div className="border-l border-[#E5EAF1] pl-16">
            <p className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">Our experts hold credentials from</p>
            <div className="flex flex-col divide-y divide-[#E5EAF1]">
              {["MIT, Stanford, Carnegie Mellon (CS/ML)", "Former FTC, CFPB & EEOC technologists", "IEEE & ACM senior members", "ISO/IEC AI standards contributors", "Licensed attorneys with AI regulatory focus"].map((c) => (
                <div key={c} className="flex items-center gap-4 py-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C09B5B]" />
                  <span className="text-[14px] text-[#3D5470]">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">FAQ</p>
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-[#0B1F3A]">Common questions about AI compliance &amp; governance experts</h2>
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
              <h2 className="font-light text-[clamp(1.75rem,2.5vw,2.25rem)] leading-tight tracking-[-0.01em] text-white">AI regulatory &amp; litigation updates, direct to your inbox</h2>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/45">EU AI Act implementation updates, EEOC and CFPB enforcement actions, algorithmic bias litigation developments, and AI governance best practices — for counsel, compliance officers, and technology executives.</p>
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
                      placeholder="you@company.com"
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
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">AI compliance or litigation matter?</h2>
            <p className="mt-1 text-[14px] text-white/70">Our team specializes in placing AI experts quickly in emerging matters.</p>
          </div>
          <Link href="/contact" className="inline-flex h-[50px] shrink-0 items-center bg-white px-7 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white sm:px-9">
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}