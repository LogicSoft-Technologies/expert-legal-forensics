import Link from "next/link";

export const metadata = {
  title: "Data Investigation | Expert Legal Network",
  description:
    "Data investigation support for eDiscovery, metadata analysis, document authentication, trade secret matters, and electronic record review.",
};

const capabilities = [
  {
    title: "Data Source Mapping",
    body: "Identification of relevant custodians, repositories, cloud systems, databases, messaging tools, archives, and business platforms.",
  },
  {
    title: "ESI & Discovery Support",
    body: "Support for legal holds, custodian interviews, collection planning, production questions, and disputed discovery issues.",
  },
  {
    title: "Access & Usage Analysis",
    body: "Investigation of who accessed, modified, exported, downloaded, shared, deleted, or transferred key files and records.",
  },
  {
    title: "Metadata Review",
    body: "Analysis of document properties, timestamps, authorship indicators, version history, embedded data, and file provenance.",
  },
  {
    title: "Trade Secret Investigation",
    body: "Review of repository access, file movement, cloud uploads, removable media use, and suspicious employee activity.",
  },
  {
    title: "Data Integrity Review",
    body: "Assessment of whether records appear complete, reliable, altered, duplicated, missing, or inconsistent with system activity.",
  },
];

const useCases = [
  "Trade secret disputes",
  "Electronic discovery disputes",
  "Document authenticity challenges",
  "Data deletion and spoliation claims",
  "Internal investigations",
  "Contract and transaction record disputes",
  "Employee departure investigations",
  "Cloud repository and SaaS data review",
];

const process = [
  {
    step: "01",
    title: "Identify Sources",
    body: "We map custodians, systems, repositories, databases, messages, cloud platforms, and records likely to contain relevant data.",
  },
  {
    step: "02",
    title: "Preserve Records",
    body: "Relevant files, logs, metadata, communications, and system records are preserved to reduce loss or alteration risk.",
  },
  {
    step: "03",
    title: "Analyze Activity",
    body: "Data is reviewed for access, movement, modification, deletion, authenticity, gaps, and inconsistencies.",
  },
  {
    step: "04",
    title: "Organize Findings",
    body: "Results are organized into clear summaries, timelines, exhibits, discovery support materials, or expert-ready reporting.",
  },
];

const deliverables = [
  "Data source map",
  "Custodian and system summary",
  "Access activity timeline",
  "Metadata review findings",
  "Discovery support plan",
  "Authenticity assessment",
  "Spoliation analysis support",
  "Investigation report",
];

const matters = [
  "Employment disputes",
  "Corporate investigations",
  "Civil litigation",
  "Commercial disputes",
  "Regulatory inquiries",
  "Insurance investigations",
  "IP and trade secret matters",
  "Discovery motion practice",
];

const faqs = [
  {
    q: "Can you help find where relevant data is stored?",
    a: "Yes. Data mapping is a core part of this work. We help identify systems, custodians, repositories, archives, and cloud platforms likely to contain relevant records.",
  },
  {
    q: "Can you tell whether a document was altered?",
    a: "Often we can evaluate metadata, file history, version records, embedded properties, and surrounding system activity to assess authenticity or inconsistency.",
  },
  {
    q: "Do you support eDiscovery?",
    a: "Yes. We support legal holds, source identification, collection planning, custodian workflows, production questions, and disputed discovery issues.",
  },
];

export default function DataInvestigationPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Data Investigation
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Discovery, analysis, and authentication of critical digital information.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We help clients locate, understand, and validate important data
              across documents, databases, communication systems, cloud
              platforms, and electronic business records.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Data Investigation Support
              </Link>

              <Link
                href="/forensics"
                className="inline-flex h-[50px] items-center justify-center border border-white/20 px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
              >
                All Forensics
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Investigation Scope
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["ESI", "Discovery support"],
                ["Data", "Tracing and analysis"],
                ["Records", "Authentication review"],
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
              Critical facts often live inside messy data.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              Modern disputes often turn on what the records show: who accessed
              data, when files changed, whether documents are authentic, what
              systems contain relevant information, and whether production is
              complete.
            </p>
            <p>
              Our data investigation work helps legal and corporate teams turn
              scattered electronic information into usable evidence for
              discovery, investigation, negotiation, regulatory review, and
              litigation strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[780px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Capabilities
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Structured investigation for records, repositories, and disputed data.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
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
              Common Engagements
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              For discovery disputes, internal investigations, and data-driven claims.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
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
              From scattered data to organized findings.
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
              Deliverables & Matter Types
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Clear outputs for counsel and investigation teams.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              Data investigation deliverables are built to clarify where records
              live, what activity occurred, what the metadata supports, and how
              the record should be presented.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[...deliverables, ...matters].map((item) => (
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
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 sm:px-8 lg:grid-cols-[340px_1fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              FAQ
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,2.8vw,2.5rem)] font-light leading-[1.15] text-[#0B1F3A]">
              Common questions about data investigation.
            </h2>
          </div>

          <div className="border-t border-[#E5EAF1]">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-[#E5EAF1] py-6">
                <h3 className="text-[15px] font-bold leading-snug text-[#0B1F3A]">
                  {item.q}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-[#6B82A0]">
                  {item.a}
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
              Start a Data Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need help locating, authenticating, or analyzing critical data?
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