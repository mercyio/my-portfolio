export interface Project {
  title: string;
  role: string;
  description: string;
  url: string;
  previewImage: string;
}

export const UserProjectsData: Project[] = [
  {
    title: "StartEase",
    role: "Creator and Maintainer",
    description:
      "StartEase is a command-line interface (CLI) tool designed to streamline project setup. It provides effortless scaffolding for various frontend, backend, and full-stack projects, supporting popular technologies like React, Vue.js, Express.js, Nest.js, and more. With StartEase, developers can quickly set up projects with their preferred tech stack and database, saving time and effort in the initial setup phase",
    url: "https://github.com/JC-Coder/startease",
    previewImage: "https://iili.io/2xguHU7.md.png",
  },
  {
    title: "Vince Technologies",
    role: "Software Engineer",
    description:
      "Vince Technologies is a leading provider of project management training programs. Their comprehensive curriculum is designed to empower professionals at all levels, from beginners to experienced project managers, with the skills and knowledge needed to excel in their roles. With a focus on unlocking the full potential of individuals and teams, Vince Technologies offers expert-led courses that cover the latest industry best practices and methodologies",
    url: "https://vincetechnologies.com",
    previewImage: "https://iili.io/2xgoqmv.md.png",
  },
];
