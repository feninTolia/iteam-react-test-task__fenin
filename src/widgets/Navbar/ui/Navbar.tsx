import { RoutePath } from '@/shared/constants/router';
import { AppLink } from '@/shared/ui/AppLink';
import { memo } from 'react';

export const Navbar = memo(() => {
  return (
    <div className=" flex gap-4 px-8 py-4">
      <AppLink href={RoutePath.JOBS}>Jobs</AppLink>
      <AppLink href={RoutePath.PROFILE}>Your profile</AppLink>
      <AppLink href={RoutePath.LIKED}>Liked</AppLink>
    </div>
  );
});
