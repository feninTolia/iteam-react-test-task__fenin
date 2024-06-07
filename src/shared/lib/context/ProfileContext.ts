'use client';
import { IProfile } from '@/entities/Profile/model/types';
import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface IProfileContextProps {
  profile?: IProfile;
  setProfile?: (value: IProfile) => void;
}

export const ProfileContext = createContext<IProfileContextProps>({});
