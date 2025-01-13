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
    <div
      className={cn(
        'uppercase bg-slate-700 text-white/75 size-8 text-center inline-block rounded-full mr-2 leading-8 cursor-pointer font-medium',
        className
      )}
    >
      {nm}
    </div>
  );
}
