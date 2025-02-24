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
    company: "CodaBlack Foundations",
    companyUrl: "*",
    position: "Backend Developer",
    period: "November 2024 - Date",
    shortDescription:
      "Developed and maintained high-quality software solutions",
    responsibilities: [
      "Implemented and optimized core functionalities for a crypto wallet app and an e-commerce platform.",
      "Built RESTful APIs using, NestJs and Express.js",
      "Developed a fast-food e-commerce website, integrating payment gateways and real-time order tracking.",
      "Improved system scalability, and ensured high availability of services.",
      "Optimized database queries resulting in 50% faster load times",
      "Implemented authentication, authorization, and session management for secure user interactions.",
    ],
  },

  {
    company: "Start Innovation Hub",
    companyUrl: "https://starthub.com/",
    position: "Junior Backend Developer",
    period: "October 2024 - Date",
    shortDescription:
      "Contributed to various projects as part of an agile team",
    responsibilities: [
      "Developed and maintained features for an e-commerce platform",
      "Fixed bugs and improved existing codebase",
      "Reduced system latency by 40% through implementation of Redis caching",
      "Integrated third-party APIs for payment processing and analytics",
      "Created comprehensive API documentation using Postman",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
  },

  {
    company: "Lawpat Technologies",
    companyUrl: "https://lawpat.ng/",
    position: "Backend developer Intern",
    period: "March 2024 - September 2024",
    shortDescription:
      "Built and maintained multiple client-facing applications",
    responsibilities: [
      // "Architected and implemented scalable microservices using Node.js and Kubernetes",
      "Built RESTful APIs using Express.js and MongoDB",
      "Implemented user authentication using JWT and OAuth2",
      // "Implemented CI/CD pipelines that reduced deployment time by 60%",
      // "Mentored junior developers and conducted technical interviews",
      "Implemented real-time features using WebSocket technology",
      "Researched and implemented new technologies to improve application efficiency and security.",
      // "Learned and implemented best practices in software development",
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
    company: "The Roothub",
    companyUrl: "https://theroothub.com/",
    position: "Web Developer Intern",
    period: "May 2022 - Nov 2022",
    shortDescription:
      "Contributed to various client projects as part of an agile team",
    responsibilities: [
      // "Developed and maintained features for e-commerce platforms",
      "Collaborated with designers, product managers, and developers to deliver seamless user experiences.",
      "Fixed bugs and improved existing codebase",
      "Learned and implemented best practices in software development",
    ],
  },
];
