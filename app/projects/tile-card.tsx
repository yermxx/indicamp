import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  image: StaticImageData;
  occupation: string;
  link: string;
  location: string;
  content: string;
  career: string;
}

export default function TileCard({ user }: { user: User }) {
  return (
    <div className='col-span-6 border border-slate-100 bg-white shadow-sm rounded-xl'>
      <div className='flex flex-col h-full'>
        {/* Card top */}
        <div className='grow p-5'>
          <div className='flex justify-between items-start'>
            {/* Image + name */}
            <header>
              <div className='flex mb-2'>
                <Link
                  className='relative inline-flex items-start mr-5'
                  href={user.link}
                >
                  <div
                    className='absolute top-0 right-0 -mr-2 bg-white rounded-full shadow'
                    aria-hidden='true'
                  >
                    <svg
                      className='w-8 h-8 fill-current text-yellow-500'
                      viewBox='0 0 32 32'
                    >
                      <path d='M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z' />
                    </svg>
                  </div>
                  <Image
                    className='rounded-full'
                    src={user.image}
                    width={64}
                    height={64}
                    alt={user.name}
                  />
                </Link>
                <div className='mt-1 pr-1'>
                  <Link
                    className='inline-flex text-gray-800 hover:text-gray-900 '
                    href={user.link}
                  >
                    <h2 className='text-xl leading-snug justify-center font-semibold'>
                      {user.name}
                    </h2>
                  </Link>
                  <div className='flex items-center'>
                    <span className='text-sm font-medium text-gray-400 -mt-0.5 mr-1'>
                      -&gt;
                    </span>{' '}
                    <span>{user.occupation}</span>
                  </div>
                </div>
              </div>
            </header>
            {/* Menu button */}
            {/*<EditMenu align="right" className="shrink-0" />*/}
          </div>
          {/* Bio */}
          <div className="mt-2">
            <div className="text-sm">경력: {user.career}</div>
            <div className="text-sm">기술스택: {user.content}</div>
            <div className="text-sm">연령대</div>
            <div className="text-sm">포트폴리오</div>
          </div>
        </div>
      </div>
    </div>
  );
}
