import Link from "next/link";

const pillars = [
  {
    label: "Perspective",
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 7V3M20 25v-4M13 14H9M31 14h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 33c0-5.523 5.373-10 12-10s12 4.477 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    body1:
      "With over a decade of practice and thousands of completed legal matters, our consultants bring perspective that only comes from repeated, high-stakes engagement. We have worked across every major practice area from catastrophic injury to commercial fraud to AI governance.",
    body2:
      "That depth means we ask the right questions before your case begins. Early case assessment, damages modeling, and expert positioning are not afterthoughts here they are how we work.",
    cta: { label: "Our Approach", href: "/about" },
  },
  {
    label: "Process",
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 16h14M13 21h10M13 26h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="30" r="6" fill="#0B1F3A" />
        <path d="M27.5 30l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    body1:
      "Expert Legal & Forensics acts as an extension of your legal team - not a vendor you manage. From intake through trial, our process ensures every engagement is coordinated, documented, and responsive.",
    body2:
      "Our consulting teams work directly alongside your attorneys to develop a case narrative grounded in defensible evidence, anticipate opposing expert challenges, and prepare compelling, accessible testimony.",
    cta: { label: "Our Process", href: "/about#process" },
  },
  {
    label: "Precision",
    icon: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
        <path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    body1:
      "In litigation, imprecision is a liability. Our experts are selected not just for credentials, but for their ability to express complex technical and scientific concepts with clarity and conviction under cross-examination.",
    body2:
      "Whether quantifying lost profits, tracing digital evidence through a breach investigation, or assessing compliance failures in a regulated industry, precision is the standard we hold ourselves and every expert in our network to.",
    cta: { label: "Our Experts", href: "/expert-services" },
  },
];

export default function HomeAdvantage() {
  return (
    <section
      className="relative overflow-hidden bg-[#E8EDF4] py-20 sm:py-24 lg:py-28"
      aria-labelledby="advantage-heading"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto mb-12 max-w-[720px] text-center lg:mb-14">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C09B5B]">
            The ELF Advantage
          </p>

          <h2
            id="advantage-heading"
            className="font-serif text-[clamp(2rem,3.4vw,3.35rem)] font-light leading-[1.12] tracking-[-0.01em] text-[#0B1F3A]"
          >
            What sets us apart is not our network. <span className="block">It is our discipline.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {pillars.map((pillar) => (
            <article
              key={pillar.label}
              className="flex min-h-full flex-col border border-[#D9E0EA] bg-white p-6 shadow-[0_10px_30px_rgba(11,31,58,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C09B5B]/45 hover:shadow-[0_18px_40px_rgba(11,31,58,0.09)] sm:p-7 lg:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#E2E7EF] bg-[#F7F9FC] text-[#0B1F3A]">
                {pillar.icon}
              </div>

              <h3 className="mb-4 font-serif text-[1.65rem] font-normal tracking-[-0.01em] text-[#0B1F3A]">
                {pillar.label}
              </h3>

              <div className="mb-5 h-px w-10 bg-[#C09B5B]" />

              <div className="flex flex-1 flex-col gap-4">
                <p className="text-[14px] leading-[1.7] text-[#3D5470]">
                  {pillar.body1}
                </p>

                <p className="text-[14px] leading-[1.7] text-[#3D5470]">
                  {pillar.body2}
                </p>
              </div>

              <Link
                href={pillar.cta.href}
                className="group mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-[#0B1F3A] transition-colors hover:text-[#C09B5B]"
              >
                {pillar.cta.label}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}