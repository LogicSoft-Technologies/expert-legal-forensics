import Link from "next/link";

export const metadata = {
  title: "Technology Industry | Expert Legal Network",
  description:
    "Technology expert witness, AI governance, cybersecurity forensics, software dispute, data investigation, and technical litigation support.",
};

const services = [
  {
    title: "Software & Systems Experts",
    body: "Technical specialists for software performance, implementation disputes, source code issues, system architecture, and development practices.",
  },
  {
    title: "AI Governance Experts",
    body: "Experts for AI risk, algorithmic decision-making, model governance, bias review, and regulatory compliance.",
  },
  {
    title: "Cybersecurity Forensics",
    body: "Investigation of breaches, ransomware, account compromise, insider threats, and security control failures.",
  },
  {
    title: "Data Investigation",
    body: "Analysis of repositories, cloud platforms, access records, metadata, file movement, and data integrity questions.",
  },
  {
    title: "IP & Trade Secret Support",
    body: "Technical review for misappropriation, software similarity, confidential information access, and repository activity.",
  },
  {
    title: "Technology Damages",
    body: "Experts for lost profits, reasonable royalty, business interruption, valuation, and technology-related damages analysis.",
  },
];

const matters = [
  "Software implementation disputes",
  "SaaS contract and service-level disputes",
  "AI bias, governance, and compliance matters",
  "Cybersecurity breach litigation",
  "Trade secret and source code disputes",
  "Platform data access investigations",
  "Technology vendor disputes",
  "IP damages and reasonable royalty analysis",
];

const process = [
  {
    step: "01",
    title: "Technical Scoping",
    body: "We identify the systems, platforms, code, data, architecture, timelines, and expert discipline required.",
  },
  {
    step: "02",
    title: "Expert Matching",
    body: "Experts are matched by technical domain, industry experience, litigation history, methodology, and availability.",
  },
  {
    step: "03",
    title: "Evidence Review",
    body: "Relevant documents, data, repositories, system records, contracts, logs, or code materials are reviewed.",
  },
  {
    step: "04",
    title: "Findings & Testimony",
    body: "Opinions are organized for counsel, executives, regulators, insurers, reports, deposition, or trial use.",
  },
];

const domains = [
  "Artificial intelligence and machine learning",
  "Software engineering and architecture",
  "Cybersecurity and incident response",
  "Cloud platforms and SaaS systems",
  "Databases and data pipelines",
  "Product development and implementation",
  "Source code and repository analysis",
  "Technology valuation and damages",
];

export default function TechnologyIndustryPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Technology
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Technical experts for software, cybersecurity, data, and AI disputes.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We support technology companies, counsel, insurers, investors, and
              enterprise teams with expert witnesses, forensic investigators,
              AI governance specialists, cybersecurity experts, and data analysts.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Technology Expert Support
              </Link>

              <Link
                href="/forensics/cybersecurity"
                className="inline-flex h-[50px] items-center justify-center border border-white/20 px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
              >
                Cyber Forensics
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Technology Focus
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["AI", "Governance and model review"],
                ["Cyber", "Incident and breach analysis"],
                ["Data", "Systems and records investigation"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="font-serif text-[1.65rem] font-light leading-none text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Overview
            </p>
            <h2 className="font-serif text-[clamp(2.05rem,3.3vw,3.2rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Technology disputes require experts who understand how systems actually work.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              Technical matters often involve source code, implementation
              decisions, cybersecurity controls, cloud records, data pipelines,
              AI models, vendor obligations, or disputed system performance.
            </p>
            <p>
              We connect clients with practitioners who can explain complex
              systems clearly, evaluate technical evidence, and produce opinions
              that are useful in litigation, arbitration, regulatory review, and
              internal decision-making.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[780px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Technology Support
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Expert support across software, AI, cybersecurity, and data.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="border border-[#E1E6EF] bg-white p-6 sm:p-7">
                <div className="mb-5 h-px w-10 bg-[#C09B5B]" />
                <h3 className="font-serif text-[1.45rem] font-light leading-snug text-[#0B1F3A]">
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
              Matter Types
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Built for technical disputes, investigations, and regulatory questions.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {matters.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-[#E5EAF1] bg-[#F7F9FC] px-4 py-3 text-[13.5px] leading-snug text-[#3D5470]">
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#C09B5B]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071225] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-12 max-w-[820px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Process
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.3vw,3.15rem)] font-light leading-[1.12] text-white">
              Technical review with legal and operational clarity.
            </h2>
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
              Technical Domains
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Specialists across modern technology environments.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              We match experts to the technical reality of the dispute, not just
              a broad category. Domain fit matters when the evidence is complex.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {domains.map((item) => (
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

      <section className="bg-[#C09B5B]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
              Start a Technology Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need a software, AI, cybersecurity, or data expert?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[50px] w-fit items-center justify-center bg-white px-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:bg-[#071225] hover:text-white"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}