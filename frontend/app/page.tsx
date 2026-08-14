import HomeHero from "@/components/Home/home-hero";
import HomeStats from "@/components/Home/home-stats";
import HomeIntegratedSolutions from "@/components/Home/home-intergrated-solutions";
import HomeAboutPreview from "@/components/Home/home-about-preview";
import HomeAdvantage from "@/components/Home/home-advantage";
import HomeServices from "@/components/Home/home-services";
import HomeIndustries from "@/components/Home/home-industries";
import HomeForensics from "@/components/Home/home-forensics";
import HomeInsights from "@/components/Home/home-insights";
import HomeConsultationCta from "@/components/Home/home-consultation-cta";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG[""],
  path: "",
});

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