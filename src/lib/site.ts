export const site = {
  name: "DeduSoft",
  url: "https://dedusoft.com",
  description: "Software development, systems analysis, and digital products built around real operational needs.",
  github: "https://github.com/dedusoft",
  founderGithub: "https://github.com/duclairdeugoue",
} as const;

export const navigation = [
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/" },
  { label: "Products", href: "/products/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
] as const;

export const services = [
  { number: "01", title: "Custom software", description: "Web applications, backend services, APIs, and internal tools designed for a clearly defined business need.", outcome: "A maintainable solution with a well-defined scope." },
  { number: "02", title: "Websites & web apps", description: "Thoughtful, responsive digital experiences for organizations that want clarity, usability, and performance.", outcome: "An accessible web presence that is straightforward to maintain." },
  { number: "03", title: "Business & system analysis", description: "Requirements discovery, workflow mapping, functional specifications, and solution architecture before development begins.", outcome: "A shared understanding of what should be built and why." },
  { number: "04", title: "Deployment & implementation", description: "Delivery pipelines, environment setup, technical handover, and operational guidance appropriate to the project.", outcome: "Software that can be delivered and maintained with confidence." },
] as const;

export type Project = {
  slug: string; name: string; category: string; status: string;
  intro: string; context: string; approach: string; contribution: string;
  evidence?: { label: string; url: string };
};
export const projects: Project[] = [
  {
    slug: "dwiis", name: "DWIIS", category: "Developer tooling", status: "Public distribution",
    intro: "A developer workstation platform for setting up consistent Ubuntu development environments.",
    context: "Getting a workstation ready for productive development can involve repeated, error-prone setup steps.",
    approach: "DWIIS documents installation profiles for different development needs, with versioned distribution assets and checksum verification.",
    contribution: "DeduSoft maintains the public DWIIS distribution repository. Original authorship and detailed feature claims are limited to publicly documented evidence.",
    evidence: { label: "Explore DWIIS", url: "https://dwiis.dedusoft.com" }
  },
  {
    slug: "eductrack", name: "Eductrack", category: "Education technology", status: "In development",
    intro: "A school-management platform being developed to support academic and administrative workflows.",
    context: "Educational institutions coordinate many interconnected processes and information flows.",
    approach: "The product direction focuses on bringing school administration into a more coherent digital experience. Features and availability have not yet been publicly verified.",
    contribution: "A DeduSoft product initiative. Implementation scope and release details are awaiting product-owner validation."
  }
];
