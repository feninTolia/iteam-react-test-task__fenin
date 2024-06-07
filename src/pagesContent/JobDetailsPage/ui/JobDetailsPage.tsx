'use client';
import { useFetchJobById } from '@/entities/Job/model/hooks/useFetchJobById/useFetchJobById';
import { LikeButton } from '@/features/LikeButton';
import { RoutePath } from '@/shared/constants/router';
import { getPostedAt } from '@/shared/lib/helpers/getPostedAt';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextSize } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface IProps {
  id?: string;
}

export const JobDetailsPage = ({ id }: IProps) => {
  const fixedId = id?.replace('%3D%3D', '==');
  const { data: job, isLoading } = useFetchJobById(fixedId);
  if (isLoading) {
    return (
      <Page>
        <Text text="Loading..." />
      </Page>
    );
  }

  if (!job) {
    return null;
  }

  const postedAt = getPostedAt(job.job_posted_at_timestamp);

  return (
    <Page className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Text size={TextSize.XXXL} title={job.job_title} />
        <LikeButton id={fixedId} jobTitle={job.job_title ?? ''} />
      </div>
      <div className="flex items-center gap-2 ">
        {!!job.employer_logo && <Avatar src={job.employer_logo} />}
        <AppLink
          href={job.employer_website ?? RoutePath.ROOT}
          theme={AppLinkTheme.CLEAR}
          target="_blank"
        >
          {job.employer_name}
        </AppLink>
        <Text text={postedAt} className="text-gray-500" />
      </div>

      <Text text={job.job_description} />
      <Text title="Qualifications:" list={job.job_highlights?.Qualifications} />
      <Text
        title="Your responsibilities:"
        list={job.job_highlights?.Responsibilities}
      />
      <Text title="What we offer:" list={job.job_highlights?.Benefits} />

      {job.employer_website && (
        <div>
          <Text title="Company website" />
          <AppLink href={job.employer_website} target="_blank">
            {job.employer_website}
          </AppLink>
        </div>
      )}

      <AppLink
        theme={AppLinkTheme.PRIMARY}
        href={job.job_apply_link}
        target="_blank"
      >
        Apply
      </AppLink>
    </Page>
  );
};
