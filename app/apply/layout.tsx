import ApplyPage from './page';

export default function Layout() {
  return (
    <>
      {/* Header */}
      <header>
        <div className='w-full h-96 relative'>
          <div className='w-full h-96 absolute inset-0 bg-gradient-to-tr from-sky-300 to-white'></div>
          <div className='w-full h-full absolute inset-0 bg-gradient-to-tl from-amber-500 to-lime-500 opacity-60 mix-blend-multiply'></div>
          <div className='w-full h-full absolute inset-0 bg-gradient-to-bl from-violet-500 to-white opacity-80 mix-blend-overlay'></div>
          <div className='absolute inset-x-0 bottom-0 px-8 md:px-24 pb-8 z-10'>
            <div className='relative items-start justify-end inline-flex'>
              <h1>
                <span className='text-blue-900 text-3xl md:text-5xl font-extrabold'>
                  indicamp
                </span>
                <span className='text-gray-800 text-3xl md:text-5xl font-extrabold'>
                  {' '}
                  1기 신청하기
                </span>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ApplyPage />
      </main>
    </>
  );
}
