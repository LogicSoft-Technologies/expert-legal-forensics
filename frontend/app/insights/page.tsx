import Link from "next/link";

const featured = {
  category: "Expert Witness",
  title: "How Legal Teams Should Evaluate Expert Witness Fit Before Engagement",
  excerpt:
    "Credentials matter, but fit is broader than a resume. Strong expert selection considers methodology, communication, conflicts, venue, prior testimony, and the issues the court will actually test.",
  href: "/insights/evaluating-expert-witness-fit",
  date: "June 2026",
  readTime: "7 min read",
  image:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85",
};

const insights = [
  {
    category: "Forensics",
    title: "Digital Evidence Preservation: What Counsel Should Secure First",
    excerpt:
      "A practical checklist for preserving devices, cloud accounts, logs, messages, and metadata before evidence becomes incomplete or contested.",
    href: "/insights/digital-evidence-preservation",
    date: "June 2026",
    readTime: "6 min read",
  },
  {
    category: "Medical Review",
    title: "What Makes a Medical Chronology Useful in Litigation",
    excerpt:
      "The best chronologies do more than summarize records. They identify causation issues, treatment gaps, inconsistencies, and expert questions.",
    href: "/insights/medical-chronology-litigation",
    date: "May 2026",
    readTime: "5 min read",
  },
  {
    category: "Economic Damages",
    title: "Common Weaknesses in Lost Profits Analysis",
    excerpt:
      "Unsupported assumptions, weak but-for modeling, and unclear discount rate selection can make a damages opinion vulnerable.",
    href: "/insights/lost-profits-analysis",
    date: "May 2026",
    readTime: "8 min read",
  },
  {
    category: "AI Governance",
    title: "AI Compliance Questions Boards Are Beginning to Ask",
    excerpt:
      "As AI adoption expands, directors and legal teams are asking sharper questions about documentation, risk ownership, vendor review, and auditability.",
    href: "/insights/ai-compliance-board-questions",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    category: "Healthcare",
    title: "Healthcare Compliance Expert Support During Investigations",
    excerpt:
      "Former regulators and compliance officers can help organizations understand exposure, prepare responses, and evaluate remediation options.",
    href: "/insights/healthcare-compliance-investigations",
    date: "April 2026",
    readTime: "7 min read",
  },
  {
    category: "Litigation Support",
    title: "When to Bring in a Rebuttal Expert",
    excerpt:
      "Waiting too long can compress review, report drafting, and deposition preparation. Early rebuttal planning can change the posture of a matter.",
    href: "/insights/rebuttal-expert-timing",
    date: "March 2026",
    readTime: "5 min read",
  },
];

const topics = [
  "Expert Witness Strategy",
  "Digital Forensics",
  "Medical Record Review",
  "Economic Damages",
  "Commercial Litigation",
  "Healthcare Compliance",
  "AI Governance",
  "Trial Preparation",
];

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#071225] text-white">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 56px,white 56px,white 57px),repeating-linear-gradient(90deg,transparent,transparent 56px,white 56px,white 57px)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 xl:px-12">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">
              Insights
            </p>

            <h1
              className="font-serif font-light leading-[1.03] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(2.7rem,5vw,5.35rem)" }}
            >
              Practical intelligence for complex legal and forensic matters.
            </h1>

            <p className="mt-7 max-w-[690px] text-[16px] leading-[1.85] text-white/62">
              Analysis, guidance, and field notes for attorneys, claims teams,
              corporate legal departments, compliance leaders, and organizations
              managing expert-driven matters.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5EAF1] bg-[#F7F9FC]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap gap-3 px-6 py-6 sm:px-8 lg:px-10 xl:px-12">
          {topics.map((topic) => (
            <span
              key={topic}
              className="border border-[#DDE4EF] bg-white px-4 py-2 text-[12px] font-semibold text-[#3D5470]"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#E5EAF1] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
                Featured
              </p>
              <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
                Editor&apos;s selection
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit text-[11px] font-black uppercase tracking-[0.16em] text-[#C09B5B] transition hover:opacity-70"
            >
              Suggest a topic &rarr;
            </Link>
          </div>

          <article className="grid overflow-hidden border border-[#E1E6EF] bg-white lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px] bg-[#0B1F3A] lg:min-h-[480px]">
              <img
                src={featured.image}
                alt=""
                className="h-full w-full object-cover opacity-88"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071225]/55 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.12em]">
                <span className="text-[#C09B5B]">{featured.category}</span>
                <span className="text-[#6B82A0]">{featured.date}</span>
                <span className="text-[#6B82A0]">{featured.readTime}</span>
              </div>

              <h3 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
                {featured.title}
              </h3>

              <p className="mt-5 text-[15px] leading-[1.8] text-[#3D5470]">
                {featured.excerpt}
              </p>

              <Link
                href={featured.href}
                className="mt-8 inline-flex w-fit items-center border-b border-[#C09B5B] pb-px text-[11px] font-black uppercase tracking-[0.16em] text-[#0B1F3A] transition hover:text-[#C09B5B]"
              >
                Read insight &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#F5F6F8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-10 xl:px-12">
          <div className="mb-10 max-w-[760px]">
            <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Latest Analysis
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.12] text-[#0B1F3A]">
              Guidance for decisions that depend on expertise.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="flex min-h-full flex-col border border-[#E1E6EF] bg-white p-6 transition hover:border-[#C09B5B]/50 sm:p-7"
              >
                <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.13em]">
                  <span className="text-[#C09B5B]">{item.category}</span>
                  <span className="text-[#6B82A0]">{item.date}</span>
                </div>

                <h3 className="font-serif text-[1.55rem] font-light leading-snug text-[#0B1F3A]">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-[14px] leading-[1.75] text-[#3D5470]">
                  {item.excerpt}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#E5EAF1] pt-5">
                  <Link
                    href={item.href}
                    className="text-[11px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] transition hover:text-[#C09B5B]"
                  >
                    Read more
                  </Link>
                  <span className="text-[12px] font-semibold text-[#6B82A0]">
                    {item.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071225] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-6 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 xl:px-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C09B5B]">
              Need matter-specific guidance?
            </p>
            <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.18] text-white">
              Speak with our team about the expert, forensic, or compliance
              issues shaping your matter.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-[50px] w-fit items-center justify-center bg-[#C09B5B] px-8 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8A6D3F]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}