import Link from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export enum AppLinkTheme {
  CLEAR = 'clear',
  ACCENT = 'link-accent',
  PRIMARY = 'link-btn-primary',
}

interface IProps {
  href: string | undefined;
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  theme?: AppLinkTheme;
}

export const AppLink = (props: IProps) => {
  const {
    href = '#',
    target = '_self',
    children,
    className,
    theme: appLinkTheme = AppLinkTheme.ACCENT,
  } = props;

  return (
    <Link
      target={target}
      href={href}
      className={`${appLinkTheme} ${className}`}
    >
      {children}
    </Link>
  );
};
