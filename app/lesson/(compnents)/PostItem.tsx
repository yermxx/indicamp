'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type PropsType = {
  data: {
    category: string;
    title: string;
    content: string;
    titleImg: string;
    lessonNumber: number;
  };
};

export default function PostItem({
  data: { category, title, content, titleImg, lessonNumber },
}: PropsType) {
  const searchParams = useSearchParams();
  const getCategory = searchParams.get('category') ?? 'All';
  const isHidden = getCategory === 'All' ? false : getCategory !== category;
  return (
    <article
      className={`flex h-full flex-col transition-opacity ${isHidden ? 'pointer-events-none opacity-15' : ''}`}
    >
      <header>
        <Link
          className='group relative mb-6 block overflow-hidden rounded-2xl border border-gray-800/80 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/50 before:to-indigo-500 before:opacity-50'
          href={`/lesson/${lessonNumber}`}
          tabIndex={-1}
        >
          <Image
            className='aspect-[101/64] w-full object-cover opacity-70 grayscalex transition ease-out group-hover:scale-[1.02] group-hover:opacity-100 group-hover:grayscale-[20%]x'
            src={titleImg}
            width={347}
            height={220}
            alt={title}
          />
        </Link>
        <div className='mb-3'>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <a
                className='btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60'
                href='#0'
              >
                <span className='bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent'>
                  {category}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <h3 className='mb-2 font-nacelle text-lg font-semibold'>
          <Link
            className='text-gray-200 transition hover:text-white'
            href={`/lesson/${lessonNumber}`}
          >
            {title}
          </Link>
        </h3>
      </header>
      <footer className='flex items-center gap-3'>
        <div className='text-sm font-medium text-gray-200'>{content}</div>
      </footer>
    </article>
  );
}
