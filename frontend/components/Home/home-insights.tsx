import Link from "next/link";

const insights = [
  {
    category: "Expert Witness",
    date: "June 10, 2025",
    readTime: "6 min read",
    title: "Daubert in 2025: What the Latest Circuit Court Rulings Mean for Your Expert Strategy",
    excerpt: "Federal courts have continued to tighten their gatekeeping function under Daubert, with three circuit decisions this term narrowing the scope of admissible expert testimony in damages cases. We break down the implications for litigation counsel.",
    href: "/insights/daubert-2025-circuit-rulings",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    featured: true,
  },
  {
    category: "Forensics",
    date: "May 22, 2025",
    readTime: "8 min read",
    title: "Ransomware Litigation: The Forensic Evidence That Determines Liability",
    excerpt: "As ransomware incidents increasingly trigger civil litigation, the quality of forensic documentation during and after an incident has become determinative. This article outlines the key evidentiary questions courts are asking.",
    href: "/insights/ransomware-litigation-forensic-evidence",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    featured: false,
  },
  {
    category: "AI Compliance",
    date: "May 8, 2025",
    readTime: "5 min read",
    title: "AI Liability Is Here: How Courts Are Beginning to Evaluate Algorithmic Decisions",
    excerpt: "With the first wave of AI liability cases working through federal courts, legal teams are encountering entirely new questions about oversight, documentation, and governance of automated systems.",
    href: "/insights/ai-liability-court-evaluations",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    featured: false,
  },
  {
    category: "Healthcare",
    date: "April 17, 2025",
    readTime: "7 min read",
    title: "The Evolving Standard for IME Reporting in Workers' Compensation: A 2025 Update",
    excerpt: "State workers' compensation boards have issued updated guidance affecting the format, scope, and sufficiency of IME reports. Carriers and defense counsel need to understand how these changes affect their evaluation strategies.",
    href: "/insights/ime-reporting-standards-2025",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    featured: false,
  },
];

export default function HomeInsights() {
  const [featured, ...rest] = insights;

  return (
    <section className="py-32 bg-white" aria-labelledby="insights-heading">
      <div className="max-w-[82rem] mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#C09B5B] mb-4">Insights &amp; Analysis</p>
            <h2 id="insights-heading" className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.12] tracking-[-0.03em] text-[#0B1F3A]">
              Intelligence for the<br />legal professional.
            </h2>
          </div>
          <div>
            <p className="text-[1.0625rem] text-[#3D5470] leading-[1.75] mb-8">
              Our team publishes regular analysis on developments in expert testimony, forensic
              methodology, legal technology, and regulatory compliance written by practitioners,
              for practitioners.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white text-[13px] font-semibold tracking-widest uppercase px-6 py-3 rounded-sm transition-all"
            >
              View All Insights
            </Link>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Featured */}
          <Link href={featured.href} className="group flex flex-col rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-[280px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[600ms]"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.12em] uppercase text-[#0B1F3A] bg-[#C09B5B] px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.06em] uppercase text-[#1A7EC4]">{featured.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#6B82A0]" />
                <span className="text-xs text-[#6B82A0]">{featured.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#6B82A0]" />
                <span className="text-xs text-[#6B82A0]">{featured.readTime}</span>
              </div>
              <h3 className="font-serif text-[1.5rem] font-normal text-[#0B1F3A] leading-[1.25] tracking-[-0.02em] mb-4">{featured.title}</h3>
              <p className="text-sm text-[#3D5470] leading-[1.75] mb-6 flex-1">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A7EC4] group-hover:gap-3 transition-all">
                Read Article
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </Link>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {rest.map((insight) => (
              <Link key={insight.href} href={insight.href} className="group grid grid-cols-[112px_1fr] gap-5 p-5 border border-gray-100 rounded-md hover:shadow-md hover:border-gray-200 transition-all">
                <div className="rounded-md overflow-hidden h-[90px]">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#1A7EC4]">{insight.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#6B82A0]" />
                    <span className="text-[11px] text-[#6B82A0]">{insight.readTime}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B1F3A] leading-snug line-clamp-3">{insight.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}