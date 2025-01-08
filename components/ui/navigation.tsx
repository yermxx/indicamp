import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/indicamp+logo.png';

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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
            />
          </svg>
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
