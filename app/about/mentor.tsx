import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import SolidButton from '@/components/ui/solid-button';

type Mentor = {
  profileimg: StaticImageData;
  name: string;
  youtube?: string;
};

export default function AboutMentor({ mentor }: { mentor: Mentor }) {
  return (
    <div className='flex gap-6 justify-between mb-24 bg-blue-100 bg-opacity-50 rounded-2xl p-16 shadow-inner'>
      <h2 className='font-bold text-2xl inline-flex'>멘토 소개</h2>
      <div className='w-auto flex items-center justify-center border border-gray-200 rounded-xl p-8 bg-white shadow-md'>
        <div className='flex flex-col justify-center pr-10'>
          <Image
            src={mentor.profileimg}
            alt={mentor.name}
            width={200}
            className='rounded-3xl mb-6'
          />
          <p className='text-center font-bold text-indigo-900 text-xl'>
            {mentor.name} 멘토님
          </p>
        </div>
        <div className='pl-10 border-l border-l-gray-400'>
          <strong className='font-bold text-2xl bg-blue-200'>
            &quot;여러분의 도전을 실력으로 만들어드리겠습니다!&quot;
          </strong>
          <div className='flex gap-8 py-6'>
            <h3 className='text-xl font-bold underline underline-offset-4'>
              주요 경력
            </h3>
            <ul className='list-inside list-disc'>
              <li className='text-xl mb-2'>現 인디플렉스(주) 대표이사</li>
              <li className='text-xl mb-2'>現 유튜브 시니어 코딩 채널 운영</li>
              <li className='text-xl mb-2'>
                前 다음 커뮤니케이션, 카카오 개발 팀장
              </li>
            </ul>
          </div>

          {mentor.youtube && (
            <div className='flex gap-8 items-center justify-between'>
              <p className='text-base text-gray-500 font-semibold'>
                멘토님의 강의 스타일이 궁금하다면?
              </p>
              <div>
                <Link href={mentor.youtube} target='_blank'>
                  <SolidButton type='button' text='유튜브 채널 구경가기 →' />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
