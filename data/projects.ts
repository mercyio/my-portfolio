export interface Project {
  title: string;
  role: string;
  description: string;
  githubUrl: string;
  previewImage: string;
}

export const UserProjects: Project[] = [
  {
    title: "ZaneOps",
    role: "creator and maintainer",
    description:
      "ZaneOps is an open-source, self-hosted Platform as a Service (PaaS) for deploying and managing applications, inspired by projects like Railway, Vercel, and Coolify. This platform allows developers to deploy apps on their own servers without manually managing CI/CD and configuration.",
    githubUrl: "https://github.com/zane-ops/zane-ops",
    previewImage: "https://iili.io/juKYjp.jpg",
  },
  {
    title: "Gh-next",
    role: "creator and maintainer",
    description:
      "A GitHub clone built with Next.js, utilizing the new App Router paradigm and server components. The goal was to recreate GitHub's UI and core functionality from the ground up. Key features include a custom-built issue search page, from database design to UI, closely mirroring GitHub's backend structure. Additionally, the UI was enhanced with a more effective keyword highlighting system in the search input.",
    githubUrl: "https://github.com/fredkiss3/gh-next",
    previewImage: "https://iili.io/2upHTg.jpg",
  },
];
