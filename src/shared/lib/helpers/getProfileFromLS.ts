import { IProfile } from '@/entities/Profile';

export const getProfileFromLS = () => {
  const profileString = localStorage?.getItem('profile');
  if (!profileString) return {};

  return JSON.parse(profileString) as IProfile;
};
