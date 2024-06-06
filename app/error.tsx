'use client';

import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-60 flex flex-col gap-4 justify-center items-center">
      <Text title="Something went wrong!" />
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
