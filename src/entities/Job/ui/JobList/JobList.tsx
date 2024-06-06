import { memo } from 'react';
import { IJob } from '../../model/types';
import { JobListItem } from '../JobListItem/JobListItem';

interface IProps {
  jobs?: IJob[];
}

export const JobsList = memo(({ jobs }: IProps) => {
  if (!jobs) {
    return <p>Loading...</p>;
    // return <Skeleton>; // TODO
  }

  return (
    <ul className="flex flex-col gap-6">
      {jobs.map((job) => (
        <JobListItem key={job.job_id} job={job} />
      ))}
    </ul>
  );
});
