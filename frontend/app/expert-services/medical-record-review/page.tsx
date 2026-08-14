import MedicalRecordReview from "@/components/expert-services/MedicalRecordReview";

import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/expert-services/medical-record-review"],
  path: "/expert-services/medical-record-review",
});

export default function Page() {
  return <MedicalRecordReview />;
}