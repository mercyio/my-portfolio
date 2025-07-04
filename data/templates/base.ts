import { UserInfoData } from "../usersInfo";

export enum FeaturesEnum {
  SOCIALS_SECTION = "SOCIALS_SECTION",
  SKILLS_SECTION = "SKILLS_SECTION",
  PROJECTS_SECTION = "PROJECTS_SECTION",
  CONTACT_SECTION = "CONTACT_SECTION",
  WORK_EXPERIENCE_SECTION = "WORK_EXPERIENCE_SECTION",
}

export interface BaseTemplate {
  heroImage: {
    type: "url" | "file";
    url: string;
  };
  fullName: string;
  location: string;
  contact: string;
  tagline: string;
  miniBio: string;
  features: {
    [key in FeaturesEnum]: boolean; // key is the feature name and value is a boolean to determine if the feature is active or not
  };
  inspiredBy: string;
}

export const BaseTemplate: BaseTemplate = {
  // IMPORTANT: DON'T REMOVE THIS (inspiredBy), this is used to credit the design inspiration gotten for this template
  inspiredBy: "https://fredkiss.dev",
  heroImage: {
    // this is the type of the hero image, it can be a url or a file
    type: "file",
    // if it's a file, it should be in the public folder and you should use the file name
    url: "mercyio.jpg",
  },
  fullName: UserInfoData.fullName,
  location: UserInfoData.location,
  contact: UserInfoData.contact,
  tagline: UserInfoData.tagLine,
  miniBio: UserInfoData.miniBio,
  features: {
    [FeaturesEnum.SOCIALS_SECTION]: true,
    [FeaturesEnum.SKILLS_SECTION]: true,
    [FeaturesEnum.PROJECTS_SECTION]: true,
    [FeaturesEnum.CONTACT_SECTION]: true,
    [FeaturesEnum.WORK_EXPERIENCE_SECTION]: true,
  },
};
