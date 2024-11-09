import { UserInfoData } from "../usersInfo";


export enum FeaturesEnum {
    SOCIALS_SECTION = "SOCIALS_SECTION",
    SKILLS_SECTION = "SKILLS_SECTION",
    PROJECTS_SECTION = "PROJECTS_SECTION",
    WORK_EXPERIENCE_SECTION = "WORK_EXPERIENCE_SECTION",
  }

export interface ShadowTemplate {
  inspiredBy?: string;
  heroImage: {
    type: "url" | "file";
    url: string;
  };
  fullName: string;
  location: string;
  tagline: string;
  miniBio: string;
  features: {
    [key in FeaturesEnum]: boolean;
  };
}

export const ShadowTemplate: ShadowTemplate = {
  heroImage: {
    type: "file",
    url: "profile.png", // Update with your image
  },
  fullName: UserInfoData.fullName,
  location: UserInfoData.location,
  tagline: UserInfoData.tagLine,
  miniBio: UserInfoData.miniBio,
  features: {
    [FeaturesEnum.SOCIALS_SECTION]: true,
    [FeaturesEnum.SKILLS_SECTION]: true,
    [FeaturesEnum.PROJECTS_SECTION]: true,
    [FeaturesEnum.WORK_EXPERIENCE_SECTION]: true,
  },
};