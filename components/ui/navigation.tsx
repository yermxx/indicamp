import Logo from '@/public/indicamp+logo.png';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <div className='flex items-center justify-between pt-7 pb-4 border-b shadow-md bg-white'>
        <div className='flex relative px-8 font-bold'>
          <strong className='text-2xl'>Indicam</strong>
          <Image
            className='absolute right-0 -bottom-1'
            src={Logo}
            alt='logo'
            width='28'
            height='28'
          />
        </div>
        <div className='flex gap-24 text-xl text-gray-800'>
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
            Projects
          </Link>
          <Link
            href='/faq'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            FAQ
          </Link>
        </div>
        <div className='flex gap-5 px-10'>
          <button>
            <Bell />
          </button>
          <Link href='/login'>
            <button
              type='button'
              className='text-xl text-blue-500 font-semibold hover:text-blue-300'
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
