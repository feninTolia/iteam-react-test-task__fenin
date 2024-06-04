import Link from 'next/link';

type Props = {};

export const MainPage = (props: Props) => {
  const jobId = 4;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main Page</h1>
      <Link href={`/job-details/${jobId}`}>Job {jobId} details</Link>
      <Link href="/jobs">Recommended jobs</Link>
      <Link href="/create-profile">Create profile</Link>
      <Link href="/profile">Your profile</Link>
      <Link href="/liked">Liked</Link>
    </main>
  );
};
