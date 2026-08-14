import CommercialLitigation from "@/components/expert-services/CommercialLitigation";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/commercial-litigation"],
  path: "/expert-services/commercial-litigation",
});

export default function Page() {
  return <CommercialLitigation />;
}