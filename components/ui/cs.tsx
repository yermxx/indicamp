import Link from 'next/Link';

type csdata = { text: string };

export default function cs({ text }: csdata) {
  return (
    <div>
      <main className='max-w-6xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-4 text-center'>{text}</h2>
        <div className='flex justify-center items-center mb-4 space-x-12 text-lg text-blue-500'>
          <Link
            href='/cs/faq'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            FAQ
          </Link>
          <Link
            href='/cs/forum'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            공지사항
          </Link>
          <Link
            href='/cs/inquiry'
            className='hover:text-gray-500 hover:underline underline-offset-4'
          >
            1:1 문의 게시판
          </Link>
        </div>
      </main>
    </div>
  );
}
