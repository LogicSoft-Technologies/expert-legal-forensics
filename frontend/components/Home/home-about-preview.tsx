import Link from "next/link";

const values = [
  "Independent & objective analysis",
  "Litigation-focused expert matching",
  "Confidential & responsive client service",
  "Technology-driven forensic investigations",
];

export default function HomeAboutPreview() {
  return (
    <section
      className="bg-white py-18 sm:py-22 lg:py-24"
      aria-labelledby="about-preview-heading"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 px-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 xl:px-12">
        <div className="relative min-h-[340px] overflow-hidden bg-[#0B1F3A] lg:min-h-[560px]">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=82"
            alt="Expert Legal & Forensics legal professionals in consultation"
            className="h-full w-full object-cover object-center opacity-90"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06101F]/45 via-transparent to-transparent" />

          <div className="absolute bottom-5 right-0 bg-[#0B1F3A] px-6 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:bottom-7">
            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#C09B5B]">
              Est.
            </span>
            <span className="block font-serif text-[2rem] font-light leading-none text-white">
              2009
            </span>
            <span className="mt-1 block max-w-[120px] text-[9px] font-semibold uppercase tracking-[0.1em] text-white/50">
              Trusted Expertise
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center border border-[#E5EAF1] bg-white px-6 py-11 sm:px-8 lg:border-l-0 lg:px-12 lg:py-14 xl:px-14">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C09B5B]">
            About Expert Legal &amp; Forensics&trade;
          </p>

          <h2
            id="about-preview-heading"
            className="font-serif text-[clamp(2.1rem,3.4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.01em] text-[#0B1F3A]"
          >
            Where passion meets purpose.
          </h2>

          <div className="my-6 h-px w-12 bg-[#C09B5B]" />

          <div className="max-w-[680px] space-y-5">
            <p className="text-[15px] leading-[1.75] text-[#3D5470] sm:text-base">
              Expert Legal &amp; Forensics&trade; was founded on a singular
              conviction: that the quality of expert testimony and forensic
              analysis should never be a limiting factor in the pursuit of
              justice. We built a firm where attorneys and organizations gain
              immediate access to rigorously vetted specialists.
            </p>

            <p className="text-[15px] leading-[1.75] text-[#3D5470] sm:text-base">
              Today, we serve law firms, corporate legal departments, insurance
              carriers, and healthcare organizations across the nation. From
              independent medical evaluations to cybersecurity forensics, we are
              the partner that prepares your case and your experts to withstand
              scrutiny.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-start gap-3 border border-[#E5EAF1] bg-[#F7F9FC] px-4 py-3 text-[13px] leading-snug text-[#3D5470]"
              >
                <svg
                  className="mt-0.5 shrink-0"
                  width="17"
                  height="17"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="8" stroke="#C09B5B" strokeWidth="1.5" />
                  <path d="M7 10l2 2 4-4" stroke="#C09B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-9 inline-flex w-fit items-center gap-4 text-[13px] font-bold text-[#0B1F3A] transition-colors hover:text-[#C09B5B]"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-[#0B1F3A] text-white transition-all group-hover:translate-x-1 group-hover:bg-[#C09B5B]">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 3l7 7-7 7M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}