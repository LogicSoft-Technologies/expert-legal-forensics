import AIComplianceGovernance from "@/components/expert-services/AIComplianceGovernance";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/ai-compliance-governance"],
  path: "/expert-services/ai-compliance-governance",
});

export default function Page() {
  return <AIComplianceGovernance />;
}