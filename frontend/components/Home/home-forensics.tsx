import Link from "next/link";

const forensicServices = [
  {
    number: "01",
    title: "Digital Forensics",
    href: "/forensics/digital",
    description:
      "We conduct systematic examination of computers, mobile devices, storage media, and enterprise systems to recover, preserve, and authenticate digital evidence.",
    capabilities: [
      "Hard drive and mobile device imaging",
      "Deleted file and artifact recovery",
      "File system timeline analysis",
      "Hash verification and chain of custody",
    ],
  },
  {
    number: "02",
    title: "Cybersecurity Forensics",
    href: "/forensics/cybersecurity",
    description:
      "When a breach, ransomware event, or insider threat becomes the subject of litigation or regulatory inquiry, organizations need an independent forensic team.",
    capabilities: [
      "Breach and intrusion reconstruction",
      "Malware analysis and attribution",
      "Log analysis and event correlation",
      "Regulatory notification support",
    ],
  },
  {
    number: "03",
    title: "Data Investigation",
    href: "/forensics/data-investigation",
    description:
      "Whether the matter involves misappropriated trade secrets, unauthorized data access, or destruction of electronically stored information, our investigators apply forensic methodology.",
    capabilities: [
      "Trade secret and IP misappropriation",
      "Spoliation analysis and ESI preservation",
      "Cloud and SaaS data investigation",
      "Metadata analysis and document authentication",
    ],
  },
  {
    number: "04",
    title: "Electronic Discovery Support",
    href: "/forensics/data-investigation#ediscovery",
    description:
      "Our eDiscovery specialists manage the EDRM workflow from legal hold and data collection through processing, review, and production.",
    capabilities: [
      "Legal hold administration",
      "Custodian interviews and data mapping",
      "Processing, culling, and review workflows",
      "Production formatting and certification",
    ],
  },
];

export default function HomeForensics() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1F3A] py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="forensics-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,white 60px,white 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,white 60px,white 61px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="mb-12 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Forensics &amp; Digital Investigation
            </p>

            <h2
              id="forensics-heading"
              className="font-heading text-[clamp(2.2rem,3.8vw,3.8rem)] font-light leading-[1.08] tracking-[-0.01em] text-white"
            >
              The digital record tells the truth.
            </h2>
          </div>

          <div className="max-w-[680px] lg:ml-auto">
            <p className="text-[15px] leading-[1.8] text-white/60 sm:text-base">
              Every device, network, and application leaves a trail. Our
              forensics practice follows that trail, applying court-accepted
              methodology to recover, preserve, and present digital evidence in
              any forum.
            </p>

            <Link
              href="/forensics"
              className="mt-6 inline-flex items-center border border-white/20 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition-all duration-200 hover:border-[#C09B5B] hover:text-[#C09B5B]"
            >
              Explore All Forensics &rarr;
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {forensicServices.map((service) => (
            <article
              key={service.number}
              className="relative border border-white/10 bg-white/[0.045] p-6 transition-colors duration-200 hover:bg-white/[0.07] sm:p-7 lg:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#C09B5B]" />

              <div className="mb-5 flex items-baseline gap-4">
                <span className="text-[11px] font-black tracking-[0.14em] text-[#C09B5B]">
                  {service.number}
                </span>

                <h3 className="font-heading text-[1.55rem] font-light tracking-[-0.01em] text-white sm:text-[1.75rem]">
                  {service.title}
                </h3>
              </div>

              <p className="mb-6 text-[14px] leading-[1.75] text-white/58">
                {service.description}
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#C09B5B]" />
                    <span className="text-[13px] leading-snug text-white/58">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/[0.08] pt-5">
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.16em] text-[#C09B5B] transition hover:opacity-70"
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