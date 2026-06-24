import Link from "next/link";

const services = [
  {
    title: "IME & PQME Network",
    href: "/expert-services/ime-pqme-network",
    description: "Connect with independent medical examiners and qualified medical evaluators for workers' compensation, personal injury, and disability matters. Our network spans every major specialty, with professionals experienced in producing defensible reports.",
    tags: ["Workers' Comp", "Personal Injury", "Disability"],
  },
  {
    title: "Medical Record Review",
    href: "/expert-services/medical-record-review",
    description: "Our physician reviewers and nurse consultants deliver rigorous medical chronologies, causation analyses, and injury assessments that give your legal team the factual foundation to evaluate exposure, negotiate settlements, and prepare for trial.",
    tags: ["Chronology", "Causation", "Injury Analysis"],
  },
  {
    title: "Commercial Litigation Experts",
    href: "/expert-services/commercial-litigation",
    description: "Complex business disputes require experts who speak the language of the boardroom and the courtroom. Our commercial litigation specialists cover business valuation, industry standards, contract analysis, and competitive practices.",
    tags: ["Business Disputes", "Valuation", "Industry Standards"],
  },
  {
    title: "Economic Damages Experts",
    href: "/expert-services/economic-damages",
    description: "Our financial experts apply accepted methodologies to calculate lost profits, lost earnings, business interruption, and unjust enrichment producing models that hold up under the most rigorous cross-examination.",
    tags: ["Lost Profits", "Earnings Analysis", "Financial Modeling"],
  },
  {
    title: "AI Compliance & Governance",
    href: "/expert-services/ai-compliance-governance",
    description: "As AI becomes central to enterprise operations and regulatory scrutiny, organizations face new categories of liability. Our governance experts assess algorithmic risk, evaluate compliance frameworks, and provide analysis for AI-related litigation.",
    tags: ["AI Risk", "Regulatory Compliance", "Governance"],
  },
  {
    title: "Healthcare Compliance Experts",
    href: "/expert-services/healthcare-compliance",
    description: "Our compliance experts provide independent assessment of HIPAA adherence, billing and coding practices, Stark law compliance, and clinical protocol standards supporting both regulatory response and civil litigation defense.",
    tags: ["HIPAA", "Billing & Coding", "Regulatory Defense"],
  },
  {
    title: "Digital & Cyber Forensics",
    href: "/expert-services/digital-cyber-forensics",
    description: "Our forensic investigators apply court-accepted methodologies to collect, preserve, and analyze electronic evidence from endpoints, mobile devices, cloud platforms, and network infrastructure maintaining unbroken chain of custody.",
    tags: ["Digital Evidence", "Cybersecurity", "eDiscovery"],
  },
];

export default function HomeServices() {
  return (
    <section className="py-32 bg-white" aria-labelledby="services-heading">
      <div className="max-w-[82rem] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C09B5B] mb-4">Expert Witness Services</p>
            <h2 id="services-heading" className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#0B1F3A]">
              Specialists across every dimension<br />of complex litigation.
            </h2>
          </div>
          <Link
            href="/expert-services"
            className="inline-flex items-center gap-2 border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[13px] font-semibold tracking-widest uppercase px-6 py-3 rounded-sm transition-all flex-shrink-0 self-start lg:self-end"
          >
            View All Services
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col p-8 border border-gray-200 rounded-sm bg-white hover:border-transparent hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C09B5B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              <h3 className="text-base font-semibold text-[#0B1F3A] mb-4 leading-snug">{service.title}</h3>
              <p className="text-sm text-[#3D5470] leading-[1.7] mb-5 flex-1">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-semibold tracking-wide uppercase text-[#3D5470] bg-[#E8EDF4] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A7EC4] group-hover:text-[#8A6D3F] transition-colors">
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Learn More
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}