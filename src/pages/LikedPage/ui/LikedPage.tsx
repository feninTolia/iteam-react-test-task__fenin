'use client';
import { LikeButton } from '@/features/LikeButton';
import { getLikedFromLS } from '@/shared/lib/helpers/getLikedFromLS';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Text, TextSize } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

export const LikedPage = () => {
  const likedArray = getLikedFromLS();

  return (
    <Page>
      <Text
        title="Vacancies you liked:"
        size={TextSize.XXXL}
        className="mb-10 text-white"
      />
      <ul className="flex flex-col gap-8  items-center">
        {likedArray.map((liked) => (
          <li key={liked.id} className="flex justify-between gap-4 w-full">
            <AppLink
              href={`/job-details/${liked.id}`}
              theme={AppLinkTheme.CLEAR}
            >
              <Text text={liked.title} />
            </AppLink>
            <LikeButton id={liked.id} jobTitle={liked.title} />
          </li>
        ))}
      </ul>
    </Page>
  );
};
