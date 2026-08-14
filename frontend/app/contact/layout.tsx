import { generatePageMetadata } from "@/lib/seo/metadata";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const metadata = generatePageMetadata({
  ...ROUTES_CONFIG["/contact"],
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}