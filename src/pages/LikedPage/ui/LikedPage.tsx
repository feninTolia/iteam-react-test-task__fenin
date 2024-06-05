'use client';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

type Props = {};

export const LikedPage = (props: Props) => {
  const liked = localStorage.getItem('liked');
  const likedArray = JSON.parse(liked ?? '[]') as Array<{
    id: string;
    title: string;
  }>;

  return (
    <div>
      {likedArray.map((liked) => (
        <AppLink
          key={liked.id}
          href={`/job-details/${liked.id}`}
          theme={AppLinkTheme.CLEAR}
        >
          <Text title={liked.title} />
        </AppLink>
      ))}
    </div>
  );
};
