import Link from "next/link";

const footerLinks = {
  Services: [
    ["Expert Witness Services", "/expert-services"],
    ["IME & PQME Network", "/expert-services/ime-pqme-network"],
    ["Medical Record Review", "/expert-services/medical-record-review"],
    ["Economic Damages Experts", "/expert-services/economic-damages"],
    ["AI Compliance & Governance", "/expert-services/ai-compliance-governance"],
  ],
  Forensics: [
    ["Digital Forensics", "/forensics/digital"],
    ["Cybersecurity Forensics", "/forensics/cybersecurity"],
    ["Data Investigation", "/forensics/data-investigation"],
    ["Electronic Discovery", "/forensics"],
  ],
  Industries: [
    ["Legal & Litigation", "/industries/legal-litigation"],
    ["Healthcare", "/industries/healthcare"],
    ["Technology", "/industries/technology"],
    ["Corporate Organizations", "/industries/corporate"],
  ],
  Company: [
    ["About Us", "/about"],
    ["Insights", "/insights"],
    ["Contact", "/contact"],
    ["Request Consultation", "/contact"],
  ],
};

const pillars = [
  { icon: "M17 20h10M12 20h2M12 8h14M12 14h14", label: "Vetted Experts" },
  { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", label: "Rigorous Review" },
  { icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11", label: "Litigation Focused" },
  { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l2 2 4-4", label: "Results Driven" },
];

function ElnLogoLight({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="44" cy="44" r="42" stroke="white" strokeWidth="2.5" fill="transparent" />
      <path d="M44 4 A40 40 0 0 1 84 44" stroke="#C09B5B" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M44 84 A40 40 0 0 1 4 44" stroke="#C09B5B" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="44" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="white" letterSpacing="-1">ELN</text>
      <line x1="28" y1="30" x2="60" y2="30" stroke="white" strokeWidth="1.4" opacity="0.7" />
      <line x1="44" y1="18" x2="44" y2="30" stroke="white" strokeWidth="1.4" opacity="0.7" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#071225] text-white">
      <div className="border-b border-white/[0.07]">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-6 sm:grid-cols-4 sm:px-8 lg:px-10 xl:px-12">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex items-center gap-3 border-white/[0.07] py-5 sm:justify-center sm:border-r sm:px-4 last:border-r-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C09B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={pillar.icon} />
              </svg>
              <span className="text-[10px] font-black uppercase tracking-[0.16em] text-white/55">
                {pillar.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 pb-8 pt-12 sm:px-8 lg:px-10 lg:pt-14 xl:px-12">
        <div className="grid gap-10 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.9fr_1.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <ElnLogoLight size={52} />
              <span className="leading-none">
                <span className="block font-heading text-[1rem] font-semibold uppercase tracking-wide text-white">
                  Expert Legal
                </span>
                <span className="block font-heading text-[1.22rem] font-bold uppercase tracking-[0.06em] text-[#C09B5B]">
                  Network&trade;
                </span>
                <span className="mt-1 block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-white/35">
                  Expertise &middot; Evidence &middot; Results
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-[380px] text-[13.5px] leading-[1.8] text-white/55">
              Independent expert witness, compliance, medical review, and forensic
              investigation support for attorneys, law firms, and corporations
              handling complex matters.
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a href="tel:+18005550100" className="text-[13px] text-white/60 transition hover:text-[#D4B483]">
                (800) 555-0100
              </a>
              <a href="mailto:consultations@expertlegalnetwork.com" className="text-[13px] text-white/60 transition hover:text-[#D4B483]">
                consultations@expertlegalnetwork.com
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-[13px] leading-6 text-white/56 transition hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 border-b border-white/[0.08] py-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Request an Expert Consultation
            </p>
            <h2 className="mt-3 max-w-[680px] font-heading text-[clamp(1.75rem,3vw,2.45rem)] font-light leading-[1.2] text-white">
              Start with the right expert, the right evidence, and a litigation-focused process.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 w-fit items-center justify-center bg-[#C09B5B] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
          >
            Begin Consultation
          </Link>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-[11.5px] text-white/38 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Expert Legal Network&trade;. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms of Use</Link>
            <Link href="/contact" className="transition hover:text-white">Confidential Intake</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}