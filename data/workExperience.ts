export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

export const UserWorkExperience: WorkExperience[] = [
  {
    company: "Truparse",
    position: "Backend Developer",
    period: "Jun 2023 - Oct 2024",
    responsibilities: [
      "Actively involved in code optimization and product development across offerings like Pawa (now Zed), Figur, and Joblynk",
      "Spearheaded code optimizations that significantly reduced fraud and security risks",
      "Built and optimized backend systems to improve conversion rates and enhance user experience by over 20%",
      "Collaborated with cross-functional teams on requirements gathering, feature design, and product excellence",
      "Developed robust, scalable backend solutions using Node.js, Express.js, MongoDB, PostgreSQL, and DigitalOcean",
      "Implemented and enhanced security measures like authentication and authorization to protect sensitive user data",
    ],
  },
  {
    company: "Onract",
    position: "Backend Developer",
    period: "Feb 2023 - Dec 2023",
    responsibilities: [
      "Developed scalable backend architectures using Node.js, Nest.js, TypeScript, and PostgreSQL",
      "Built maintainable and performant RESTful APIs leveraging Node.js and Nest.js",
      "Designed efficient PostgreSQL database schemas with optimized queries",
      "Ensured code quality and maintainability through TypeScript and rigorous testing",
      "Implemented secure authentication and authorization mechanisms for the backend",
      "Collaborated closely with front-end engineers on API design and integration",
    ],
  },
  {
    company: "Pelmedic",
    position: "Backend Developer",
    period: "Feb 2023 - Jun 2023",
    responsibilities: [
      "Rescued an 8-month stagnant project in 2 months through expertise in REST APIs, Node.js, Nest.js, MySQL",
      "Boosted application performance through efficient architecture and database optimization",
      "Implemented robust authentication and authorization to strengthen security",
      "Achieved seamless front-end integration through effective collaboration",
      "Proactively identified and resolved performance bottlenecks to optimize the system",
      "Maintained clear communication channels to hit project milestones efficiently",
    ],
  },
  {
    company: "SpiCodeX",
    position: "Backend Developer",
    period: "Feb 2023 - Apr 2023",
    responsibilities: [
      "Migrating the project from its old design to a new design system",
      "Implementing an Electron port for a local developer-friendly version",
      "Improving the codebase and resolving performance issues",
    ],
  },
  {
    company: "Start Innovation Hub",
    position: "Backend Developer",
    period: "Nov 2022 - Feb 2023",
    responsibilities: [
      "Migrating the project from its old design to a new design system",
      "Implementing an Electron port for a local developer-friendly version",
      "Improving the codebase and resolving performance issues",
    ],
  },
  {
    company: "Freelance",
    position: "Software Engineer",
    period: "Oct 2020 - Present",
    responsibilities: [
      "Implementing a caching system for the company database service to improve performance",
      "Implementing new features to query and download historical documents",
    ],
  },
];
