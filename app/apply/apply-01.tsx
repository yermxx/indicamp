import { ChevronDown } from 'lucide-react';
import GhostButton from '@/components/ui/ghost-button';
import { Input } from '@/components/ui/input';

export default function ApplyFirst() {
  return (
    <main className='bg-white dark:bg-gray-900'>
      <div className='relative md:flex items-center justify-center md:p-20 font-["pretendard"]'>
        {/* Content */}
        <div className='lg:w-1/3'>
          <div className='min-h-[100dvh] h-full flex flex-col after:flex-1'>
            {/* 1st Form */}
            <div className='mx-auto w-full px-4 py-12'>
              <h1 className='text-2xl text-gray-800 dark:text-gray-100 font-bold mb-10'>
                <span className='text-indigo-900'>1.</span> 인적 사항
              </h1>
              <form>
                <div className='space-y-10'>
                  {/* Name */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='name'
                    >
                      이름 (실명) <span className='text-red-500'>*</span>
                    </label>
                    <Input
                      id='name'
                      className='form-input w-full'
                      type='text'
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='email'
                    >
                      이메일 <span className='text-red-500'>*</span>
                    </label>
                    <Input
                      id='email'
                      className='form-input w-full'
                      type='email'
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='phone'
                    >
                      연락처 <span className='text-red-500'>*</span>
                    </label>
                    <Input
                      id='phone'
                      className='form-input w-full'
                      type='phone'
                    />
                  </div>
                  {/* Residence */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='residence'
                    >
                      거주 지역 <span className='text-red-500'>*</span>
                      <p className='text-xs text-red-500 py-1'>
                        * indicamp 1기는 매주 토요일 서울에서 진행됩니다. <br />
                        지방 거주자는 매주 오프라인 참석이 가능한 분에 한해
                        선발될 예정입니다.
                      </p>
                    </label>
                    <Input
                      id='residence'
                      className='form-input w-full'
                      type='text'
                    />
                  </div>
                  {/* Gender */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='gender'
                    >
                      성별 <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative w-full'>
                      <select
                        id='gender'
                        className='appearance-none p-2 w-full flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                      >
                        <option value='male'>남자</option>
                        <option value='female'>여자</option>
                      </select>
                      <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none h-4 w-4' />
                    </div>
                  </div>
                  {/* Role */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='role'
                    >
                      직업 <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative w-full'>
                      <select
                        id='role'
                        className='appearance-none p-2 w-full flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                      >
                        <option value='student'>대학생</option>
                        <option value='worker'>직장인</option>
                        <option value='job-seeker'>취업 준비생</option>
                        <option value='etc'>기타</option>
                      </select>
                      <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none h-4 w-4' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <hr />
            {/* 2nd Form */}
            <div className='mx-auto w-full px-4 py-12'>
              <h1 className='text-2xl text-gray-800 dark:text-gray-100 font-bold mb-10'>
                <span className='text-indigo-900'>2.</span>직군 선택
              </h1>
              <form>
                <div className='space-y-10'>
                  {/* Position */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='position'
                    >
                      희망 직군 <span className='text-red-500'>*</span>
                    </label>
                    <div className='relative w-full'>
                      <select
                        id='position'
                        className='appearance-none p-2 w-full flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                      >
                        <option value='frontend'>프론트엔드 개발자</option>
                        <option value='backend'>백엔드 개발자</option>
                        <option value='fullstack'>풀스택 개발자</option>
                        <option value='designer'>UX/UI 디자이너</option>
                        <option value='pm'>프로젝트/프로덕트 매니저</option>
                      </select>
                      <ChevronDown className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none h-4 w-4' />
                    </div>
                  </div>
                  {/* Experience */}
                  <div>
                    <label className='text-lg font-normal' htmlFor='experience'>
                      직군 경험
                      <span className='text-gray-500'> (optional)</span>
                      <p className='text-xs text-gray-500 italic py-1'>
                        ex) 실무 경험 / 독학 / 대외 활동 / 전공 등
                      </p>
                    </label>
                    <textarea
                      id='experience'
                      placeholder='지금까지 해당 직군과 관련하여 어떤 경험을 해오셨는지 자유롭게 작성해 주세요. (최대 500자까지 입력 가능)'
                      maxLength={500}
                      className='w-full min-h-[100px] rounded-md border border-input px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-gray-500'
                    />
                  </div>
                  {/* Portfolio */}
                  <div>
                    <label
                      className='block text-lg font-normal mb-1'
                      htmlFor='portfolio'
                    >
                      포트폴리오 첨부{' '}
                      <span className='text-gray-500'>(optional)</span>
                    </label>
                    <div className='flex items-center justify-center gap-3'>
                      <Input
                        id='portfolio'
                        className='form-input w-full'
                        type='text'
                        placeholder='포트폴리오 URL을 입력해 주세요 (ex) github.com/indicamp)'
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Next Page */}
          <div className='flex justify-end px-4 py-16 md:py-8'>
            <GhostButton type='button' text='다음 페이지 이동 →' />
          </div>
        </div>
      </div>
    </main>
  );
}
