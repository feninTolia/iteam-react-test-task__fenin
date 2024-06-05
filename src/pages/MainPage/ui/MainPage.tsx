'use client';
import { AppLink } from '@/shared/ui/AppLink';
import { Page } from '@/shared/widgets/Page';

export const MainPage = () => {
  const jobId = 4;

  return (
    <Page>
      <div className=" flex gap-4 mb-4 mt-2">
        <AppLink href={`/job-details/${jobId}`}>Job {jobId} details</AppLink>
        <AppLink href="/jobs">Recommended jobs</AppLink>
        <AppLink href="/create-profile">Create profile</AppLink>
        <AppLink href="/profile">Your profile</AppLink>
        <AppLink href="/liked">Liked</AppLink>
      </div>
    </Page>
  );
};
