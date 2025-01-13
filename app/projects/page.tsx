import ProjectCreateForm from '@/app/projects/project-create-form';
import { Button } from '@/components/ui/button';
import ProjectCards from './(project-components)/card';
import ModalForm from '@/components/modal-form';

export const metadata = {
  title: 'Projects',
  description: 'Page description',
};

export default function ProjectsPage() {
  return (
    <>
    <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto'>
      {/* Page header */}
      <div className='mb-5'>
        {/* Title */}
        <h1 className='text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold'>
          Find your project!
        </h1>
      </div>

      <div>
        <div className='mt-12'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden'>
              <div className='flex items-center justify-center h-full'>
                <ModalForm
                  triggerButton={
                    <Button className='rounded-full bg-gray-300 bg-opacity-20 text-black font-bold'>
                      +
                    </Button>
                  }
                >
                  <ProjectCreateForm />
                </ModalForm>
              </div>
            </div>
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
