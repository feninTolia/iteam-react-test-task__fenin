import { memo } from 'react';
import { IJob } from '../../model/types';
import { JobListItem } from '../JobListItem/JobListItem';
import { Text, TextSize } from '@/shared/ui/Text';

interface IProps {
  jobs?: IJob[] | null;
}

export const JobsList = memo(({ jobs }: IProps) => {
  if (!jobs) {
    return <Text text="Loading" />;
  }

  if (jobs.length === 0) {
    return (
      <Text
        text="Cannot find a job, try looking for something else"
        size={TextSize.XXL}
      />
    );
  }
  return (
    <ul className="flex flex-col gap-6">
      {jobs.map((job) => (
        <JobListItem key={job.job_id} job={job} />
      ))}
    </ul>
  );
});
