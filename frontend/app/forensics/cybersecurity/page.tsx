import Link from "next/link";

export const metadata = {
  title: "Cybersecurity Forensics | Expert Legal Network",
  description:
    "Cybersecurity forensic investigation for breaches, ransomware, insider threats, cloud compromise, and incident reconstruction.",
};

const capabilities = [
  {
    title: "Breach Reconstruction",
    body: "Review of logs, endpoint data, network activity, cloud events, and authentication records to reconstruct what happened.",
  },
  {
    title: "Ransomware Investigation",
    body: "Analysis of affected systems, encryption activity, malware indicators, lateral movement, and available exfiltration evidence.",
  },
  {
    title: "Account Compromise Review",
    body: "Investigation of email, identity, cloud, MFA, mailbox rule, file-sharing, and administrative account activity.",
  },
  {
    title: "Insider Threat Analysis",
    body: "Review of employee or contractor access, file movement, removable media use, cloud uploads, and policy violations.",
  },
  {
    title: "Security Control Assessment",
    body: "Expert review of security controls, monitoring, policies, response actions, and alignment with reasonable security practices.",
  },
  {
    title: "Regulatory & Insurance Support",
    body: "Technical findings organized for counsel, cyber insurers, notification analysis, board reporting, and regulatory response.",
  },
];

const useCases = [
  "Ransomware and extortion events",
  "Business email compromise",
  "Cloud account compromise",
  "Data breach litigation",
  "Cyber insurance claims",
  "Insider threat investigations",
  "Vendor and third-party incidents",
  "Security negligence allegations",
];

const process = [
  {
    step: "01",
    title: "Stabilize & Scope",
    body: "We identify the incident type, affected systems, available evidence, immediate preservation needs, and legal objectives.",
  },
  {
    step: "02",
    title: "Collect Evidence",
    body: "Relevant endpoint, network, identity, cloud, application, and administrative records are preserved for review.",
  },
  {
    step: "03",
    title: "Reconstruct Events",
    body: "Investigators build a timeline of compromise, access, movement, affected systems, and response actions.",
  },
  {
    step: "04",
    title: "Report Findings",
    body: "Findings are translated into clear legal, operational, insurance, or regulatory language.",
  },
];

const deliverables = [
  "Incident timeline",
  "Root cause analysis",
  "Affected systems summary",
  "Indicators of compromise",
  "Data exposure assessment",
  "Security control review",
  "Regulatory response support",
  "Expert report or declaration",
];

const frameworks = [
  "NIST Cybersecurity Framework",
  "CIS Controls",
  "ISO 27001 concepts",
  "Incident response best practices",
  "Cloud identity review",
  "Reasonable security analysis",
];

const faqs = [
  {
    q: "Can you determine whether data was stolen?",
    a: "Sometimes. The answer depends on available logs, endpoint telemetry, cloud records, network evidence, and attacker behavior. We assess what the evidence supports and what remains uncertain.",
  },
  {
    q: "Do you support cyber insurance matters?",
    a: "Yes. We can help organize technical findings for coverage analysis, business interruption claims, incident documentation, and expert review.",
  },
  {
    q: "Can you assess whether security practices were reasonable?",
    a: "Yes. We can review policies, controls, monitoring, access management, response actions, and alignment with recognized standards or industry expectations.",
  },
];

export default function CybersecurityForensicsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Cybersecurity Forensics
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Incident investigation and breach reconstruction for high-stakes matters.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We investigate cyber incidents, unauthorized access, ransomware,
              insider threats, account compromise, and security failures where
              the facts must be reconstructed and explained clearly.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Cyber Forensics Support
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
              Incident Focus
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["Breach", "Root cause and impact review"],
                ["Logs", "Event and access reconstruction"],
                ["Response", "Legal-ready findings"],
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
              Cyber incidents require technical depth and legal clarity.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              When a security event becomes a lawsuit, insurance claim,
              regulatory inquiry, or board-level matter, organizations need more
              than a technical incident summary. They need a defensible
              investigation that explains what happened and why.
            </p>
            <p>
              Our cybersecurity forensic work helps identify root cause, scope
              affected systems, evaluate available evidence of data exposure,
              and organize findings for legal, regulatory, operational, or
              insurance use.
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
              Investigation support for cyber events that carry legal exposure.
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
              For breach response, litigation, insurance, and regulatory review.
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
              From incident facts to defensible findings.
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
              Deliverables & Frameworks
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Findings organized for technical and legal audiences.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              Cybersecurity findings must be accurate, but they also need to be
              usable by counsel, executives, regulators, insurers, and
              non-technical decision makers.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[...deliverables, ...frameworks].map((item) => (
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
              Common questions about cyber forensic investigations.
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
              Start a Cyber Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need help investigating a breach, compromise, or cyber claim?
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