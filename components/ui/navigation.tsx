import logo from '@/public/indicamp+logo.png';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/lib/auth';

export default async function Navigation() {
  const session = await auth();
  return (
    <nav>
      <div className='flex items-center justify-between pt-7 pb-4 border-b shadow-md bg-white'>
        <Link href='/' className='flex relative px-8 font-bold'>
          <strong className='text-3xl'>indicam</strong>
          <Image
            className='absolute right-1 bottom-0'
            src={logo}
            alt='indicamp logo'
            width='28'
            height='28'
          />
        </Link>
        <div className='flex gap-24 text-lg text-gray-800'>
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
            href='/projects'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            Projects
          </Link>
          <Link
            href='/cs/faq'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            FAQ
          </Link>
        </div>
        <div className='flex gap-5 px-10'>
          <button>
            <Bell />
          </button>
          {session?.user?.email ? (
            <Link href='/mypage'>{session.user.name}</Link>
          ) : (
            <Link href='/login'>
              <button
                type='button'
                className='text-lg text-blue-500 font-semibold hover:text-blue-300'
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
