'use client';
import { AppLink } from '@/shared/ui/AppLink';
import { useFetchJobsList } from '../model/hooks/useFetchJobsList/useFetchJobsList';
import { JobList } from '@/entities/Job';
import { JobListItem } from '@/entities/Job/ui/JobListItem/JobListItem';
import { jobMock } from '@/shared/mocks/job';

type Props = {};

export const MainPage = (props: Props) => {
  const jobId = 4;

  const { data: jobs, isLoading, refetch } = useFetchJobsList();

  return (
    <main className="">
      <div className=" flex gap-4 mb-4 mt-2">
        <AppLink href={`/job-details/${jobId}`}>Job {jobId} details</AppLink>
        <AppLink href="/jobs">Recommended jobs</AppLink>
        <AppLink href="/create-profile">Create profile</AppLink>
        <AppLink href="/profile">Your profile</AppLink>
        <AppLink href="/liked">Liked</AppLink>
      </div>
      <h1 className=" text-2xl mb-4">Main Page</h1>
      <button onClick={() => refetch()}>refetch</button>
      {isLoading && <p>Loading...</p>}

      {jobs && <JobList jobs={jobs} />}

      {!jobs && <JobList jobs={[jobMock, jobMock, jobMock]} />}
    </main>
  );
};
