'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

const reg = new RegExp(/[^\s]*([^\s]{2})\s?.*/);

export default function AvatarPlaceholder({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const nm = useMemo(
    () => name?.replace(/[\(\)]/g, ' ').replace(reg, '$1'),
    [name]
  );

  return (
    <>
      <div className={cn('avatar-placeholder uppercase', className)}>{nm}</div>
    </>
  );
}
