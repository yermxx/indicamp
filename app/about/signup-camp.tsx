import { LogInIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SignupCampButton({ full }: { full?: boolean }) {
  return (
    <Link
      className={cn('btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm', {
        'w-full': full,
      })}
      href='/signup'
    >
      이번 기수 신청하기 <LogInIcon size={20} className='ml-2' />
    </Link>
  );
}
