import UserImage01 from '@/public/images/projects/user-32-01.jpg';
import UserImage03 from '@/public/images/projects/user-32-03.jpg';
import UserImage05 from '@/public/images/projects/user-32-05.jpg';
import UserImage08 from '@/public/images/projects/user-32-08.jpg';
import Image from 'next/image';

type Props = {
  title: string;
};

export default function Involvers({ title }: Props) {
  return (
    <div className='bg-white border border-slate-100 w-[32%] dark:bg-gray-800 p-5 shadow-sm rounded-xl'>
      <div className='flex justify-between space-x-1 mb-5'>
        <div className='text-sm text-gray-800 dark:text-gray-100 font-semibold'>
          {title} (10)
        </div>
      </div>
      <ul className='space-y-3 max-h-[220px] overflow-y-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-transparent'>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage08}
                  width={32}
                  height={32}
                  alt='User 08'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Carolyn McNeail
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage01}
                  width={32}
                  height={32}
                  alt='User 01'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Dominik Lamakani
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage03}
                  width={32}
                  height={32}
                  alt='User 03'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Ivan Mesaros
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage05}
                  width={32}
                  height={32}
                  alt='User 05'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Maria Martinez
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage05}
                  width={32}
                  height={32}
                  alt='User 05'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Maria Martinez
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage05}
                  width={32}
                  height={32}
                  alt='User 05'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Maria Martinez
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage05}
                  width={32}
                  height={32}
                  alt='User 05'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Maria Martinez
                </span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className='flex justify-between'>
            <div className='grow flex items-center'>
              <div className='relative mr-3'>
                <Image
                  className='w-8 h-8 rounded-full'
                  src={UserImage05}
                  width={32}
                  height={32}
                  alt='User 05'
                />
              </div>
              <div className='truncate'>
                <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                  Maria Martinez
                </span>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
  );
}
