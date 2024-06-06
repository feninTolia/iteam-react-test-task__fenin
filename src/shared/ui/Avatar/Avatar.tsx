import Image from 'next/image';
import { memo } from 'react';

interface IAvatarProps {
  className?: string;
  alt?: string;
  src: string | undefined;
  size?: number;
}

export const Avatar = memo((props: IAvatarProps) => {
  const { className, src, alt = 'avatar', size = 20 } = props;

  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full overflow-hidden ${className} bg-slate-700 text-[8px]`}
    />
  );
});
