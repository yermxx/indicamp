import { FlyoutProvider } from '@/contexts/flyout-context';
import ProfileSidebar from '@/components/organism/profile-sidebar';
import { TermButton } from './(project-components)/term-button';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex mr-4 ml-4 my-8'>
        <span>
          <TermButton />
        </span>
        <span className=' flex-grow rounded-xl  bg-blue-500 bg-opacity-10'>
          {children}
        </span>
        <span>
          <FlyoutProvider>
            <ProfileSidebar />
          </FlyoutProvider>
        </span>
      </div>
    </>
  );
}
