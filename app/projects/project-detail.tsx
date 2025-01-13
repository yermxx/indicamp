'use client';

import Involvers from '@/app/projects/involvers';
import UsersTabs from '@/app/projects/user-tabs';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectDetail() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = document.querySelector('[data-scrollable="true"]');
      if (scrollableDiv) {
        const { scrollTop, scrollHeight, clientHeight } = scrollableDiv;

        const bottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 1;
        setIsBottom(bottom);
      }
    };

    const scrollableDiv = document.querySelector('[data-scrollable="true"]');
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div
        data-scrollable='true'
        className='px-4 w-full h-[calc(100vh-350px)] overflow-y-auto
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-200
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-track]:rounded-full'
      >
        <div>
          <h2 className='text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-2'>
            프로젝트 내용
          </h2>
          <div className='space-y-6'>
            <h2>임시 데이터</h2>
            <p>
              There is so much happening in the AI space. Advances in the
              economic sectors have seen automated business practices rapidly
              increasing economic value. While the realm of the human sciences
              has used the power afforded by computational capabilities to solve
              many human based dilemmas. Even the art scene has adopted
              carefully selected ML applications to usher in the technological
              movement.
            </p>
            <p>
              Join us every second Wednesday as we host an open discussion about
              the amazing things happening in the world of AI and machine
              learning. Feel free to share your experiences, ask questions,
              ponder the possibilities, or just listen as we explore new topics
              and revisit old ones.
            </p>
          </div>
        </div>
        <hr className='my-6 border-t border-gray-100 dark:border-gray-700/60' />
        <div>
          <h2 className='text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-2'>
            Things You Might Do
          </h2>
          <div className='space-y-6'>
            <p>
              We are a fast-growing, and remote-first company, so you&#39;ll
              likely get experience on many different projects across the
              organization. That said, here are some things you&#39;ll probably
              do:
            </p>
            <ul className='list-disc list-inside space-y-1'>
              <li>Give back to the community via open source and blog posts</li>
              <li>
                Travel and meet great people- as part of our remote-first
                lifestyle, it&#39;s important that we come together as needed to
                work together, meet each other in person and have fun /
                together. Please keep that in mind when you apply.
              </li>
              <li>
                {' '}
                Teach and be taught: Modus creates active teams that work in
                internal and external projects together, giving opportunities to
                stay relevant with the latest technologies and learning from
                experts worldwide
              </li>
              <li>
                Interact directly with internal and external clients to
                represent Modus and its values
              </li>
            </ul>
          </div>
        </div>
        {/* Things You Might Do */}
        <hr className='my-6 border-t border-gray-100 dark:border-gray-700/60' />
        참고링크
        <div className='border border-slate-100 p-4 rounded-md'>
          <div>
            <Link target='_blank' href='http://www.naver.com'>
              https://www.naver.com
            </Link>
          </div>
        </div>
        <hr className='my-6 border-t border-gray-100 dark:border-gray-700/60' />
        <UsersTabs />
        <hr className='my-6 border-t border-gray-100 dark:border-gray-700/60' />
        <div className='flex justify-between'>
          <Involvers title='기획자' />
          <Involvers title='디자이너' />
          <Involvers title='개발자' />
        </div>
      </div>

      <button
        className={`
    sticky 
    bottom-0 
    rounded-md 
    text-md 
    text-white 
    font-bold 
    bg-indigo-400 
    w-full 
    mt-10 
    h-14 
    transition-all 
    duration-200
    hover:bg-indigo-500
    ${isBottom ? 'opacity-100' : 'opacity-30 hover:opacity-100'}
  `}
      >
        참여하기
      </button>
    </div>
  );
}
