import Image from 'next/image';

interface IAvatarProps {
  className?: string;
  alt?: string;
  src: string | undefined;
  size?: number;
}

export const Avatar = (props: IAvatarProps) => {
  const { className, src = '', alt = 'avatar', size = 20 } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
};
