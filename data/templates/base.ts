import { UserInfo } from '../usersInfo';

export interface BaseTemplate {
  heroImage: {
    type: 'url' | 'file';
    url: string;
  };
  fullName: string;
  location: string;
  tagline: string;
  miniBio: string;
}

export const BaseTemplate: BaseTemplate = {
  heroImage: {
    type: 'file',
    url: 'jc-image.png'
  },
  fullName: UserInfo.fullName,
  location: UserInfo.location,
  tagline: UserInfo.tagLine,
  miniBio: UserInfo.miniBio
};
