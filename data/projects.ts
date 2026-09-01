export type Project = {
  glyph: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  caseStudyHref: string;
  codeHref: string;
};

export const projects: Project[] = [
  {
    glyph: "01",
    tag: "Full-Stack",
    title: "A corporate career performance dashboard",
    description:
      "A responsive corporate performance tracking dashboard built with React that features quarterly task management, PIE framework breakdowns, CSV import/export, and performance-review \"Brag Doc\" cards with local persistence.",
    stack: ["React", "Next.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    caseStudyHref: "#",
    codeHref: "https://github.com/Mary-Njiru/corporate-perfomance-tracker",
  },
  {
    glyph: "02",
    tag: "Machine Learning",
    title: "Machine Learning Feature Engineering Project",
    description:
      "A machine learning project focused on building a feature engineering pipeline to preprocess and transform raw data into meaningful features for improved model performance.",
    stack: ["Python", "PyTorch", "scikit-learn", "pandas", "NumPy"],
    caseStudyHref: "#",
    codeHref: "https://github.com/Mary-Njiru/ml-feature-engineering-pipeline",
  },
  {
    glyph: "03",
    tag: "Frontend",
    title: "Movie & TV Show Streaming App",
    description:
      "A responsive React application powered by the TMDB API and Redux Toolkit that lets users discover, filter, and view detailed cast and season info for movies and TV shows.",
    stack: ["React", "TMDB API", "Redux Toolkit"],
    caseStudyHref: "#",
    codeHref: "https://github.com/Mary-Njiru/streamflix-react-platform",
  },
  {
    glyph: "04",
    tag: "Monorepo",
    title: "Lumiere Skincare E-commerce",
    description:
      "A fully Dockerized, full-stack e-commerce platform featuring a React/Vite frontend, a Node/Express backend powered by PostgreSQL and Redis, and multi-gateway checkout via Stripe, PayPal, and M-Pesa.",
    stack: ["Node.js", "Express", "Next.js", "PostgreSQL", "Redis", "Docker", "Sentry"],
    caseStudyHref: "#",
    codeHref: "https://github.com/Mary-Njiru/skincare-ecommerce",
  },
];
