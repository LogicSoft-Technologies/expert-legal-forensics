export interface RouteSEO {
  title: string;
  description: string;
  keywords?: string[];
  priority?: number;
}

export const ROUTES_CONFIG: Record<string, RouteSEO> = {
  "": {
    title: "Expert Legal Institute | Expert Witness Network & Litigation Consulting",
    description:
      "Vetted expert witnesses, medical reviewers, forensic investigators, and compliance specialists for law firms, insurers, and corporate legal teams nationwide.",
    priority: 1.0,
  },

  "/about": {
    title: "About Us",
    description:
      "Learn how Expert Legal Institute connects attorneys and legal teams with vetted expert witnesses, medical reviewers, and forensic investigators nationwide.",
    priority: 0.8,
  },

  "/contact": {
    title: "Contact Us",
    description:
      "Request a consultation to find the right expert witness, medical reviewer, or forensic investigator for your matter.",
    priority: 0.7,
  },

  "/expert-services": {
    title: "Expert Services",
    description:
      "Explore our full range of expert witness placement, forensic investigation, medical review, and compliance consulting services.",
    priority: 0.9,
  },

  "/expert-services/ai-compliance-governance": {
    title: "AI Compliance & Governance Consulting",
    description:
      "Specialized AI compliance and governance experts supporting litigation, regulatory review, and corporate risk matters involving artificial intelligence.",
    keywords: ["AI governance expert", "AI compliance consultant", "algorithmic risk expert witness"],
    priority: 0.75,
  },

  "/expert-services/commercial-litigation": {
    title: "Commercial Litigation Expert Support",
    description:
      "Vetted commercial litigation experts for complex business disputes, breach of contract claims, and corporate litigation matters.",
    keywords: ["commercial litigation expert witness", "business dispute expert"],
    priority: 0.75,
  },

  "/expert-services/economic-damages": {
    title: "Economic Damages & Valuation Experts",
    description:
      "Connect with economic damages and valuation experts for lost profits, business interruption, and financial injury calculations in litigation.",
    keywords: ["economic damages expert witness", "valuation expert", "lost profits analysis"],
    priority: 0.75,
  },

  "/expert-services/healthcare-compliance": {
    title: "Healthcare Compliance Consulting",
    description:
      "Healthcare compliance experts supporting regulatory review, risk assessment, and litigation involving healthcare organizations and providers.",
    keywords: ["healthcare compliance expert", "healthcare regulatory consultant"],
    priority: 0.75,
  },

  "/expert-services/ime-pqme-network": {
    title: "Independent Medical Evaluation (IME/PQME) Network",
    description:
      "Access a vetted network of IME and PQME physicians for independent medical evaluations in personal injury and workers' compensation matters.",
    keywords: ["IME physician network", "PQME evaluator", "independent medical exam"],
    priority: 0.75,
  },

  "/expert-services/medical-record-review": {
    title: "Medical Record Review & Chronology",
    description:
      "Detailed medical record review and chronology services to support case evaluation, causation analysis, and litigation strategy.",
    keywords: ["medical record review service", "medical chronology", "medical record summarization"],
    priority: 0.75,
  },

  "/forensics/digital": {
    title: "Digital Forensics Experts",
    description:
      "Digital evidence experts providing preservation, chain of custody, and defensible investigation for litigation and regulatory matters.",
    keywords: ["digital forensics expert witness", "e-discovery forensics"],
    priority: 0.75,
  },

  "/forensics/cybersecurity": {
    title: "Cybersecurity Forensics Experts",
    description:
      "Cybersecurity forensics specialists supporting breach investigation, incident response analysis, and expert testimony in litigation.",
    keywords: ["cybersecurity forensics expert", "breach investigation expert"],
    priority: 0.75,
  },

  "/forensics/data-investigation": {
    title: "Data Investigation & Forensic Analysis",
    description:
      "Forensic data investigation experts for complex litigation involving electronic records, metadata analysis, and data integrity disputes.",
    keywords: ["data investigation expert", "forensic data analysis"],
    priority: 0.75,
  },

  "/industries/corporate": {
    title: "Corporate Industry Expert Support",
    description:
      "Expert witness and forensic support for corporate litigation, internal investigations, and regulatory matters.",
    priority: 0.65,
  },

  "/industries/healthcare": {
    title: "Healthcare Industry Expert Support",
    description:
      "Medical and compliance experts supporting healthcare litigation, regulatory review, and provider disputes.",
    priority: 0.65,
  },

  "/industries/legal-litigation": {
    title: "Legal & Litigation Industry Support",
    description:
      "Expert witness placement and litigation consulting tailored to law firms and legal teams handling complex disputes.",
    priority: 0.65,
  },

  "/industries/technology": {
    title: "Technology Industry Expert Support",
    description:
      "Technical and forensic experts supporting technology sector litigation, IP disputes, and cybersecurity matters.",
    priority: 0.65,
  },

  "/insights": {
    title: "Insights & Resources",
    description:
      "Insights on expert witness selection, litigation strategy, forensic investigation, and compliance from Expert Legal Institute.",
    priority: 0.6,
  },
};