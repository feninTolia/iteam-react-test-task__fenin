import { PropsWithChildren, memo } from 'react';

interface IPageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PropsWithChildren<IPageProps>) => {
  const { className, children } = props;

  return (
    <main
      className={`flex-grow flex-shrink-[100] h-[calc(100vh-var(--navbar-height))] p-8 pb-12 overflow-scroll ${className}`}
    >
      {children}
    </main>
  );
});
