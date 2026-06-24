import HomeHero from "@/components/home/home-hero";
import HomeStats from "@/components/home/home-stats";
import HomeIntegratedSolutions from "@/components/home/home-intergrated-solutions";
import HomeAboutPreview from "@/components/home/home-about-preview";
import HomeAdvantage from "@/components/home/home-advantage";
import HomeServices from "@/components/home/home-services";
import HomeIndustries from "@/components/home/home-industries";
import HomeForensics from "@/components/home/home-forensics";
import HomeInsights from "@/components/home/home-insights";
import HomeConsultationCta from "@/components/home/home-consultation-cta";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeIntegratedSolutions />
      <HomeAboutPreview />
      <HomeAdvantage />
      <HomeServices />
      <HomeIndustries />
      <HomeForensics />
      <HomeInsights />
      <HomeConsultationCta />
    </main>
  );
}