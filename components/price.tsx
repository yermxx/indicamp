import Image from 'next/image';
import Link from 'next/link';
import SolidButton from './ui/solid-button';

export default function Price() {
  return (
    <section className='relative flex flex-col items-center font-["pretendard"] bgimg'>
      {/* <Image
        src='/images/glow-top.svg'
        alt=''
        width={`2146`}
        height={`780`}
        className='absolute top-44 w-[2146px]x h-[780px]x'
      /> */}
      <h1 className='p-4 text-3xl font-bold m-20'>
        투자하세요, 당신의 미래에 🚀
      </h1>

      <div
        className='group relative flex flex-col h-full p-6 rounded-lg bg-gradient-to-b from-lime-50 to-emerald-50 m-6 shadow-2xl shadow-gray-400 overflow-hidden'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <div className='absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine' />

        <div className='mb-6'>
          <div className='text-xl font-bold mb-1'>🌱 정규 신청 시</div>
          <div className='text-3xl font-bold mb-1 line-through text-gray-200'>
            <span className='text-xl'></span>300,000
          </div>
          <div className=' text-indigo-500 font-bold inline-flex items-baseline mb-2'>
            <span className='text-5xl'>
              200<span className='text-3xl'>,</span>000
            </span>
            <span>원</span>
          </div>
          <div className='text-gray-500 mb-6'>
            지금 신청 시 원래 가격에서 30% 이상 할인된 가격에 등록할 수 있어요!
          </div>
        </div>
        <div className='font-bold mb-4'>
          등록시 아래 혜택을 모두 받을 수 있어요:
        </div>
        <ul className='text-gray-500 space-y-3 grow'>
          <li className='flex items-center'>
            <svg
              className='w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0'
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
            </svg>
            <span>오프라인 캠퍼스 상시 개방</span>
          </li>
          <li className='flex items-center'>
            <svg
              className='w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0'
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
            </svg>
            <span>멘토의 밀착 피드백</span>
          </li>
          <li className='flex items-center'>
            <svg
              className='w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0'
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
            </svg>
            <span>빅테크 출신 현업 코치진 참여</span>
          </li>
          <li className='flex items-center'>
            <svg
              className='w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0'
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
            </svg>
            <span>최신 문법 반영 강의 무제한 수강</span>
          </li>
        </ul>
        <Link href='/apply' className='flex justify-end mt-10'>
          <SolidButton type='button' text='신청하러 가기 →' />
        </Link>
      </div>

      <div className='flex m-8 gap-12 font-bold z-10'>
        <p>
          이번 기수에 참여가 어렵다면?
          <br />
          다음 기수 모집 일정을 가장 먼저 받아보세요!
        </p>
        <Link href='/'>
          <SolidButton type='button' text='알림 신청하기 →' />
        </Link>
      </div>
    </section>
  );
}
