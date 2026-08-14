import IMEPQMENetwork from "@/components/expert-services/IMEPQMENetwork";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/ime-pqme-network"],
  path: "/expert-services/ime-pqme-network",
});

export default function Page() {
  return <IMEPQMENetwork />;
}