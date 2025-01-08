import Logo from '@/public/indicamp+logo.png';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className='flex items-center justify-between mt-6 pb-5 border-b shadow-md'>
      <div className='flex relative px-8 font-bold'>
        <strong className='text-[24px]'>Indicam</strong>
        <Image
          className='absolute right-0 bottom-0'
          src={Logo}
          alt='logo'
          width='28'
          height='28'
        />
      </div>
      <div className='flex gap-24 text-[18px] text-gray-800'>
        <Link
          href='/about'
          className='hover:text-gray-500 hover:underline underline-offset-4'
        >
          About
        </Link>

        <Link
          href='/lesson'
          className='hover:text-gray-500 hover:underline underline-offset-4'
        >
          Lesson
        </Link>
        <Link
          href='/project'
          className='hover:text-gray-500 hover:underline underline-offset-4'
        >
          Project
        </Link>
        <Link
          href='/faq'
          className='hover:text-gray-500 hover:underline underline-offset-4'
        >
          FAQ
        </Link>
      </div>
      <div className='flex gap-7 px-10'>
        <button>
          <Bell />
        </button>
        <button
          type='button'
          className='text-[18px] text-blue-500 font-semibold hover:text-blue-300'
        >
          Login
        </button>
      </div>
    </div>
  );
}
