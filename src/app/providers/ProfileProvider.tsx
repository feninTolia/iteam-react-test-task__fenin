'use client';
import { IProfile } from '@/entities/Profile/model/types';
import { ProfileContext } from '@/shared/lib/context/ProfileContext';
import { ReactNode, useCallback, useMemo, useState } from 'react';

interface IProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider = ({ children }: IProfileProviderProps) => {
  const [profile, setProfileState] = useState<IProfile>({
    name: '',
    desiredJob: '',
    aboutMe: '',
  });

  const setProfile = useCallback((value: IProfile) => {
    setProfileState(value);
  }, []);

  // const defaultProps = useMemo(() => ({ profile, setProfile }), [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
