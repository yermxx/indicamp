export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex mr-4 ml-4 mt-4'>
        <span>
          <div className='border-2 pr-3 pl-3 pt-2 pb-2'>
            <h3 className='text-lg font-bold'>term</h3>
          </div>
          <div className='border-2 pr-3 pl-3 pt-2 pb-2'>
            <h3 className='text-lg font-bold'>term2</h3>
          </div>
        </span>
        <span className='flex-grow border-4'>{children}</span>
      </div>
    </>
  );
}
