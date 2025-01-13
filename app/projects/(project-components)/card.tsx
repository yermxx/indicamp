import ProjectDetail from '@/app/projects/project-detail';
import Link from 'next/link';
import { ModalDetail } from '@/components/modal-detail';

export default function ProjectCards() {
  return (
    <>
      <ModalDetail
        triggerButton={
          <Link
            href='#'
            className='col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden'
          >
            <div className='flex flex-col h-full'>
              {/* Card Content */}
              <div className='grow flex flex-col p-5'>
                {/* Card body */}
                <div className='grow'>
                  {/* Header */}
                  <header className='mb-3'>
                    <h3 className='text-lg text-gray-800 dark:text-gray-100 font-semibold'>
                      TITLE
                    </h3>
                  </header>
                  {/* Rating and price */}
                  <div className='flex flex-wrap justify-between items-center mb-4'>
                    {/* Rating */}
                    <div className='flex items-center space-x-2 mr-2'>
                      {/* Stars */}
                      <div className='flex space-x-1'>
                        <span>starter</span>
                      </div>
                    </div>
                  </div>
                  <div className='mb-4'>content</div>
                  {/* Features list */}
                  <div>
                    <span className='mr-32'>PM</span>
                    <span>Backend</span>
                  </div>
                  <div>
                    <span className='mr-32'>DES</span>
                    <span>Frontend</span>
                  </div>
                </div>
                {/* Card footer */}
                <div className='mt-4'>
                  {/* Right side */}
                  <ul className='shrink-0 flex flex-wrap justify-end  -space-x-3 -ml-px'>
                    <li>
                      <span className='block w-9 h-9 rounded-full bg-black' />
                    </li>
                    <li>
                      <span className='block w-9 h-9 rounded-full bg-green-800' />
                    </li>
                    <li>
                      <span className='block w-9 h-9 rounded-full bg-blue-800' />
                    </li>
                    <li>
                      <span className='block w-9 h-9 rounded-full bg-gray-500 text-center'>
                        +
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        }
      >
        {/* Card 1 */}

        <ProjectDetail />
      </ModalDetail>
    </>
  );
}
