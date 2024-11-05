export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export const UserWorkExperience: WorkExperience[] = [
  {
    company: "procurate",
    position: "full-stack developer",
    period: "jul 2024",
    responsibilities: [
      "Implementing a caching system for the company database service to improve performance",
      "Implementing new features to query and download historical documents",
    ],
  },
  {
    company: "modular cloud",
    position: "full-stack developer",
    period: "sep 2023 to may 2024",
    responsibilities: [
      "Migrating the project from its old design to a new design system",
      "Implementing an Electron port for a local developer-friendly version",
      "Improving the codebase and resolving performance issues",
    ],
  },
];
