import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextSize } from '@/shared/ui/Text';
import { memo } from 'react';

interface IProps {
  isEmptyProfile: boolean;
  isEdit: boolean;
  onEdit: () => void;
}

export const EditableProfileCardHeader = memo((props: IProps) => {
  const { isEdit, isEmptyProfile, onEdit } = props;

  return (
    <div className="flex justify-between items-center mb-8">
      <Text
        text={isEmptyProfile ? 'Create Profile' : 'My profile'}
        size={TextSize.XXXL}
        className="text-white"
      />
      <Button disabled={isEdit} theme={ButtonTheme.OUTLINED} onClick={onEdit}>
        {isEmptyProfile ? 'Create' : 'Edit'}
      </Button>
    </div>
  );
});
