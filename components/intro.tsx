import Link from 'next/link';
import SolidButton from './ui/solid-button';

export default function Intro() {
  const number = 1;
  const APPLY_SCHEDULE = `2025.02.01 ~ 2025.02.14`;

  return (
    <section className='relative bg-gradient-to-r from-sky-100 from-10% via-blue-400 to-lime-200 h-full w-full'>
      <div className='absolute inset-0 bg-noise01 opacity-10'></div>
      <h1 className='relative z-10 pt-28 text-4xl text-center font-["pretendard"] font-bold'>
        실무 프로젝트는
        <br />
        <strong className='text-mainblue'>indicamp</strong>에서 끝내자!
      </h1>

      <div className='pb-12 pt-12'>
        <div
          className='mx-auto max-w-3xl'
          data-aos='zoom-y-out'
          data-aos-delay={600}
        >
          <div className='relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]'>
            <div className='relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px]  after:w-[41px]'>
              <div className='absolute flex items-center justify-start gap-1 w-full'>
                <div className="before:content-[''] before:block before:h-2 before:w-2 before:rounded-full before:bg-red-500"></div>
                <div className="before:content-[''] before:block before:h-2 before:w-2 before:rounded-full before:bg-yellow-500"></div>
                <div className="before:content-[''] before:block before:h-2 before:w-2 before:rounded-full before:bg-green-500"></div>
              </div>
              <span className='text-[13px] font-medium text-white'>
                indicamp.com
              </span>
            </div>

            <div className='font-["pretendard"] text-base text-gray-500 [&_span]:opacity-0'>
              <span className='font-["Inter"] animate-[code-1_10s_infinite] text-gray-200'>
                $ cd indicamp
              </span>
              <br />
              <span className='font-["Inter"] animate-[code-2_10s_infinite] text-gray-200'>
                $ cat welcome.txt
              </span>
              <br />
              <br />
              <span className='animate-[code-3_10s_infinite] text-green-500'>
                &gt; 모집 일정
              </span>
              <br />
              <span className='animate-[code-4_10s_infinite] text-gray-200'>
                {`${APPLY_SCHEDULE} (2주간)`}
              </span>
              <br />
              <br />
              <span className='animate-[code-5_10s_infinite] text-green-500'>
                &gt; 참가 혜택
              </span>
              <br />
              <span className='animate-[code-6_10s_infinite] text-gray-200 whitespace-pre-line'>
                {`소수 정예 밀착 케어 (최대 정원 30명)
                100% 오프라인 진행 (쾌적한 강의실 무료 제공)
                8주 만에 기획부터 배포까지 전 직군이 함께하는 실무 프로젝트 완성!`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <h1 className='relative z-10 text-3xl text-center font-["pretendard"] font-bold m-10'>
        현재 <strong className='text-mainblue'>indicamp</strong> {number}기 모집
        중!
      </h1>
      <div className='flex relative z-10 justify-center mt-4 pb-20'>
        <Link href={'/register'}>
          <SolidButton
            text={`${number}기 참가 신청하러 가기 →`}
            type='button'
          />
        </Link>
      </div>
    </section>
  );
}
