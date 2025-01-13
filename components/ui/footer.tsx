import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='w-full mx-auto sm:px-6 bg-blue-900'>
        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 pt-8 sm:pt-12 pb-12 sm:pb-16 px-12'>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-5 lg:max-w-xs'>
            {/* Logo */}
            <div className='text-3xl font-bold text-white'>indicamp</div>
            {/* Social links */}
            <div className='md:flex md:items-center md:justify-between py-5'>
              <ul className='flex gap-4 mb-4 md:order-1 md:mb-0'>
                <li>
                  <a
                    className='text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out'
                    href='#0'
                    aria-label='Mail'
                  >
                    <Mail />
                  </a>
                </li>
                <li>
                  <a
                    className='text-gray-400 hover:text-blue-500 transition duration-150 ease-in-out'
                    href='https://github.com/indiflex/indicamp'
                    aria-label='Github'
                  >
                    <Github />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2 mb-3 md:mb-0'>
            <h6 className='text-xl text-white font-semibold  mb-2 md:mb-4'>
              About
            </h6>
            <ul className='text-base font-medium space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/apply'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href='cs/faq'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2 mb-3 md:mb-0'>
            <h6 className='text-xl text-white font-semibold mb-2 md:mb-4'>
              Resources
            </h6>
            <ul className='text-base font-medium space-y-2'>
              <li>
                <Link
                  href='/lesson'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  Lesson
                </Link>
              </li>
              <li>
                <Link
                  href='/project'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2 mb-3 md:mb-0'>
            <h6 className='text-xl text-white font-semibold mb-2 md:mb-4'>
              Legal
            </h6>
            <ul className='text-base font-medium space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-white hover:text-white hover:font-bold transition duration-150 ease-in-out'
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyrights note */}
        <div className='text-sm md:text-xl text-center text-white mr-4 py-2 border-t border-slate-200'>
          © 2025 indicamp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
