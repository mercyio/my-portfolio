export interface Project {
  title: string;
  role: string;
  description: string;
  url: string;
  previewImage: string;
}

export const UserProjectsData: Project[] = [
  {
    title: "GreenBounty",
    role: "Backend Developer",
    description:
      "GreenBounty is a web app dedicated to encouraging recycling through a reward-based system. Users earn points for recycling items, which can be exchanged for rewards. The platform combines technology and sustainability to promote environmentally conscious habits. With features like progress tracking and an intuitive design, GreenBounty simplifies recycling and inspires users to make a meaningful impact.",
    url: "https://green-bounty.vercel.app/",
    previewImage:
      "https://i.postimg.cc/Jhgd98hR/Screenshot-from-2024-12-09-18-26-37.png",
  },
  {
    title: "DrowsyGuard",
    role: "Backend developer",
    description:
      "DrowsyGuard uses artificial intelligence to monitor driver fatigue in real-time. It tracks physical indicators like eye movements, facial expressions, and more to detect early signs of drowsiness—and immediately alerts the driver to prevent accidents.",
    url: "https://drowsy-guard.vercel.app/auth/sign-up",
    previewImage:
      "https://i.postimg.cc/sgbYzg5H/Screenshot-from-2024-12-09-18-33-14.png",
  },
  {
    title: "Karepal",
    role: "Backend developer",
    description:
      "KarePal for Neonatal Care provides an AI-powered solution that combines the power of computer vision and diverse health data to provide personalized care for infants. The platform supports caregivers with real-time insights, early health issue detection, and tailored interventions to ensure the well-being of newborns. KarePal is a vital tool for ensuring care during the critical early stages of life.",
    url: "https://karepal-frontend.vercel.app/",
    previewImage: "https://i.postimg.cc/W1qQz7K0/karepal-Logo-New.jpg",
  },
  {
    title: "TicTacToe",
    role: "Full-stack developer",
    description:
      "Created an interactive TIC-TAC-TOE game. This game features a responsive design that works on both desktop and mobile devices. Players can choose their symbols and play against each other in a 3x3 grid. The game includes logic to determine the winner or a draw at the end of each match. It provides an engaging and simple way to enjoy this classic game.",
    url: "https://mercyio-tic-tac-toe.vercel.app/",
    previewImage:
      "https://i.postimg.cc/ZRcrtFb4/Screenshot-from-2024-12-09-17-32-33.png",
  },


  {
    title: "AgriTech",
    role: "Backend Developer",
    description:
      "AgriTech is an AI-powered mobile app to help farmers monitor crop health and detect diseases early.It uses computer vision and machine learning to analyze crop images and identify issues like pests or nutrient deficiencies. It provides feedbacks and actionable recommendations to improve crop yield and health. This solution is user-friendly, accessible to farmers of all technical levels with the Aim of enhancing productivity and promoting sustainable farming practices",
    url: "https://github.com/mercyio",
    // url: "https://agripro-connect.vercel.app/",
    previewImage:
      "https://i.postimg.cc/tRhDqWT0/Screenshot-from-2024-12-09-18-56-32.png",
  },
  // {
  //   title: "macwin",
  //   role: "Backend Developer",
  //   description:
  //     "StartEase is a command-line interface (CLI) tool designed to streamline project setup. It provides effortless scaffolding for various frontend, backend, and full-stack projects, supporting popular technologies like React, Vue.js, Express.js, Nest.js, and more. With StartEase, developers can quickly set up projects with their preferred tech stack and database, saving time and effort in the initial setup phase ",
  //   url: "",
  //   previewImage: "https://iili.io/2xguHU7.md.png",
  // },
];
