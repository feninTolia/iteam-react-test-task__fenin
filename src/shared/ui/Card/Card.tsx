import { HTMLAttributes, ReactNode, memo } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: IProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={'p-4' + className} {...otherProps}>
      {children}
    </div>
  );
});
