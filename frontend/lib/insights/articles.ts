export type InsightArticle = {
  category: string;
  title: string;
  summary: string;
  published: string;
  readTime: string;
  points: string[];
};

export const INSIGHT_ARTICLES: Record<string, InsightArticle> = {
  "evaluating-expert-witness-fit": {
    category: "Expert Witness Strategy",
    title: "How Legal Teams Should Evaluate Expert Witness Fit Before Engagement",
    summary: "A sound expert engagement begins with more than credentials. Counsel should assess the expert's methodology, communication, independence, conflicts, and fit with the questions at issue.",
    published: "June 2026", readTime: "7 min read",
    points: ["Define the precise opinions the matter requires before beginning the search.", "Review qualifications, prior testimony, potential conflicts, and the reliability of the proposed methodology.", "Consider whether the expert can explain a complex opinion clearly to the intended audience."],
  },
  "digital-evidence-preservation": {
    category: "Digital Forensics", title: "Digital Evidence Preservation: What Counsel Should Secure First",
    summary: "Early preservation decisions can materially affect the completeness, reliability, and defensibility of digital evidence.", published: "June 2026", readTime: "6 min read",
    points: ["Identify relevant devices, accounts, repositories, and custodians promptly.", "Preserve original data and metadata while documenting collection decisions.", "Engage qualified forensic support before actions that could alter or destroy evidence."],
  },
  "medical-chronology-litigation": {
    category: "Medical Record Review", title: "What Makes a Medical Chronology Useful in Litigation",
    summary: "An effective chronology organizes the record while drawing attention to the questions that require clinical or legal analysis.", published: "May 2026", readTime: "5 min read",
    points: ["Establish a complete, dated record with clear source references.", "Separate documented facts from questions or issues requiring expert analysis.", "Highlight treatment gaps, inconsistent accounts, and causation questions for counsel's review."],
  },
  "lost-profits-analysis": {
    category: "Economic Damages", title: "Common Weaknesses in Lost Profits Analysis",
    summary: "Damages opinions are more durable when their assumptions, comparators, and calculations can be traced and tested.", published: "May 2026", readTime: "8 min read",
    points: ["Test assumptions against reliable business, market, and industry evidence.", "Make the but-for model and causal assumptions explicit.", "Document data sources, adjustments, and sensitivity analysis in a reviewable format."],
  },
  "ai-compliance-board-questions": {
    category: "AI Governance", title: "AI Compliance Questions Boards Are Beginning to Ask",
    summary: "Responsible AI governance requires documented ownership, risk assessment, vendor oversight, and a process for ongoing review.", published: "April 2026", readTime: "6 min read",
    points: ["Assign accountable owners for AI use cases and risk decisions.", "Maintain records of system purpose, data use, testing, and human oversight.", "Evaluate vendors and monitor material changes throughout the lifecycle."],
  },
  "healthcare-compliance-investigations": {
    category: "Healthcare Compliance", title: "Healthcare Compliance Expert Support During Investigations",
    summary: "Experienced compliance professionals can help organizations understand the record, assess exposure, and structure practical remediation work.", published: "April 2026", readTime: "7 min read",
    points: ["Preserve relevant records and establish a controlled review process.", "Assess policies, operational evidence, and applicable requirements together.", "Develop remediation steps that are documented, proportionate, and sustainable."],
  },
  "rebuttal-expert-timing": {
    category: "Litigation Support", title: "When to Bring in a Rebuttal Expert",
    summary: "Early rebuttal planning gives counsel time to assess an opposing opinion, identify the necessary record, and prepare a focused response.", published: "March 2026", readTime: "5 min read",
    points: ["Review the scope and assumptions of the opposing opinion as soon as practicable.", "Identify the evidence and discipline needed for a responsive analysis.", "Build adequate time for review, report preparation, and testimony preparation."],
  },
  "daubert-2025-circuit-rulings": { category: "Expert Witness Strategy", title: "Building a Defensible Expert Strategy", summary: "A defensible expert strategy aligns qualifications, reliable methods, a complete factual record, and clear communication from the outset.", published: "Resource", readTime: "6 min read", points: ["Frame opinions around the questions the fact finder must decide.", "Document the data and methodology supporting each conclusion.", "Prepare the expert to explain both limits and conclusions with precision."] },
  "ransomware-litigation-forensic-evidence": { category: "Cybersecurity Forensics", title: "Ransomware Matters: Preserving the Forensic Record", summary: "Forensic documentation can be central to understanding an incident, assessing response decisions, and supporting later review.", published: "Resource", readTime: "8 min read", points: ["Preserve logs, endpoint data, communications, and system images where appropriate.", "Maintain a clear chain of custody and incident timeline.", "Coordinate technical, legal, and response teams around a documented process."] },
  "ai-liability-court-evaluations": { category: "AI Governance", title: "Documenting AI Decisions for Legal Review", summary: "Organizations using AI benefit from records that explain the system's purpose, governance, data practices, and human oversight.", published: "Resource", readTime: "5 min read", points: ["Document intended use and decision authority.", "Assess data quality, model limitations, and foreseeable risks.", "Review controls and governance as the use case changes."] },
  "ime-reporting-standards-2025": { category: "Medical Review", title: "Clear, Independent Medical Reporting", summary: "Well-structured medical reporting distinguishes clinical findings, record review, assumptions, and conclusions.", published: "Resource", readTime: "7 min read", points: ["Use complete, accurately sourced records.", "State the scope of the evaluation and limitations clearly.", "Ensure opinions are explained in language accessible to the intended audience."] },
};
