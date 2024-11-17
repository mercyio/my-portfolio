import { UserSocialsData } from "./socials"
import { UserInfoData } from "./usersInfo"
import { IWorkExperience, UserWorkExperienceData } from "./workExperience"

interface IUserResumeData {
  name: string
  tagline: string
  socials: typeof UserSocialsData
  skills?: string[]
  education?: string[]
  spokenLanguages?: string[]
  experience?: IWorkExperience[]
}

export const UserResumeData: IUserResumeData = {
  name: "JC CODER",
  tagline: UserInfoData.tagLine,
  // you can decide to use the UserSocialsData or create your own but it should follow the same structure
  // alternatively you can limit how many you want to show by doing UserSocialsData.slice(0, 2) where 2 is the number of items you want to show
  socials: UserSocialsData,
  skills: [
    "Backend Development - Javascript, Typescript, NodeJS (Express, NestJS), Github, RESTful APIs, Microservices, Redis, RabbitMQ",
    "Databases - Postgres, Mysql, MongoDB, Redis",
    "DevOps - Docker, AWS, Digital Ocean, Github CI/CD",
  ],
  education: ["Certificate"],
  spokenLanguages: ["English"],
  experience: UserWorkExperienceData,
}

// This is to control which sections to show in the resume page
export const UserResumeSections = {
  socials: true,
  skills: true,
  education: true,
  spokenLanguages: true,
}
