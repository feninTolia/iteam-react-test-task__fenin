'use client';
import { AppLink } from '@/shared/ui/AppLink';
import { useFetchJobsList } from '../model/hooks/useFetchJobsList/useFetchJobsList';

type Props = {};

export const MainPage = (props: Props) => {
  const jobId = 4;

  const { data, isLoading, refetch } = useFetchJobsList();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main Page</h1>
      <button onClick={() => refetch()}>refetch</button>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((job) => (
            <li key={job.job_id}>{job.job_title}</li>
          ))}
        </ul>
      )}
      <AppLink href={`/job-details/${jobId}`}>Job {jobId} details</AppLink>
      <AppLink href="/jobs">Recommended jobs</AppLink>
      <AppLink href="/create-profile">Create profile</AppLink>
      <AppLink href="/profile">Your profile</AppLink>
      <AppLink href="/liked">Liked</AppLink>
    </main>
  );
};
