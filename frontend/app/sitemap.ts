import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/config";
import { ROUTES_CONFIG } from "@/lib/seo/routes.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.entries(ROUTES_CONFIG).map(([path, route]) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: route.priority ?? 0.5,
  }));
}