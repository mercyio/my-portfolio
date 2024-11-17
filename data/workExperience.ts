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
    company: "TechGiant Corp",
    companyUrl: "https://techgiant.example.com",
    position: "Senior Software Engineer",
    period: "Jan 2022 - Present",
    shortDescription: "Leading backend development for cloud-based solutions",
    responsibilities: [
      "Architected and implemented scalable microservices using Node.js and Kubernetes",
      "Reduced system latency by 40% through implementation of Redis caching",
      "Led a team of 5 developers in delivering critical features for enterprise clients",
      "Implemented CI/CD pipelines that reduced deployment time by 60%",
      "Mentored junior developers and conducted technical interviews",
      "Collaborated with product managers to define technical specifications"
    ]
  },
  {
    company: "InnovateLabs",
    companyUrl: "https://innovatelabs.example.com",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dec 2021",
    shortDescription: "Built and maintained multiple client-facing applications",
    responsibilities: [
      "Developed responsive web applications using React and Node.js",
      "Implemented real-time features using WebSocket technology",
      "Optimized database queries resulting in 50% faster load times",
      "Integrated third-party APIs for payment processing and analytics",
      "Created comprehensive API documentation using Swagger",
      "Participated in daily stand-ups and sprint planning meetings"
    ]
  },
  {
    company: "StartupX",
    projectUrl: "https://startupx.example.com",
    position: "Backend Developer",
    period: "Jun 2019 - Feb 2020",
    shortDescription: "Core developer for an AI-powered analytics platform",
    responsibilities: [
      "Built RESTful APIs using Express.js and MongoDB",
      "Implemented user authentication using JWT and OAuth2",
      "Developed automated testing suites with Jest",
      "Created data processing pipelines for machine learning models",
      "Optimized application performance and scalability",
      "Collaborated with data scientists to implement ML features"
    ]
  },
  {
    company: "CodeCraft Solutions",
    position: "Junior Developer",
    period: "Jan 2019 - May 2019",
    shortDescription: "Contributed to various client projects as part of an agile team",
    responsibilities: [
      "Developed and maintained features for e-commerce platforms",
      "Fixed bugs and improved existing codebase",
      "Participated in code reviews and documentation",
      "Assisted in deployment and monitoring of applications",
      "Learned and implemented best practices in software development"
    ]
  }
];
