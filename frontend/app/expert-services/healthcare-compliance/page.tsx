import HealthcareCompliance from "@/components/expert-services/HealthcareCompliance";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/healthcare-compliance"],
  path: "/expert-services/healthcare-compliance",
});

export default function Page() {
  return <HealthcareCompliance />;
}