export const SITE_CONFIG = {
  name: "Expert Legal & Forensics",
  shortName: "ELF",

  url: process.env.NEXT_PUBLIC_SITE_URL || "https://expertlegalinstitute.com",

  description:
    "Expert Legal & Forensics connects attorneys, law firms, insurers, and corporate legal teams with vetted expert witnesses, medical reviewers, forensic investigators, and compliance specialists.",

  keywords: [
    "expert witness",
    "expert witness network",
    "litigation consulting",
    "independent medical evaluation",
    "IME",
    "PQME",
    "medical record review",
    "economic damages expert",
    "forensic accounting",
    "digital forensics",
    "cybersecurity forensics",
    "healthcare compliance consulting",
    "AI compliance governance",
    "commercial litigation support",
  ],

  locale: "en_US",
  themeColor: "#06101F",
  brandGold: "#C09B5B",

  social: {
    // TODO: fill in real handles/urls, or remove if not applicable
    twitter: "@expertlegalforensics",
    linkedin: "https://www.linkedin.com/company/expert-legal-forensics",
  },

  contact: {
    phone: "+1 (973) 900-6754",
    email: "contact@expertlegalinstitute.com",
  },

  // TODO: fill in if you want LocalBusiness schema (leave blank fields out if unknown)
  address: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "US",
  },

  ogImage: "/opengraph-image",
} as const;