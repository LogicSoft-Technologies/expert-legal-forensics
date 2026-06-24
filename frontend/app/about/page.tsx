import Link from "next/link";

const metrics = [
  { value: "3,200+", label: "Matters supported" },
  { value: "500+", label: "Qualified experts" },
  { value: "15+", label: "Practice areas" },
  { value: "50", label: "State coverage" },
];

const principles = [
  {
    title: "Independence",
    body: "We prioritize objective expert analysis over convenient conclusions. Every engagement begins with a disciplined review of facts, conflicts, methodology, and the evidentiary standard the matter requires.",
  },
  {
    title: "Litigation Readiness",
    body: "Our work is built for adversarial review. We focus on experts, reports, and processes that can withstand deposition, cross-examination, regulatory inquiry, and judicial scrutiny.",
  },
  {
    title: "Specialized Matching",
    body: "We do not treat expertise as interchangeable. Each matter is matched by specialty, jurisdiction, industry context, prior testimony history, and the specific issues in dispute.",
  },
  {
    title: "Confidential Service",
    body: "Sensitive legal, medical, financial, and forensic materials are handled with care, discretion, and a clear chain of responsibility from intake through completion.",
  },
];

const capabilities = [
  "Expert witness sourcing and vetting",
  "Independent medical evaluations",
  "Medical record review and chronology",
  "Economic damages and valuation analysis",
  "Commercial litigation expert support",
  "Digital and cybersecurity forensics",
  "Healthcare compliance consulting",
  "AI compliance and governance advisory",
];

const process = [
  {
    step: "01",
    title: "Matter Intake",
    body: "We begin by understanding the legal posture, timeline, parties, jurisdiction, technical issues, and the type of expert support required.",
  },
  {
    step: "02",
    title: "Conflict & Fit Review",
    body: "Potential experts are screened for conflicts, credentials, testimony history, methodology, availability, and relevance to the matter.",
  },
  {
    step: "03",
    title: "Expert Confirmation",
    body: "You receive a focused recommendation with the expert profile, scope fit, fee expectations, and engagement path before work begins.",
  },
  {
    step: "04",
    title: "Coordinated Delivery",
    body: "Our team supports scheduling, records transfer, report timing, testimony coordination, and follow-up requirements through completion.",
  },
];

const standards = [
  "Conflict checks before recommendation",
  "Credential and licensing verification",
  "Prior testimony and challenge review",
  "Secure document handling",
  "Clear scope and timeline confirmation",
  "Responsive coordination with counsel",
];

const leadership = [
  {
    role: "Legal Strategy",
    title: "Litigation-focused coordination",
    body: "We align expert selection and delivery with the procedural realities of discovery, motion practice, deposition, settlement, and trial.",
  },
  {
    role: "Expert Network",
    title: "Specialists across disciplines",
    body: "Our network spans medical, financial, technical, forensic, compliance, industry, and regulatory expertise for complex matters.",
  },
  {
    role: "Forensic Practice",
    title: "Evidence-first investigation",
    body: "Digital and cybersecurity matters are handled with attention to preservation, chain of custody, defensibility, and reporting clarity.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#06101F] text-white">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1800&q=85"
          alt="Legal and forensic professionals in consultation"
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101F] via-[#06101F]/88 to-[#06101F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101F] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#C09B5B]">
              About Expert Legal &amp; Forensics
            </p>

            <h1
              className="font-serif font-light leading-[1.02] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.8rem, 5.3vw, 5.8rem)" }}
            >
              Built for matters where expertise, evidence, and credibility matter.
            </h1>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.85] text-white/68">
              Expert Legal &amp; Forensics connects attorneys, law firms,
              insurers, corporate legal teams, and regulated organizations with
              vetted expert witnesses, medical reviewers, forensic investigators,
              compliance specialists, and damages professionals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Consultation
              </Link>

              <Link
                href="/expert-services"
                className="inline-flex h-[50px] items-center justify-center border border-white/20 px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mt-12 border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm lg:mt-0">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Operating Standard
            </p>
            <p className="mt-4 text-[1.5rem] font-serif font-light leading-snug text-white">
              Objective analysis, disciplined expert matching, and evidence that
              can withstand scrutiny.
            </p>
            <div className="mt-6 h-px w-full bg-white/10" />
            <p className="mt-5 text-[13px] leading-[1.75] text-white/55">
              Every engagement is managed with attention to conflicts,
              credentials, deadlines, confidentiality, and the forum where the
              opinion will be tested.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5EAF1] bg-[#F7F9FC]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-4 px-6 py-8 sm:px-8 md:grid-cols-4 lg:px-10 xl:px-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="border border-[#E5EAF1] bg-white p-5">
              <p className="font-serif text-[2rem] font-light leading-none text-[#0B1F3A]">
                {metric.value}
              </p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#6B82A0]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Who We Are
            </p>
            <h2 className="font-serif text-[clamp(2.1rem,3.5vw,3.35rem)] font-light leading-[1.12] tracking-[-0.01em] text-[#0B1F3A]">
              A specialist partner for complex legal, medical, financial, and
              forensic matters.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.8] text-[#3D5470] sm:text-base">
            <p>
              Expert Legal &amp; Forensics was founded to solve a practical
              problem: legal teams often need highly qualified experts quickly,
              but directories and generic referral lists do not provide the
              judgment, screening, or coordination complex matters demand.
            </p>
            <p>
              We built a disciplined expert placement and consulting model that
              combines industry knowledge, litigation awareness, forensic rigor,
              and responsive client service. Our role is to help clients find
              the right expert, frame the right questions, and move the matter
              forward with confidence.
            </p>
            <p>
              Whether the engagement involves independent medical evaluation,
              economic damages, digital evidence, AI governance, healthcare
              compliance, or commercial litigation, our standard is the same:
              objective expertise delivered in a form that can be understood,
              defended, and used.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[780px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Our Principles
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              The standards that guide every engagement.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="border border-[#E1E6EF] bg-white p-6 sm:p-7">
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

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              What We Support
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              A coordinated network across the disciplines modern disputes require.
            </h2>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-[#6B82A0]">
              Our work sits at the intersection of expert witness placement,
              forensic investigation, compliance advisory, medical review, and
              litigation support.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border border-[#E5EAF1] bg-[#F7F9FC] px-4 py-3 text-[13.5px] leading-snug text-[#3D5470]"
              >
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#C09B5B]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#071225] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                Our Process
              </p>
              <h2 className="font-serif text-[clamp(2rem,3.3vw,3.15rem)] font-light leading-[1.12] text-white">
                Structured enough for complex matters. Responsive enough for urgent ones.
              </h2>
            </div>
            <p className="max-w-[650px] text-[15px] leading-[1.8] text-white/55 lg:ml-auto">
              We keep the process clear: understand the matter, screen the fit,
              confirm the expert, and coordinate delivery with the level of
              documentation and care the engagement requires.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border border-white/[0.08] bg-white/[0.035] p-6">
                <span className="text-[11px] font-black tracking-[0.18em] text-[#C09B5B]">
                  {item.step}
                </span>
                <h3 className="mt-5 text-[1rem] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-white/52">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Quality Controls
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Built-in review before an expert ever reaches your matter.
            </h2>
            <p className="mt-5 max-w-[600px] text-[15px] leading-[1.8] text-[#6B82A0]">
              Enterprise-grade support means process discipline. We apply
              screening and coordination standards that reduce avoidable risk
              and make engagement management easier for legal teams.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {standards.map((item) => (
              <div key={item} className="border border-[#E5EAF1] bg-white p-5">
                <div className="mb-4 h-px w-8 bg-[#C09B5B]" />
                <p className="text-[13.5px] font-semibold leading-snug text-[#0B1F3A]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[760px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Leadership Model
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Senior judgment across strategy, expertise, and evidence.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {leadership.map((item) => (
              <article key={item.role} className="border border-[#E5EAF1] bg-white p-6 sm:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                  {item.role}
                </p>
                <h3 className="mt-4 font-serif text-[1.55rem] font-light leading-snug text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-[#3D5470]">
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
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/70">
              Start a Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need the right expert, reviewer, investigator, or compliance specialist?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[50px] w-fit shrink-0 items-center justify-center bg-white px-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:bg-[#071225] hover:text-white"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}