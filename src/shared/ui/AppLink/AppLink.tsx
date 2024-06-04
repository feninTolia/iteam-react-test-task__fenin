import Link from 'next/link';
import { ReactNode } from 'react';

interface IProps {
  href: string;
  children: ReactNode;
}

export const AppLink = (props: IProps) => {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className="text-blue-500 hover:cursor-pointer hover:brightness-[80%] transition-all"
    >
      {children}
    </Link>
  );
};
