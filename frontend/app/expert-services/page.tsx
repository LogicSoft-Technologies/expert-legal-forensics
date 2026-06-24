import Link from "next/link";

const services = [
  {
    number: "01",
    title: "IME & PQME Network",
    href: "/expert-services/ime-pqme-network",
    category: "Medical Evaluation",
    description:
      "Access board-certified independent medical evaluators and qualified medical evaluators across all major specialties — matched to your jurisdiction, case type, and timeline.",
    capabilities: [
      "Orthopedic, neurology, psychiatry & more",
      "48-hour average placement",
      "Conflict-of-interest screening",
      "Deposition & trial testimony support",
    ],
  },
  {
    number: "02",
    title: "Medical Record Review",
    href: "/expert-services/medical-record-review",
    category: "Clinical Analysis",
    description:
      "Physician-authored chronologies, causation analyses, and peer review letters that transform complex medical records into clear, litigation-ready findings.",
    capabilities: [
      "Chronological summaries",
      "Injury causation & prognosis opinions",
      "Treatment necessity review",
      "72-hour standard turnaround",
    ],
  },
  {
    number: "03",
    title: "Commercial Litigation Experts",
    href: "/expert-services/commercial-litigation",
    category: "Business Disputes",
    description:
      "Industry specialists, forensic accountants, and business valuation experts providing authoritative opinions across every category of complex commercial dispute.",
    capabilities: [
      "Business valuation & damages",
      "Breach of contract & IP disputes",
      "Fraud & financial crime investigation",
      "Construction, real estate & employment",
    ],
  },
  {
    number: "04",
    title: "Economic Damages Experts",
    href: "/expert-services/economic-damages",
    category: "Financial Analysis",
    description:
      "Credentialed economists, forensic accountants, and financial analysts who quantify every form of economic loss with the precision required to withstand cross-examination.",
    capabilities: [
      "Lost earnings & business profits",
      "Unjust enrichment & royalty analysis",
      "Life care cost projections",
      "Rebuttal expert assignments",
    ],
  },
  {
    number: "05",
    title: "AI Compliance & Governance",
    href: "/expert-services/ai-compliance-governance",
    category: "Emerging Technology",
    description:
      "Technical experts and regulatory specialists for AI-related litigation, compliance program development, and governance advisory across every major regulatory framework.",
    capabilities: [
      "EU AI Act & NIST AI RMF compliance",
      "Algorithmic bias & fairness audits",
      "AI litigation expert opinions",
      "Vendor & procurement review",
    ],
  },
  {
    number: "06",
    title: "Healthcare Compliance Experts",
    href: "/expert-services/healthcare-compliance",
    category: "Regulatory Support",
    description:
      "Former regulators, certified compliance officers, and clinical specialists for healthcare litigation, government investigations, and compliance program advisory.",
    capabilities: [
      "HIPAA, Stark Law & Anti-Kickback",
      "Medicare / Medicaid audit defense",
      "False Claims Act & OIG matters",
      "Clinical standards of care opinions",
    ],
  },
];

const stats = [
  { value: "2,400+", label: "Vetted experts" },
  { value: "38", label: "States served" },
  { value: "48 hrs", label: "Avg. placement time" },
  { value: "97%", label: "Case placement rate" },
];

export default function ExpertServicesPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#060F1E] text-white">
        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#C09B5B]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[88rem] px-8 py-28 lg:px-24">
          <p className="mb-6 text-[10px] font-black uppercase tracking-[0.35em] text-[#C09B5B]">
            Expert Services
          </p>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h1
                className="font-light leading-[0.9] tracking-[-0.025em] text-white"
                style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
              >
                Every expert
                <span className="block italic text-[#C09B5B]">your matter requires.</span>
              </h1>
              <div className="mt-8 h-px w-14 bg-[#C09B5B]/40" />
              <p className="mt-7 max-w-[480px] text-[15px] leading-[1.9] text-white/50">
                We connect attorneys, insurers, and corporate legal teams with vetted experts across medical evaluation, forensic investigation, economic damages, and regulatory compliance.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex h-[52px] items-center bg-[#C09B5B] px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#A8843D]"
                >
                  Request an Expert
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] self-end">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#060F1E] px-8 py-8">
                  <p className="text-[2.4rem] font-light leading-none tracking-[-0.02em] text-white">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
      </section>

      {/* ── Services List ── */}
      <section className="mx-auto max-w-[88rem] px-8 py-24 lg:px-24">
        <div className="mb-14 flex items-end justify-between border-b border-[#E5EAF1] pb-8">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">
              What We Offer
            </p>
            <h2 className="font-light text-[2.2rem] leading-tight tracking-[-0.02em] text-[#0B1F3A]">
              Six practice areas
            </h2>
          </div>
          <Link
            href="/contact"
            className="hidden text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B] transition-opacity hover:opacity-60 lg:block"
          >
            Not sure where to start? Talk to us →
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-[#E5EAF1]">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group grid grid-cols-1 gap-8 py-12 transition-colors hover:bg-[#FAFAFA] lg:grid-cols-[80px_1fr_320px] lg:gap-16 lg:px-6"
            >
              {/* Number */}
              <div className="flex items-start">
                <span className="text-[11px] font-black tabular-nums tracking-[0.2em] text-[#C09B5B]/50">
                  {service.number}
                </span>
              </div>

              {/* Main content */}
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#6B82A0]">
                  {service.category}
                </p>
                <h3 className="mb-4 text-[1.5rem] font-light leading-snug tracking-[-0.015em] text-[#0B1F3A] transition-colors group-hover:text-[#C09B5B]">
                  {service.title}
                </h3>
                <p className="max-w-[560px] text-[14px] leading-[1.85] text-[#6B82A0]">
                  {service.description}
                </p>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B] opacity-0 transition-opacity group-hover:opacity-100">
                  Explore service →
                </p>
              </div>

              {/* Capabilities */}
              <div className="self-center">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#0B1F3A]/30">
                  Includes
                </p>
                <ul className="flex flex-col gap-3">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-[#C09B5B]/50" />
                      <span className="text-[13px] leading-snug text-[#6B82A0]">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-[88rem] px-8 py-24 lg:px-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#C09B5B]">
                Our Process
              </p>
              <h2 className="mb-6 font-light text-[2.2rem] leading-tight tracking-[-0.02em] text-[#0B1F3A]">
                Intake to placement in under 48 hours
              </h2>
              <p className="text-[15px] leading-[1.9] text-[#6B82A0]">
                Submit your case details through our intake form or by phone. Our placement team reviews the matter, identifies qualified candidates, and presents a curated shortlist — typically the same business day. We handle scheduling, conflict screening, and document logistics so you can focus on the case.
              </p>
              <p className="mt-5 text-[15px] leading-[1.9] text-[#6B82A0]">
                Every expert we recommend has been independently credentialed and screened for conflicts. We maintain ongoing relationships with our network — so our recommendations reflect current availability and recent testimony performance, not just a directory search.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-px bg-[#E5EAF1]">
              {[
                { step: "Submit intake", detail: "Case type, jurisdiction, and timeline — online or by phone." },
                { step: "Expert matching", detail: "We identify qualified, conflict-free candidates within hours." },
                { step: "Confirm & schedule", detail: "You select from our shortlist. We handle scheduling and onboarding." },
                { step: "Ongoing support", detail: "Report delivery, deposition prep, and trial coordination included." },
              ].map((item, i) => (
                <div key={item.step} className="flex items-start gap-6 bg-white px-8 py-7">
                  <span className="shrink-0 text-[11px] font-black tabular-nums tracking-[0.18em] text-[#C09B5B]/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[#0B1F3A]">{item.step}</p>
                    <p className="mt-1 text-[13px] leading-[1.7] text-[#6B82A0]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-[#0B1F3A]">
        <div className="mx-auto flex max-w-[88rem] flex-col items-start gap-8 px-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-24">
          <div>
            <h2 className="font-light text-[1.8rem] leading-snug tracking-[-0.02em] text-white">
              Ready to retain an expert?
            </h2>
            <p className="mt-2 text-[14px] text-white/45">
              Our intake team responds within one business hour.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center bg-[#C09B5B] px-10 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#A8843D]"
            >
              Begin Intake
            </Link>
            <Link
              href="/about"
              className="inline-flex h-[52px] items-center px-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white/70"
            >
              About ELN →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}