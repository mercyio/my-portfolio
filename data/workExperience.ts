export interface IWorkExperience {
  company: string;
  companyUrl?: string;
  projectUrl?: string;
  position: string;
  period: string;
  responsibilities: string[];
  shortDescription?: string;
}

export const UserWorkExperienceData: IWorkExperience[] = [
  {
    company: "Start Innovation Hub",
    companyUrl: "https://starthub.com.ng",
    position: "Backend developer",
    period: "Jan 2024 - Present",
    shortDescription: "Leading backend development for cloud-based solutions",
    responsibilities: [
      // "Architected and implemented scalable microservices using Node.js and Kubernetes",
      "Reduced system latency by 40% through implementation of Redis caching",
      "Implemented user authentication using JWT and OAuth2",
      // "Implemented CI/CD pipelines that reduced deployment time by 60%",
      // "Mentored junior developers and conducted technical interviews",
      "Integrated third-party APIs for payment processing and analytics",
      "Implemented real-time features using WebSocket technology",
      "Learned and implemented best practices in software development",
    ],
  },
  // {
  //   company: "GreenBounty",
  //   companyUrl: "https://green-bounty.vercel.app/",
  //   position: "Backend Developer",
  //   period: "Mar 2020 - Dec 2021",
  //   shortDescription: "Built and maintained multiple client-facing applications",
  //   responsibilities: [
  //     "Developed responsive web applications using Nest.js",
  //     "Optimized database queries resulting in 50% faster load times",
  //     "Integrated third-party APIs for payment processing and analytics",
  //     "Created comprehensive API documentation using Postman",
  //     "Participated in daily stand-ups and sprint planning meetings"
  //   ]
  // },
  // {
  //   company: "DrowsyGuard",
  //   projectUrl: "https://drowsy-guard.vercel.app/auth/sign-up",
  //   position: "Backend Developer",
  //   period: "Jun 2019 - Feb 2020",
  //   shortDescription: "Core developer for an AI-powered analytics platform",
  //   responsibilities: [
  //     "Built RESTful APIs using Express.js and MongoDB",
  //     "Implemented user authentication using JWT and OAuth2",
  //     "Developed automated testing suites with Jest",
  //     "Created data processing pipelines for machine learning models",
  //     "Optimized application performance and scalability",
  //     "Collaborated with data scientists to implement ML features"
  //   ]
  // },
  {
    company: "Lawpat Tech Solutions",
    position: "Junior Developer",
    period: "May 2022 - Nov 2023",
    shortDescription:
      "Contributed to various client projects as part of an agile team",
    responsibilities: [
      "Developed and maintained features for e-commerce platforms",
      "Fixed bugs and improved existing codebase",
      "Participated in code reviews and documentation",
      "Optimized database queries resulting in 50% faster load times",
      "Built RESTful APIs using Express.js and MongoDB",
    ],
  },
];
