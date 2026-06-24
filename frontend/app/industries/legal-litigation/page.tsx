import Link from "next/link";

export const metadata = {
  title: "Legal & Litigation | Expert Legal Network",
  description:
    "Expert witness, forensic, medical review, damages, and litigation support for law firms and trial teams handling complex matters.",
};

const services = [
  {
    title: "Expert Witness Placement",
    body: "Specialty-matched experts for medical, financial, technical, forensic, compliance, and commercial litigation matters.",
  },
  {
    title: "Forensic Investigation",
    body: "Digital evidence preservation, cybersecurity investigation, metadata review, device analysis, and data reconstruction.",
  },
  {
    title: "Medical Record Review",
    body: "Physician-authored chronologies, causation review, treatment necessity analysis, and expert summaries.",
  },
  {
    title: "Economic Damages",
    body: "Lost earnings, lost profits, business valuation, diminution in value, reasonable royalty, and rebuttal damages opinions.",
  },
  {
    title: "Rebuttal Expert Support",
    body: "Rapid identification of qualified experts to review opposing reports, evaluate methodology, and prepare responsive opinions.",
  },
  {
    title: "Trial & Deposition Support",
    body: "Coordination for expert preparation, demonstrative clarity, deposition scheduling, and testimony readiness.",
  },
];

const matterTypes = [
  "Personal injury and catastrophic injury",
  "Commercial litigation and contract disputes",
  "Medical malpractice and standard of care",
  "Employment and wage disputes",
  "Trade secret and IP misappropriation",
  "Cybersecurity and data breach litigation",
  "Insurance coverage and claims disputes",
  "Healthcare and regulatory litigation",
];

const process = [
  {
    step: "01",
    title: "Matter Review",
    body: "We review the case type, procedural posture, jurisdiction, parties, deadlines, and expert discipline needed.",
  },
  {
    step: "02",
    title: "Expert Screening",
    body: "Candidates are screened for credentials, conflicts, methodology, prior testimony, availability, and case fit.",
  },
  {
    step: "03",
    title: "Engagement Coordination",
    body: "We coordinate scope, records transfer, scheduling, report timing, and communication between counsel and the expert.",
  },
  {
    step: "04",
    title: "Litigation Readiness",
    body: "Support continues through reports, rebuttal review, deposition preparation, testimony coordination, and matter completion.",
  },
];

const standards = [
  "Conflict screening before recommendation",
  "Credential and licensing verification",
  "Prior testimony and challenge review",
  "Specialty and jurisdiction matching",
  "Secure document handling",
  "Deadline-aware coordination",
];

export default function LegalLitigationIndustryPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Legal &amp; Litigation
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Expert support for law firms and trial teams handling complex disputes.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We help attorneys identify, vet, and coordinate expert witnesses,
              forensic investigators, medical reviewers, damages experts, and
              technical specialists for matters where credibility and evidence
              quality matter.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Litigation Support
              </Link>

              <Link
                href="/expert-services"
                className="inline-flex h-[50px] items-center justify-center border border-white/20 px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Litigation Focus
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["Experts", "Witness placement and review"],
                ["Evidence", "Forensic and medical analysis"],
                ["Trial", "Report and testimony readiness"],
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
              Litigation support built around expert credibility.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              Legal teams need more than a name from a directory. They need
              experts who fit the facts, forum, technical issues, procedural
              timeline, and opposing strategy. Our process brings discipline to
              expert selection and coordination.
            </p>
            <p>
              From early case assessment through rebuttal, deposition, and trial,
              we support counsel with vetted specialists and evidence-focused
              deliverables that can withstand scrutiny.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[780px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Services For Legal Teams
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Coordinated expert support across the litigation lifecycle.
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
              Support for disputes where facts, methodology, and testimony are tested.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {matterTypes.map((item) => (
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
              A structured engagement path for litigation deadlines.
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
              Quality Controls
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Built to reduce expert selection risk.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              Expert selection can influence settlement posture, motion practice,
              deposition outcomes, and trial presentation. We screen before
              recommendation so counsel can move with confidence.
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

      <section className="bg-[#C09B5B]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
              Start a Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need an expert, reviewer, investigator, or rebuttal specialist?
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