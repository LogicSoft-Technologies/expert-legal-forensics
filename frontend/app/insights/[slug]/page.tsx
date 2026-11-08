import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHT_ARTICLES } from "@/lib/insights/articles";

export function generateStaticParams() {
  return Object.keys(INSIGHT_ARTICLES).map((slug) => ({ slug }));
}

export default async function InsightArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES[slug];
  if (!article) notFound();

  return (
    <main className="bg-white">
      <article>
        <header className="bg-[#071225] text-white">
          <div className="mx-auto max-w-[940px] px-6 py-20 sm:px-8 sm:py-24">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">{article.category}</p>
            <h1 className="mt-5 font-serif text-[clamp(2.5rem,5vw,4.8rem)] font-light leading-[1.08]">{article.title}</h1>
            <p className="mt-7 max-w-[760px] text-[16px] leading-[1.85] text-white/70">{article.summary}</p>
            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">{article.published} &middot; {article.readTime}</p>
          </div>
        </header>
        <div className="mx-auto max-w-[820px] px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-[18px] leading-[1.9] text-[#3D5470]">These practical considerations are intended to help teams organize their approach to complex matters. The appropriate strategy will always depend on the facts, governing rules, and advice of qualified counsel.</p>
          <h2 className="mt-12 font-serif text-[2rem] font-light text-[#0B1F3A]">Key considerations</h2>
          <ol className="mt-6 space-y-5 border-l-2 border-[#C09B5B] pl-6 text-[16px] leading-8 text-[#3D5470]">
            {article.points.map((point) => <li key={point}>{point}</li>)}
          </ol>
          <div className="mt-14 border-t border-[#E5EAF1] pt-8">
            <p className="text-[13px] leading-7 text-[#6B82A0]">This material is provided for general informational purposes only and is not legal, medical, or professional advice.</p>
            <div className="mt-7 flex gap-6"><Link href="/insights" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] hover:text-[#C09B5B]">All insights</Link><Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#C09B5B] hover:opacity-70">Discuss your matter &rarr;</Link></div>
          </div>
        </div>
      </article>
    </main>
  );
}
