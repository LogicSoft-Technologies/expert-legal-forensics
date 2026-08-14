import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

interface PageSEOInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];

  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
  noIndex = false,
}: PageSEOInput): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${SITE_CONFIG.name}`;
  const ogImage = image ?? SITE_CONFIG.ogImage;

  return {
    title: fullTitle,
    description,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      site: SITE_CONFIG.social.twitter,
    },
  };
}