import Link from "next/link";

const supportItems = [
  "Expert witness sourcing",
  "Medical record review",
  "Digital forensic investigation",
  "Economic damages analysis",
];

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-[#060F1E] text-white lg:min-h-[calc(100svh-118px)]"
      aria-label="Hero"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=2200&q=85"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#060F1E] via-[#060F1E]/86 to-[#060F1E]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-transparent to-transparent" />
      <div className="absolute left-0 top-0 hidden h-full w-[3px] bg-[#C09B5B] sm:block" />

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1320px] flex-col justify-center px-6 py-20 sm:px-8 lg:min-h-[calc(100svh-118px)] lg:px-10 xl:px-12">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-14">
          <div className="max-w-[820px]">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[0.24em] text-[#C09B5B] sm:text-[11px]">
              Expert Legal &amp; Forensics&trade;
            </p>

            <h1
              className="font-heading font-light leading-[0.98] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(3rem, 5.8vw, 5.8rem)" }}
            >
              Expert testimony.
              <span className="block italic text-[#C09B5B]">
                Forensic precision.
              </span>
              Litigation clarity.
            </h1>

            <div className="mt-7 h-px w-20 bg-[#C09B5B]/45" />

            <p className="mt-6 max-w-[580px] text-[15px] leading-[1.8] text-white/62 sm:text-base">
              We connect attorneys, law firms, insurers, and corporate
              organizations with vetted expert witnesses, independent medical
              evaluators, compliance specialists, and forensic investigators.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-7 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#6E5128] sm:px-9"
              >
                Request an Expert
              </Link>

              <Link
                href="/expert-services"
                className="inline-flex h-[50px] items-center justify-center px-1 text-[11px] font-black uppercase tracking-[0.16em] text-white/55 transition-colors duration-200 hover:text-white sm:px-6"
              >
                Explore Services &rarr;
              </Link>
            </div>
          </div>

          <div className="hidden border-l border-[#C09B5B]/20 pl-9 xl:block">
            <p className="mb-5 text-[9px] font-black uppercase tracking-[0.24em] text-[#C09B5B]/70">
              Case Support
            </p>

            <div className="flex flex-col">
              {supportItems.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-t border-white/[0.08] py-4 first:border-t-0 first:pt-0"
                >
                  <span className="mt-[1px] shrink-0 text-[10px] font-black tabular-nums text-[#C09B5B]/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-medium leading-snug text-white/62">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-white/[0.08] pt-5">
              <Link
                href="/contact"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C09B5B] transition-opacity hover:opacity-70"
              >
                Begin intake &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  );
}