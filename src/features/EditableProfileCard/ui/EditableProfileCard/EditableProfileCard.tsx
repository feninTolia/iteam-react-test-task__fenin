'use client';
import { ProfileCard } from '@/entities/Profile';
import { ProfileInputField } from '@/entities/Profile/model/constants';
import { IProfile } from '@/entities/Profile/model/types';
import { ProfileContext } from '@/shared/lib/context/ProfileContext';
import { getProfileFromLS } from '@/shared/lib/helpers/getProfileFromLS';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextSize } from '@/shared/ui/Text';
import { useCallback, useContext, useEffect, useState } from 'react';

interface IProps {
  isCreateProfile?: boolean;
}
export const EditableProfileCard = ({ isCreateProfile = false }: IProps) => {
  const { profile, setProfile } = useContext(ProfileContext);
  const [isEdit, setIsEdit] = useState(isCreateProfile);

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

  const handleSave = useCallback((values: IProfile) => {
    localStorage.setItem('profile', JSON.stringify(values));
  }, []);

  const handleCancel = useCallback(() => {
    extractProfileFromLSToContext();
  }, [extractProfileFromLSToContext]);

  const onInputChange = useCallback(
    (inputName: ProfileInputField, value: string) => {
      setProfile?.((prev) => {
        return { ...prev, [inputName]: value };
      });
    },
    [setProfile]
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <Text text="My profile" size={TextSize.XXXL} className="text-white" />
        <Button
          disabled={isEdit}
          theme={ButtonTheme.OUTLINED}
          onClick={() => setIsEdit(true)}
        >
          Edit
        </Button>
      </div>

      <ProfileCard
        handleChange={onInputChange}
        initialValues={profile}
        onSave={handleSave}
        onCancel={handleCancel}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
};
