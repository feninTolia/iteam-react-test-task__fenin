import { getPostedAt } from '@/shared/lib/helpers/getPostedAt';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { IJob } from '../../model/types';
import { memo } from 'react';

interface IProps {
  job: IJob;
}

export const JobListItem = memo(({ job }: IProps) => {
  if (!job) {
    return null;
  }

  const postedAt = getPostedAt(job.job_posted_at_timestamp);

  return (
    <li>
      <Card className=" min-w-60 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {job.employer_logo && <Avatar src={job.employer_logo} />}

          <AppLink
            href={job.employer_website ?? '#'}
            target="_blank"
            theme={AppLinkTheme.CLEAR}
          >
            {job.employer_name}
          </AppLink>
          <Text text={postedAt} className=" text-gray-500" />
        </div>
        <AppLink
          href={`/job-details/${job.job_id}`}
          className="line-clamp-1 text-2xl font-bold"
        >
          {job.job_title}
        </AppLink>
        <p className="max-h-20 overflow-hidden line-clamp-3">
          {job.job_description}
        </p>
        <AppLink href={`/job-details/${job.job_id}`}>Details</AppLink>
      </Card>
    </li>
  );
});
