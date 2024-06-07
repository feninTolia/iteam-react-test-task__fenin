import { IProfile } from '@/entities/Profile/model/types';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface IProfileContextProps {
  profile?: IProfile;
  setProfile?: Dispatch<SetStateAction<IProfile>>;
}

export const ProfileContext = createContext<IProfileContextProps>({});
