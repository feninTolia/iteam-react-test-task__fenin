'use client';
import { IProfile } from '@/entities/Profile/model/types';
import { ProfileContext } from '@/shared/lib/context/ProfileContext';
import { ReactNode, useMemo, useState } from 'react';

interface IProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: IProfileProviderProps) => {
  const [profile, setProfile] = useState<IProfile>({
    name: '',
    desiredJob: '',
    aboutMe: '',
  });

  const defaultProps = useMemo(() => ({ profile, setProfile }), [profile]);

  return (
    <ProfileContext.Provider value={defaultProps}>
      {children}
    </ProfileContext.Provider>
  );
};
