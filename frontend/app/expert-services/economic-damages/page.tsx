import EconomicDamages from "@/components/expert-services/EconomicDamages";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/economic-damages"],
  path: "/expert-services/economic-damages",
});

export default function Page() {
  return <EconomicDamages />;
}