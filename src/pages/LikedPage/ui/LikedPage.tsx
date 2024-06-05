'use client';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/shared/widgets/Page';

type Props = {};

export const LikedPage = (props: Props) => {
  const liked = localStorage.getItem('liked');
  const likedArray = JSON.parse(liked ?? '[]') as Array<{
    id: string;
    title: string;
  }>;

  return (
    <Page>
      {likedArray.map((liked) => (
        <AppLink
          key={liked.id}
          href={`/job-details/${liked.id}`}
          theme={AppLinkTheme.CLEAR}
        >
          <Text title={liked.title} />
        </AppLink>
      ))}
    </Page>
  );
};
