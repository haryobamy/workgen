'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from './button';

export default function SubnavigationTabs<T extends string>({
  defaultValue,
  tabs,
  hash,
  setHash,
}: {
  tabs: readonly T[];
  defaultValue: T;
  hash: T;
  setHash(t: T): void;
}) {
  const params = useParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setHash((window.location.hash.replace('#', '') as T) || defaultValue);
  }, [params]);

  return (
    <div
      className={cn(
        'w-full flex-wrap justify-start items-center gap-2 border-b-4 border-solid border-gray-300',
        !hash ? 'hidden' : 'flex'
      )}
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant='link'
          // variant={tab === hash ? 'secondary' : 'link'}
          asChild
          className={cn(
            'capitalize min-w-[112px] min-h-[41px]  hover:no-underline',
            'text-[14px] leading-[21px] font-normal',
            tab !== hash
              ? ' border-none text-gray-400'
              : 'flex border-b-4 border-indigo-500 font-[600] text-black'
          )}
        >
          <Link href={`#${tab}`}>{tab}</Link>
        </Button>
      ))}
    </div>
  );
}
