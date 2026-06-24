import Link from "next/link";

const industries = [
  {
    title: "Legal & Litigation",
    href: "/industries/legal-litigation",
    description: "We serve plaintiff and defense counsel across every litigation type personal injury, commercial disputes, intellectual property, mass torts, and class actions. Our expert network is built for the pace and pressure of active litigation.",
    stat: { value: "1,200+", label: "Litigation Matters" },
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80",
    accentColor: "bg-[#0B1F3A]",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Healthcare litigation and regulatory exposure demand experts who understand clinical standards, coding practices, and the regulatory landscape. We support hospitals, health systems, physicians, and payers with end-to-end expert services.",
    stat: { value: "800+", label: "Healthcare Engagements" },
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=700&q=80",
    accentColor: "bg-[#1A7EC4]",
  },
  {
    title: "Technology",
    href: "/industries/technology",
    description: "Technology disputes — from software IP claims to AI liability to cybersecurity breaches — require experts who understand both technical and legal dimensions. Our technology practice covers digital forensics, source code analysis, and AI governance.",
    stat: { value: "350+", label: "Technology Cases" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&q=80",
    accentColor: "bg-[#C09B5B]",
  },
  {
    title: "Corporate Organizations",
    href: "/industries/corporate",
    description: "Corporate legal departments and their outside counsel rely on Expert Legal &amp; Forensics for the full spectrum of litigation support from internal investigations and compliance audits to damages expert testimony in commercial arbitrations.",
    stat: { value: "600+", label: "Corporate Engagements" },
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80",
    accentColor: "bg-[#3D5470]",
  },
];

export default function HomeIndustries() {
  return (
    <section className="py-32 bg-[#F5F6F8]" aria-labelledby="industries-heading">
      <div className="max-w-[82rem] mx-auto px-6">

        {/* Header */}
        <div className="max-w-[720px] mb-16">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C09B5B] mb-4">Industries We Serve</p>
          <h2 id="industries-heading" className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#0B1F3A] mb-6">
            Deep expertise across the sectors<br />that need it most.
          </h2>
          <p className="text-[1.0625rem] text-[#3D5470] leading-[1.75] max-w-[580px]">
            Litigation support is not one-size-fits-all. Each industry carries its own regulatory
            environment, terminology, and evidentiary standards. Our practice is organized around
            the industries we serve — not just the services we offer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group flex flex-col rounded-lg overflow-hidden bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[600ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/20 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute bottom-5 left-6">
                  <p className="font-serif text-[1.875rem] font-light text-white leading-none tracking-[-0.02em]">{industry.stat.value}</p>
                  <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/60 mt-0.5">{industry.stat.label}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className={`font-serif text-[1.5rem] font-normal text-[#0B1F3A] tracking-[-0.02em] mb-4 pl-4 border-l-[3px] ${industry.accentColor.replace("bg-", "border-")}`}>
                  {industry.title}
                </h3>
                <p className="text-sm text-[#3D5470] leading-[1.75] mb-6 flex-1" dangerouslySetInnerHTML={{ __html: industry.description }} />
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A7EC4] group-hover:text-[#0B1F3A] transition-colors">
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}