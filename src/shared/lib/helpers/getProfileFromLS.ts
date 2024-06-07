import { IProfile } from '@/entities/Profile';
import { LocalStorageKeys } from '@/shared/constants/localStorage';

export const getProfileFromLS = () => {
  const profileString = localStorage?.getItem(LocalStorageKeys.PROFILE);
  if (!profileString) return {};

  return JSON.parse(profileString) as IProfile;
};
