import Link from "next/link";

export const metadata = {
  title: "Healthcare Industry | Expert Legal Network",
  description:
    "Healthcare expert witness, compliance, medical review, and forensic support for providers, payers, counsel, and healthcare organizations.",
};

const services = [
  {
    title: "Healthcare Compliance Experts",
    body: "Former regulators, compliance officers, billing specialists, and clinical leaders for audits, investigations, and compliance review.",
  },
  {
    title: "Medical Record Review",
    body: "Physician-authored chronologies, causation analysis, treatment review, peer review letters, and future care assessment.",
  },
  {
    title: "Clinical Standards of Care",
    body: "Board-certified specialists for medical malpractice, credentialing, licensing, patient safety, and quality-of-care matters.",
  },
  {
    title: "HIPAA & Privacy Review",
    body: "Privacy and security experts for breach response, OCR investigations, data handling, and health information governance.",
  },
  {
    title: "Billing & Reimbursement",
    body: "Experts for Medicare, Medicaid, commercial payer disputes, coding issues, overpayment analysis, and audit response.",
  },
  {
    title: "Healthcare Operations",
    body: "Operational experts covering hospital administration, nursing practice, pharmacy standards, and patient safety systems.",
  },
];

const matters = [
  "HIPAA privacy and security investigations",
  "False Claims Act and qui tam matters",
  "CMS, OCR, OIG, RAC, UPIC, and MAC audits",
  "Medical malpractice and standard-of-care disputes",
  "Healthcare M&A due diligence",
  "Provider billing and coding disputes",
  "Clinical credentialing and licensing matters",
  "Healthcare employment and compliance issues",
];

const process = [
  {
    step: "01",
    title: "Matter Intake",
    body: "We identify the provider type, regulatory issue, clinical specialty, documents, deadlines, and expert discipline required.",
  },
  {
    step: "02",
    title: "Specialist Matching",
    body: "Candidates are matched by clinical background, regulatory experience, credentials, testimony history, and matter fit.",
  },
  {
    step: "03",
    title: "Records Review",
    body: "Experts review records, claims data, policies, clinical notes, compliance materials, or investigation documents.",
  },
  {
    step: "04",
    title: "Advisory Or Testimony Support",
    body: "Findings are organized for counsel, compliance teams, regulators, insurers, deposition, or trial use.",
  },
];

const credentials = [
  "Former CMS and OIG professionals",
  "Certified healthcare compliance officers",
  "Board-certified physicians",
  "Nursing and allied health experts",
  "HIPAA privacy and security specialists",
  "Medical billing and coding experts",
];

export default function HealthcareIndustryPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1800&q=85"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#071225]/90 to-[#071225]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071225] via-transparent to-transparent" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Healthcare
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Expert support for healthcare litigation, compliance, and investigations.
            </h1>

            <p className="mt-7 max-w-[700px] text-[16px] leading-[1.85] text-white/65">
              We support healthcare organizations, counsel, insurers, and
              regulated entities with clinical experts, compliance specialists,
              medical reviewers, billing experts, and forensic investigators.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
              >
                Request Healthcare Support
              </Link>

              <Link
                href="/expert-services/healthcare-compliance"
                className="inline-flex h-[50px] items-center justify-center border border-white/20 px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#C09B5B] hover:text-[#C09B5B]"
              >
                Compliance Experts
              </Link>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.045] p-6 backdrop-blur-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Healthcare Focus
            </p>
            <div className="mt-5 space-y-5">
              {[
                ["Clinical", "Standards and care review"],
                ["Compliance", "Regulatory and audit support"],
                ["Records", "Medical review and analysis"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="font-serif text-[1.65rem] font-light leading-none text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/45">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Overview
            </p>
            <h2 className="font-serif text-[clamp(2.05rem,3.3vw,3.2rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Healthcare matters require clinical and regulatory precision.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-[1.85] text-[#3D5470] sm:text-base">
            <p>
              Healthcare disputes often combine medical judgment, regulatory
              complexity, billing data, privacy obligations, and operational
              realities. Generic expert matching is not enough.
            </p>
            <p>
              We help clients identify the right clinical, compliance, billing,
              forensic, or operational specialist for the issue at hand, then
              coordinate the engagement with attention to deadlines,
              confidentiality, and defensibility.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[780px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Healthcare Support
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Specialists for clinical, regulatory, and operational questions.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="border border-[#E1E6EF] bg-white p-6 sm:p-7">
                <div className="mb-5 h-px w-10 bg-[#C09B5B]" />
                <h3 className="font-serif text-[1.45rem] font-light leading-snug text-[#0B1F3A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#3D5470]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Matter Types
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Support across the healthcare regulatory and litigation landscape.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {matters.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-[#E5EAF1] bg-[#F7F9FC] px-4 py-3 text-[13.5px] leading-snug text-[#3D5470]">
                <span className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#C09B5B]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071225] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-12 max-w-[820px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Process
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.3vw,3.15rem)] font-light leading-[1.12] text-white">
              A careful process for regulated healthcare matters.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border border-white/[0.08] bg-white/[0.035] p-6">
                <span className="text-[11px] font-black tracking-[0.18em] text-[#C09B5B]">
                  {item.step}
                </span>
                <h3 className="mt-5 text-[1rem] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.75] text-white/52">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-10 xl:px-12">
          <div>
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Expert Backgrounds
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Credentials aligned to healthcare risk.
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#6B82A0]">
              Healthcare matters require specialists who understand both the
              clinical and regulatory environment. We screen for experience,
              credential fit, and ability to explain findings clearly.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {credentials.map((item) => (
              <div key={item} className="border border-[#E5EAF1] bg-white p-5">
                <div className="mb-4 h-px w-8 bg-[#C09B5B]" />
                <p className="text-[13.5px] font-semibold leading-snug text-[#0B1F3A]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C09B5B]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-6 py-12 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 xl:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/75">
              Start a Healthcare Matter
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-[1.18] text-white">
              Need a clinical, compliance, billing, or healthcare operations expert?
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[50px] w-fit items-center justify-center bg-white px-8 text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:bg-[#071225] hover:text-white"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}