import Link from "next/link";

const solutions = [
  {
    id: "expert-witness",
    number: "01",
    tab: "Expert Witness Services",
    headline: "Independent Expertise That Holds Up in Court",
    body: "From initial case evaluation through trial testimony, our curated network of expert witnesses delivers credible, defensible analysis across medicine, finance, technology, and beyond. We match the right expert to your specific matter - not just a name from a roster.",
    bullets: [
      "IME & PQME evaluations",
      "Medical record review and chronology",
      "Economic damages quantification",
      "Technology and AI governance experts",
    ],
    href: "/expert-services",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
  },
  {
    id: "forensics",
    number: "02",
    tab: "Forensics & Investigation",
    headline: "Following the Evidence Wherever It Leads",
    body: "Digital evidence is now central to almost every complex dispute. Our forensics team applies rigorous methodology to recover, preserve, and analyze electronic evidence across devices, networks, and cloud environments.",
    bullets: [
      "Digital and cybersecurity forensics",
      "Electronic discovery support",
      "Data investigation and recovery",
      "Incident response and chain of custody",
    ],
    href: "/forensics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80",
  },
  {
    id: "litigation",
    number: "03",
    tab: "Litigation Support",
    headline: "Strategic Counsel at Every Phase of the Dispute",
    body: "Complex litigation demands more than expert signatures. We provide integrated consulting from pre-filing case strategy and damages modeling through deposition preparation, rebuttal analysis, and trial support.",
    bullets: [
      "Commercial litigation expert support",
      "Damages modeling and financial analysis",
      "Healthcare compliance consulting",
      "AI compliance and governance advisory",
    ],
    href: "/expert-services/commercial-litigation",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80",
  },
];

export default function HomeIntegratedSolutions() {
  return (
    <section
      className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28"
      aria-labelledby="integrated-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Your Strategic Partner from Start to Finish
            </p>
            <h2
              id="integrated-heading"
              className="font-heading text-[clamp(2.15rem,3.8vw,3.5rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0B1F3A]"
            >
              Integrated solutions for every phase of your matter.
            </h2>
          </div>

          <p className="max-w-[640px] text-[15px] leading-[1.8] text-[#3D5470] lg:ml-auto sm:text-base">
            Expert witness support, forensic investigation, and litigation
            consulting should feel coordinated from the first call. These core
            service paths are built to keep your matter moving with clarity.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className="overflow-hidden border border-[#E1E6EF] bg-white shadow-[0_12px_32px_rgba(11,31,58,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C09B5B]/45 hover:shadow-[0_18px_42px_rgba(11,31,58,0.09)]"
            >
              <div className="relative h-[230px] overflow-hidden bg-[#0B1F3A]">
                <img
                  src={solution.image}
                  alt={solution.headline}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 text-[10px] font-black uppercase tracking-[0.18em] text-[#D4B483]">
                  {solution.number} / {solution.tab}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-heading text-[1.65rem] font-light leading-[1.2] tracking-[-0.01em] text-[#0B1F3A]">
                  {solution.headline}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.75] text-[#3D5470]">
                  {solution.body}
                </p>

                <ul className="mt-6 space-y-3">
                  {solution.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[13.5px] leading-snug text-[#3D5470]">
                      <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="#C09B5B" strokeWidth="1.4" />
                        <path d="M5 8l2 2 4-4" stroke="#C09B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.href}
                  className="mt-7 inline-flex items-center border-b border-[#C09B5B] pb-px text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:text-[#C09B5B]"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}