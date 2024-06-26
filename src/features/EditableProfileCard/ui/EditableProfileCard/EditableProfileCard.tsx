'use client';
import { IProfile, ProfileCard, ProfileInputField } from '@/entities/Profile';
import { ProfileContext } from '@/shared/lib/context/ProfileContext';
import { getProfileFromLS } from '@/shared/lib/helpers/getProfileFromLS';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { LocalStorageKeys } from '@/shared/constants/localStorage';

export const EditableProfileCard = memo(() => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [isEdit, setIsEdit] = useState(false);
  const [isEmptyProfile, setIsEmptyProfile] = useState(true);

  const extractProfileFromLSToContext = useCallback(() => {
    const profileFromLS = getProfileFromLS();
    if (profileFromLS) {
      setProfile?.(profileFromLS);
    }
  }, [setProfile]);

  useEffect(() => {
    extractProfileFromLSToContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const profileFromLS = getProfileFromLS();
    const isWithValues = Object?.values(profileFromLS).some((el) => el !== '');

    if (profileFromLS && isWithValues) {
      setIsEmptyProfile(false);
    } else {
      setIsEmptyProfile(true);
    }
  }, [isEdit]);

  const onInputChange = useCallback(
    (inputName: ProfileInputField, value: string) => {
      setProfile?.((prev) => {
        return { ...prev, [inputName]: value };
      });
    },
    [setProfile]
  );

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const handleCancel = useCallback(() => {
    extractProfileFromLSToContext();
    setIsEdit(false);
  }, [extractProfileFromLSToContext]);

  const handleSubmit = useCallback((value: IProfile) => {
    setIsEdit(false);
    localStorage.setItem(LocalStorageKeys.PROFILE, JSON.stringify(value));
  }, []);

  return (
    <div>
      <EditableProfileCardHeader
        isEdit={isEdit}
        isEmptyProfile={isEmptyProfile}
        onEdit={onEdit}
      />

      <ProfileCard
        handleChange={onInputChange}
        initialValues={profile}
        onCancel={handleCancel}
        isEdit={isEdit}
        onSubmit={handleSubmit}
      />
    </div>
  );
});
