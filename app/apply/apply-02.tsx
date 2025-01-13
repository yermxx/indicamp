import Link from 'next/link';
import SolidButton from '@/components/ui/solid-button';

export default function ApplySecond() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <div className='relative md:flex md:p-20 items-center justify-center font-["pretendard"]'>
        {/* Content */}
        <div className='lg:w-2/5'>
          <div className='min-h-[100dvh] h-full flex flex-col after:flex-1'>
            <div className='mx-auto w-full px-4 py-12'>
              {/* form 3 */}
              <h1 className='text-2xl text-gray-800 dark:text-gray-100 font-bold mb-10'>
                <span className='text-indigo-900'>3. </span>
                지원 동기
              </h1>
              {/* Form */}
              <form>
                <div className='space-y-10'>
                  <div>
                    <label className='block text-md mb-1' htmlFor='motive'>
                      인디캠프에 지원하신 동기를 작성해주세요.
                      <span className='text-red-500'> *</span>
                    </label>
                    <textarea
                      id='motive'
                      className='form-textarea w-full h-32 p-2 border border-gray-300 rounded-md resize-none'
                      placeholder='지원 동기를 자유롭게 작성해주세요. (최대 500자)'
                      maxLength={530}
                    ></textarea>
                  </div>
                  <div>
                    <label className='block text-md mb-1' htmlFor='goal'>
                      인디캠프를 통해 얻고 싶은 것이 무엇인가요?
                      <span className='text-red-500'> *</span>
                    </label>
                    <textarea
                      id='goal'
                      className='form-textarea w-full h-32 p-2 border border-gray-300 rounded-md resize-none'
                      placeholder='본인이 이루고 싶은 목표 등을 작성해주세요. (최대 500자)'
                      maxLength={530}
                    ></textarea>
                  </div>
                  <div>
                    <label className='block text-md mb-1' htmlFor='wantproject'>
                      하고 싶은 프로젝트가 있다면 작성해주세요.
                      <span className='text-red-500'> *</span>
                      <p className='text-gray-400'>
                        (아직 없을 경우에는 없음으로 적어주셔도 됩니다.)
                      </p>
                    </label>
                    <textarea
                      id='wantproject'
                      className='form-textarea w-full h-32 p-2 border border-gray-300 rounded-md resize-none'
                      placeholder='프로젝트 아이디어를 자유롭게 작성해주세요. (최대 500자)'
                      maxLength={530}
                    ></textarea>
                  </div>
                  <hr />
                  {/* 4. 일정 및 비용안내 */}
                  <h1 className='text-2xl text-gray-800 dark:text-gray-100 font-bold my-10 '>
                    <span className='text-indigo-900'>4. </span>
                    일정 및 비용안내
                  </h1>
                  <div className='space-y-12'>
                    <div>
                      <h2 className='font-bold mb-4 text-xl'>
                        📅 주요 일정 안내
                      </h2>
                      <div className='bg-blue-100 rounded-2xl py-4 text-md'>
                        <ul className='mx-4 my-2'>
                          <li>▪️ 서류 합격 발표 | 2025.02.15</li>
                          <li>▪️ Pre-course & 팀 빌딩 | 2025.02.17-24</li>
                          <li>▪️ 최종 합격 발표 | 2025.02.29</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className='font-bold mb-4 text-xl'>
                        ✨ Pre-course 안내
                      </h2>
                      <ul>
                        <li>
                          ▪️ 서류 합격자 발표와 함께 상세 프로세스를
                          안내해드립니다.
                        </li>
                        <li>▪️ 팀 빌딩 결과가 최종 합격에 반영됩니다.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className='font-bold mb-4 text-xl'>
                        🚀 프로젝트 아이디어가 있다면?
                      </h2>
                      <ul className=''>
                        <li>
                          ▪️ Pre-course 기간 동안 아이디어를 구체화해주세요.
                        </li>
                        <li>
                          ▪️ 2월 23일까지 Project 페이지에 프로젝트 카드를
                          등록해주세요.
                        </li>
                      </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                      <h2 className='font-bold text-xl'>💡 참가 비용 안내</h2>
                      <div className='bg-pink-100 rounded-2xl p-4 text-md'>
                        ▪️ 정규 신청 : 200,000원
                      </div>
                      <p className='text-gray-400'>
                        ※ 최종 합격자분들께는 개별적으로 결제 상세 안내를 드릴
                        예정입니다.
                      </p>
                    </div>
                  </div>

                  <hr />
                </div>

                {/* 개인정보동의 */}
                <div className='space-y-10 mt-10'>
                  <h1 className='text-2xl text-gray-800 dark:text-gray-100 font-bold mb-10'>
                    <span className='text-indigo-900'>4. </span>
                    [필수] 개인정보 수집·이용 동의
                  </h1>

                  <div className='bg-gray-100 rounded-2xl p-4 text-md'>
                    <ol className='list-decimal list-inside text-gray-500 space-y-2'>
                      <li>
                        수집 및 이용 목적: 인디캠프 1기 참가자 모집 및 안내
                      </li>
                      <li>
                        수집하는 개인정보 항목: 이름, 직업, 휴대폰 번호, 이메일
                      </li>
                      <li>수집 및 이용 기간: 수집일부터 2년까지</li>
                      <li>
                        개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으나,
                        이 경우 프로젝트 참가에 제한될 수 있습니다.
                      </li>
                    </ol>
                  </div>

                  <label className='flex items-center text-gray-500'>
                    위 개인정보 수집 및 이용에 동의하십니까?
                    <span className='text-red-500 mr-8'> *</span>
                    <input
                      type='radio'
                      name='agreement'
                      className='form-radio'
                    />
                    <span className='text-md ml-2 mr-4 text-black'>동의함</span>
                    <input
                      type='radio'
                      name='agreement'
                      className='form-radio'
                    />
                    <span className='text-md mx-2 text-black'>동의 안함</span>
                  </label>

                  <p className='text-gray-400'>
                    By clicking submit you agree to our{' '}
                    <Link href='/' className='underline underline-offset-4'>
                      Terms of Service
                    </Link>{' '}
                    and Privacy Policy.
                  </p>
                </div>
              </form>

              {/* Footer */}
              <div className='pt-5 mt-20 '>
                <div className='flex justify-between'>
                  <Link
                    className='px-8 py-3 border border-blue-500 text-blue-500 font-bold text-md rounded-2xl hover:border-blue-300 hover:text-blue-300 font-["Pretendard"]'
                    href='/'
                  >
                    ← 이전 페이지 이동
                  </Link>
                  <Link
                    className='ml-3 whitespace-nowrap'
                    href='/apply/completed'
                  >
                    <SolidButton text='신청서 제출하기 →' type='submit' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
