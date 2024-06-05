import { AppLink } from '@/shared/ui/AppLink';
import React from 'react';

interface IProps {}

export const Navbar = (props: IProps) => {
  return (
    <div className=" flex gap-4 px-8 py-4">
      <AppLink href="/jobs">Vacancies</AppLink>
      <AppLink href="/create-profile">Create profile</AppLink>
      <AppLink href="/profile">Your profile</AppLink>
      <AppLink href="/liked">Liked</AppLink>
    </div>
  );
};
