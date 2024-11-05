import { UserInfo } from "../usersInfo";

export enum FeaturesEnum {
  SOCIALS_SECTION = "SOCIALS_SECTION",
  SKILLS_SECTION = "SKILLS_SECTION",
  PROJECTS_SECTION = "PROJECTS_SECTION",
  WORK_EXPERIENCE_SECTION = "WORK_EXPERIENCE_SECTION",
}

export interface BaseTemplate {
  heroImage: {
    type: "url" | "file";
    url: string;
  };
  fullName: string;
  location: string;
  tagline: string;
  miniBio: string;
  features: {
    [key in FeaturesEnum]: boolean; // key is the feature name and value is a boolean to determine if the feature is active or not
  };
}

export const BaseTemplate: BaseTemplate = {
  heroImage: {
    type: "file",
    url: "jc_img_1.png",
  },
  fullName: UserInfo.fullName,
  location: UserInfo.location,
  tagline: UserInfo.tagLine,
  miniBio: UserInfo.miniBio,
  features: {
    [FeaturesEnum.SOCIALS_SECTION]: true,
    [FeaturesEnum.SKILLS_SECTION]: true,
    [FeaturesEnum.PROJECTS_SECTION]: true,
    [FeaturesEnum.WORK_EXPERIENCE_SECTION]: true,
  },
};
