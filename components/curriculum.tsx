import Link from 'next/link';
import SolidButton from './ui/solid-button';

export default function Curriculum() {
  const PROJECT_START_DATE = `2025.03.01`;
  const PROJECT_END_DATE = `2025.05.01`;
  const PROJECT_SCHEDULE = `${PROJECT_START_DATE}~${PROJECT_END_DATE}`;
  const APPLY_START = `2025.02.01`;
  const APPLY_END = `2025.02.14`;
  const APPLY_SCHEDULE = `${APPLY_START}~${APPLY_END}`;

  return (
    <div className='flex flex-col items-center bg-gray-100 w-screen text-center p-8 font-["pretendard"] '>
      <h1 className='font-bold m-20 sm:text-3xl md:text-3xl lg:text-4xl leading-tight'>
        <strong className='text-mainblue'>indicamp</strong>는 이렇게 진행돼요
      </h1>

      {/* 일정안내*/}
      <div className='flex flex-col m-6 p-10 bg-white items-start gap-4 rounded-xl w-max'>
        <div className='flex gap-4 items-center min-w-[400px] max-w-[600px]'>
          <div className='rounded-3xl font-bold border-blue-600 border text-blue-600 p-2 min-w-[100px] text-centerx'>
            교육 기간
          </div>
          <p className='font-bold text-xl'>{PROJECT_SCHEDULE} (8주)</p>
        </div>

        <div className='flex gap-4 items-center max-w-[600px]'>
          <div className='rounded-3xl font-bold border-blue-600 border text-blue-600 p-2 min-w-[100px] text-center'>
            모집 인원
          </div>
          <p className='font-bold text-xl'>35명</p>
        </div>

        <div className='flex gap-4 items-center min-w-[400px] max-w-[600px]'>
          <div className='rounded-3xl font-bold border-blue-600 border text-blue-600 p-2 min-w-[100px] text-center'>
            모집 기간
          </div>
          <p className='font-bold text-xl'>{APPLY_SCHEDULE} (2주)</p>
        </div>
      </div>

      {/* 상세일정 */}
      <h1 className='text-3xl font-bold mt-20 mb-10'>상세 일정 안내</h1>

      <div className='bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto my-10'>
        {/* 선발절차,교육일정 */}
        <div className='flex gap-72 items-center mb-6'>
          <div className='text-center'>
            <div className='bg-blue-500 text-white rounded-3xl px-4 py-2 font-bold min-w-[100px]'>
              선발 절차
            </div>
          </div>
          <div className='text-center'>
            <div className='bg-yellow-400 rounded-3xl px-4 py-2 font-bold min-w-[100px]'>
              교육 일정
            </div>
          </div>
        </div>

        <div className='relative'>
          {/* 점선 */}
          <div className='absolute top-4 transform -translate-y-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300 z-30'></div>
          <div className='flex justify-between items-center relative'>
            {/* 첫 번째 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2 relative z-20'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.02.15
              </p>
              <p className='text-base font-bold'>서류 발표</p>
            </div>

            {/* 두 번째 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-blue-200 rounded-full mx-auto mb-2 relative opacity-80 z-20'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.02.24
              </p>
              <p className='text-base font-bold text-red-400'>최종 합격</p>
            </div>

            {/* 세 번째 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-blue-300 rounded-full mx-auto mb-2 relative z-20'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.02.16 ~ 23
              </p>
              <p className='text-base font-bold'>Pre-course & 팀 빌딩</p>
            </div>

            {/* 네 번째 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-yellow-200 rounded-full mx-auto mb-2 relative z-20'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.02.29
              </p>
              <p className='text-base font-bold'>OT & 팀매칭</p>
            </div>

            {/* 다섯 번째 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-yellow-300 rounded-full mx-auto mb-2 relative z-20'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.03.01 ~ 05.01
              </p>
              <p className='text-base font-bold'>프로젝트 (8주)</p>
            </div>

            {/* 마지막 원 */}
            <div className='text-center'>
              <div className='w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 relative z-20 opacity-80'></div>
              <p className='text-base text-gray-500 font-semibold'>
                2025.05.01
              </p>
              <p className='text-base font-bold text-red-400'>
                프로젝트 발표 & 수료식
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end gap-8 m-10'>
        <p className='flex items-center font-bold text-xl'>
          더 자세한 커리큘럼이 궁금하다면?
        </p>
        <Link href={'/about'}>
          <SolidButton type='button' text='커리큘럼 보러가기 →' />
        </Link>
      </div>
    </div>
  );
}
