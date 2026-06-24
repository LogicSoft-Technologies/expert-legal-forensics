import Link from "next/link";

export const metadata = {
  title: "Digital Forensics | Expert Legal Network",
  description:
    "Court-ready digital forensics support for electronic evidence preservation, device analysis, metadata review, and expert reporting.",
};

const capabilities = [
  {
    title: "Forensic Imaging",
    body: "Defensible acquisition of computers, external drives, removable media, and other storage devices with documented chain of custody.",
  },
  {
    title: "Mobile Device Review",
    body: "Analysis of available messages, call logs, photos, app activity, location artifacts, and device usage records.",
  },
  {
    title: "Deleted File Recovery",
    body: "Recovery and interpretation of deleted files, file system artifacts, recycle bin activity, application traces, and user activity evidence.",
  },
  {
    title: "Metadata Analysis",
    body: "Review of timestamps, authorship indicators, document properties, version history, embedded data, and authenticity concerns.",
  },
  {
    title: "Timeline Reconstruction",
    body: "Chronological reconstruction of file access, downloads, transfers, logins, edits, deletions, and relevant user behavior.",
  },
  {
    title: "Expert Reporting",
    body: "Clear forensic findings, declarations, affidavits, demonstratives, and testimony support for contested digital evidence.",
  },
];

const useCases = [
  "Trade secret and IP misappropriation",
  "Employee misconduct and data theft",
  "Spoliation and deletion claims",
  "Document authenticity disputes",
  "Insurance and fraud investigations",
  "Civil litigation involving electronic records",
  "Business divorce and shareholder disputes",
  "Internal corporate investigations",
];

const process = [
  {
    step: "01",
    title: "Evidence Scoping",
    body: "We identify relevant devices, custodians, accounts, systems, dates, and preservation priorities before collection begins.",
  },
  {
    step: "02",
    title: "Preservation",
    body: "Digital evidence is preserved using defensible forensic methods and chain-of-custody documentation.",
  },
  {
    step: "03",
    title: "Forensic Analysis",
    body: "Examiners review artifacts, metadata, activity timelines, deleted content, and system records relevant to the matter.",
  },
  {
    step: "04",
    title: "Findings & Reporting",
    body: "Results are delivered in clear language for counsel, claims teams, investigators, executives, or court use.",
  },
];

const deliverables = [
  "Forensic collection plan",
  "Chain-of-custody documentation",
  "Device imaging summary",
  "Activity timeline",
  "Metadata analysis report",
  "Deleted artifact findings",
  "Expert declaration or report",
  "Deposition and testimony support",
];

const standards = [
  "Forensically sound acquisition",
  "Repeatable methodology",
  "Evidence integrity protection",
  "Clear custody documentation",
  "Scope control and privilege awareness",
  "Court-ready reporting",
];

const faqs = [
  {
    q: "Can you preserve evidence before a lawsuit is filed?",
    a: "Yes. Early preservation is often the best way to prevent loss, alteration, or later disputes over authenticity. We can help identify what should be preserved and how to preserve it defensibly.",
  },
  {
    q: "Do you analyze phones and computers?",
    a: "Yes. We support computers, mobile devices, storage media, cloud accounts, and available platform records. The scope depends on access, device type, encryption, legal authority, and technical limitations.",
  },
  {
    q: "Can your findings be used in court?",
    a: "Our workflow is designed for legal defensibility, including documented methodology, chain of custody, repeatable analysis, and clear reporting.",
  },
];

export default function DigitalForensicsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Digital Forensics
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Digital evidence preservation and analysis for complex legal matters.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We help legal teams, insurers, organizations, and investigators
              recover, preserve, authenticate, and interpret digital evidence
              across devices, storage media, accounts, cloud systems, and
              enterprise platforms.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Digital Forensics Support
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
              Evidence Scope
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["Devices", "Computers, phones, storage media"],
                ["Records", "Files, metadata, logs, messages"],
                ["Output", "Court-ready forensic reporting"],
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
              Forensic work built for legal scrutiny.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              Digital evidence is fragile. Metadata changes, files disappear,
              accounts sync, logs rotate, and informal collection can create
              admissibility problems. Our forensic process is designed to
              preserve evidence integrity while giving counsel practical answers.
            </p>
            <p>
              We help clients understand what happened, when it happened, who
              was involved, what data changed, and whether the available digital
              record supports the theory of the matter.
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
              Full-scope support from preservation through expert reporting.
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
              Built for disputes, investigations, claims, and internal reviews.
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
              A controlled workflow from intake to findings.
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
              Deliverables & Standards
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Clear outputs and defensible handling.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              The goal is not just to collect data. The goal is to preserve,
              analyze, explain, and support the technical record in a way that
              legal and business decision makers can use.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[...deliverables, ...standards].map((item) => (
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
              Common questions about digital forensics.
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
              Start a Forensic Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need help preserving or analyzing digital evidence?
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