import { AppLink } from '@/shared/ui/AppLink';
import { memo } from 'react';

export const Navbar = memo(() => {
  return (
    <div className=" flex gap-4 px-8 py-4">
      <AppLink href="/jobs">Jobs</AppLink>
      <AppLink href="/profile">Your profile</AppLink>
      <AppLink href="/liked">Liked</AppLink>
    </div>
  );
});
