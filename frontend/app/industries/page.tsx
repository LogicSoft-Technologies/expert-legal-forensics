import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({ title: "Industries We Support", description: "Specialized expert, forensic, medical-review, and compliance support for legal, healthcare, technology, and corporate matters.", path: "/industries" });

const industries = [
  ["Legal & Litigation", "/industries/legal-litigation", "Support for counsel managing expert-driven disputes and investigations."],
  ["Healthcare", "/industries/healthcare", "Medical, regulatory, and compliance insight for healthcare matters."],
  ["Technology", "/industries/technology", "Technical and forensic perspective for technology-related disputes."],
  ["Corporate Organizations", "/industries/corporate", "Practical support for internal reviews, claims, and regulatory matters."],
];

export default function IndustriesPage() {
  return <main><section className="bg-[#071225] text-white"><div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 sm:py-24 lg:px-10"><p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C09B5B]">Industries</p><h1 className="mt-5 max-w-[820px] font-serif text-[clamp(2.7rem,5vw,5.2rem)] font-light leading-[1.04]">Specialized perspective for complex matters.</h1><p className="mt-7 max-w-[720px] text-[16px] leading-[1.85] text-white/70">We align the right expertise with the commercial, technical, and regulatory context of your matter.</p></div></section><section className="mx-auto max-w-[1320px] px-6 py-20 sm:px-8 lg:px-10"><div className="grid gap-5 md:grid-cols-2">{industries.map(([title, href, text]) => <Link key={href} href={href} className="group border border-[#E1E6EF] p-8 transition hover:border-[#C09B5B] hover:shadow-lg"><h2 className="font-serif text-[2rem] font-light text-[#0B1F3A]">{title}</h2><p className="mt-4 text-[15px] leading-7 text-[#3D5470]">{text}</p><span className="mt-7 inline-block text-[11px] font-black uppercase tracking-[0.15em] text-[#0B1F3A] group-hover:text-[#C09B5B]">Learn more &rarr;</span></Link>)}</div></section></main>;
}
