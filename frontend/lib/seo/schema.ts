import { SITE_CONFIG } from "./config";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    ...(SITE_CONFIG.contact.email ? { email: SITE_CONFIG.contact.email } : {}),
    ...(SITE_CONFIG.contact.phone ? { telephone: SITE_CONFIG.contact.phone } : {}),
    ...(SITE_CONFIG.address && SITE_CONFIG.address.streetAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.address.streetAddress,
            addressLocality: SITE_CONFIG.address.addressLocality,
            addressRegion: SITE_CONFIG.address.addressRegion,
            postalCode: SITE_CONFIG.address.postalCode,
            addressCountry: SITE_CONFIG.address.addressCountry,
          },
        }
      : {}),
    sameAs: Object.values(SITE_CONFIG.social).filter((v) => v.startsWith("http")),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_CONFIG.url}${path}`,
    provider: { "@id": `${SITE_CONFIG.url}/#organization` },
    areaServed: "US",
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}