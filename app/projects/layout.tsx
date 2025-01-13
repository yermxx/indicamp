import { TermButton } from './(project-components)/term-button';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex mr-4 ml-4 mt-4'>
        <span>
          <TermButton />
        </span>
        <span className=' flex-grow rounded-xl  bg-blue-500 bg-opacity-10'>
          {children}
        </span>
      </div>
    </>
  );
}
