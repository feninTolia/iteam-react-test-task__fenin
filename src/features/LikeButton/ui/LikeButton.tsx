import Star from '@/shared/assets/icons/star.svg';
import { LocalStorageKeys } from '@/shared/constants/localStorage';
import {
  getLikedFromLS,
  isIdInLiked,
} from '@/shared/lib/helpers/getLikedFromLS';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCallback, useState } from 'react';

interface IProps {
  id: string | undefined;
  jobTitle: string;
}

export const LikeButton = (props: IProps) => {
  const { id, jobTitle } = props;
  const [isLiked, setIsLiked] = useState(!!isIdInLiked(id));

  const handleLikeClick = useCallback(() => {
    const likedArray = getLikedFromLS();

    if (isLiked) {
      const newArray = likedArray.filter((job) => job.id !== id);
      localStorage.setItem(LocalStorageKeys.LIKED, JSON.stringify(newArray));
      setIsLiked(false);
      return;
    }

    likedArray.push({ id, title: jobTitle });
    localStorage.setItem(LocalStorageKeys.LIKED, JSON.stringify(likedArray));
    setIsLiked(true);
  }, [id, isLiked, jobTitle]);

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={handleLikeClick}>
      <Star
        className={`hover:brightness-75 transition-all text-blue-500 ${
          isLiked && 'fill-blue-500'
        }`}
      />
    </Button>
  );
};
