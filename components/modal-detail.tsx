'use client';

import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function ModalDetail({
  children,
  triggerButton,
}: {
  children: React.ReactNode;
  triggerButton: React.ReactNode;
}) {
  // const router = useRouter();
  //
  // const handleOpenChange = () => {
  //   router.back();
  // };
  // className='overflow-y-hidden min-h-0'
  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogOverlay className='bg-black/5 '>
        <DialogContent className='overflow-y-hidden max-w-[800px] h-[95vh]'>
          <DialogTitle className='sticky top-0 bg-white'>
            <div className=' max-w-5xl px-4 pt-8 mx-auto flex flex-col'>
              <div className='text-sm text-gray-500 dark:text-gray-400 italic mb-2'>
                Posted Jan 6, 2024
              </div>
              <div className='mb-4'>
                <h1 className='text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold'>
                  프로젝트 제목
                </h1>
              </div>

              <div className='mb-1'>
                <div className='flex flex-wrap items-center -m-1'>
                  <div className='m-1'>
                    <div
                      className='inline-flex text-xs px-2.5 py-1 rounded-full shadow-none
              border border-muted hover:border-primary/50
              text-muted-foreground bg-background'
                    >
                      데이팅앱
                    </div>
                  </div>
                  <div className='m-1'>
                    <div
                      className='inline-flex text-xs px-2.5 py-1 rounded-full shadow-none
              border border-muted hover:border-primary/50
              text-muted-foreground bg-background'
                    >
                      소셜앱
                    </div>
                  </div>
                  <div className='m-1'>
                    <div
                      className='inline-flex text-xs px-2.5 py-1 rounded-full shadow-none
              border border-muted hover:border-primary/50
              text-muted-foreground bg-background'
                    >
                      커머셜
                    </div>
                  </div>
                </div>
                <hr className='my-2 border-gray-100 dark:border-gray-700/60' />
              </div>
            </div>
          </DialogTitle>

          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
