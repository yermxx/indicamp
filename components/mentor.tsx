import kakaoEnter from '@/public/images/home/mentor/Kakao_enterprise_ci.png';
import line from '@/public/images/home/mentor/LINE_ci.png';
import toss from '@/public/images/home/mentor/Toss_ci.png';
import man2 from '@/public/images/home/mentor/man2.png';
import man from '@/public/images/home/mentor/man.png';
import senior from '@/public/images/home/mentor/senior_coding.png';
import woman from '@/public/images/home/mentor/woman.png';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SolidButton from './ui/solid-button';

export default function Mentor() {
  return (
    <section>
      <div className='flex items-center justify-center p-24'>
        <div className='font-["Pretendard"]'>
          {/* Section Title */}
          <h2 className='text-3xl text-center font-bold mb-24 leading-normal'>
            특별한 여정을 함께할 <br />
            <div className='inline-flex items-center gap-2'>
              <span className='inline-flex items-center'>
                <strong className='text-indigo-900'>indicamp</strong>의 멘토를
                소개합니다
                <Sparkles className='ml-1 w-8 h-8 fill-amber-400' />
              </span>
            </div>
          </h2>
          {/* Introduce */}
          <div className='flex gap-6 justify-between mb-24 bg-blue-100 bg-opacity-50 rounded-2xl p-16 shadow-inner'>
            <h2 className='font-bold text-2xl inline-flex'>멘토 소개</h2>
            <div className='w-auto flex items-center justify-center border border-gray-200 rounded-xl p-8 bg-white shadow-md'>
              <div className='flex flex-col justify-center pr-10'>
                <Image
                  src={senior}
                  alt='전성호 멘토님'
                  width={200}
                  className='rounded-3xl mb-6'
                />
                <p className='text-center font-bold text-indigo-900 text-xl'>
                  전성호 멘토님
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
                    <li className='text-xl mb-2'>
                      現 유튜브 시니어 코딩 채널 운영
                    </li>
                    <li className='text-xl mb-2'>
                      前 다음 커뮤니케이션, 카카오 개발 팀장
                    </li>
                  </ul>
                </div>
                <div className='flex gap-8 items-center justify-between'>
                  <p className='text-base text-gray-500 font-semibold'>
                    멘토님의 강의 스타일이 궁금하다면?
                  </p>
                  <div>
                    <Link
                      href='https://www.youtube.com/@SeniorCoding'
                      target='_blank'
                    >
                      <SolidButton
                        type='button'
                        text='유튜브 채널 구경가기 →'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Review */}
          <section className='flex justify-between mb-24 gap-6 bg-violet-100 bg-opacity-50 p-16 rounded-2xl shadow-inner'>
            <div className='flex flex-col'>
              <h2 className='font-bold text-2xl mb-12'>
                멘토님과 <br />
                함께한 성장 스토리
              </h2>
              <Link href='/about'>
                <SolidButton type='button' text='후기 더 보러 가기 →' />
              </Link>
            </div>
            <div className='w-auto'>
              <div>
                {/* Items */}
                <div className='max-w-md sm:max-w-3xl mx-auto flex items-center justify-center flex-col sm:flex-row gap-6 lg:gap-4'>
                  {/* 1st Testimonial */}
                  <article
                    className='border border-gray-300 rounded-lg flex flex-col items-center text-center px-8 py-12 bg-white shadow-md sm:w-[340px] h-[440px]'
                    data-aos='fade-up'
                  >
                    <header className='mb-4'>
                      <Image
                        className='rounded-full inline-flex'
                        src={woman}
                        width={40}
                        height={40}
                        alt='Testimonial 01'
                      />
                      {/* Stars */}
                      <div className='mt-4'>
                        <div className='flex space-x-1'>
                          <button>
                            <span className='sr-only'>1 star</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>2 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>3 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>4 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>5 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </header>
                    <div className='grow mb-4'>
                      <p className='text-slate-500 text-sm'>
                        &quot;성호님의 풀스택 수업은, 특정 기술이 무엇을
                        해결하기 위해 등장했는지부터 이를 활용하는 방법까지 깊고
                        방대한 지식을 배울 수 있습니다. 해당 과정을 수료하고 난
                        후 그 전과 비교해 성장한 자신을 발견할 수 있을
                        것입니다.&quot;
                      </p>
                    </div>
                    <footer className='text-sm text-slate-500 font-medium'>
                      <span className='text-black'>
                        김은정{' '}
                        <span className='text-indigo-500'>
                          / 새싹 풀스택 교육 수료생{' '}
                        </span>
                      </span>
                    </footer>
                  </article>
                  {/* 2nd Testimonial */}
                  <article
                    className='border border-gray-300 rounded-lg flex flex-col items-center text-center px-8 py-12 bg-white shadow-md sm:w-[340px] h-[440px]'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    <header className='mb-4'>
                      <Image
                        className='rounded-full inline-flex'
                        src={man}
                        width={40}
                        height={40}
                        alt='Testimonial 02'
                      />
                      {/* Stars */}
                      <div className='mt-4'>
                        <div className='flex space-x-1'>
                          <button>
                            <span className='sr-only'>1 star</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>2 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>3 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>4 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>5 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </header>
                    <div className='grow mb-4'>
                      <p className='text-slate-500 text-sm'>
                        &quot;국비지원 수업도 이전에 들어 보았지만, 수업과
                        매니징이 이렇게까지 좋은 적은 처음이었던 것 같습니다.
                        공장처럼 찍어내는 방식이 아닌, 본질을 스스로 생각해보고
                        더 좋은 개발자가 될 수 있는 토대를 다지는 수업과,
                        학생들을 세심하게 케어해주시는 멘토님들의 노력이 더해진
                        훌륭한 강의였다고 생각합니다.&quot;
                      </p>
                    </div>
                    <footer className='text-sm text-slate-500 font-medium'>
                      <span className='text-black'>
                        이기훈{' '}
                        <span className='text-indigo-500'>
                          / 새싹 풀스택 교육 수료생{' '}
                        </span>
                      </span>
                    </footer>
                  </article>
                  {/* 3rd Testimonial */}
                  <article
                    className='border border-gray-300 rounded-lg flex flex-col items-center text-center px-8 py-12 bg-white shadow-md sm:w-[340px] h-[440px]'
                    data-aos='fade-up'
                    data-aos-delay='400'
                  >
                    <header className='mb-4'>
                      <Image
                        className='rounded-full inline-flex'
                        src={man2}
                        width={40}
                        height={40}
                        alt='Testimonial 03'
                      />
                      {/* Stars */}
                      <div className='mt-4'>
                        <div className='flex space-x-1'>
                          <button>
                            <span className='sr-only'>1 star</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>2 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>3 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>4 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                          <button>
                            <span className='sr-only'>5 stars</span>
                            <svg
                              className='w-4 h-4 fill-amber-400'
                              viewBox='0 0 16 16'
                            >
                              <path d='M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z' />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </header>
                    <div className='grow mb-4'>
                      <p className='text-slate-500 text-sm'>
                        &quot;본질, 성호님은 본질 그 자체입니다. 너무나도 많은
                        부트캠프가 범람하는 지금, 어떤 과정을 들을지 고민
                        많으시리라 생각합니다. 저 역시 많은 고민이 있었지만,
                        결국 기본, 본질 같은 단어를 떠올렸기에 선택하였습니다.
                        인간이 아닌 AI와 경쟁해야 하는 시대에 개발자가 되려고
                        하시는 분들에게 강력 추천합니다.&quot;
                      </p>
                    </div>
                    <footer className='text-sm text-slate-500 font-medium'>
                      <span className='text-black'>
                        한승범{' '}
                        <span className='text-indigo-500'>
                          / 새싹 풀스택 교육 수료생{' '}
                        </span>
                      </span>
                    </footer>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <div className='flex items-center justify-center h-[400px] bg-stone-100 bg-opacity-90 rounded-2xl p-16 shadow-inner'>
            <div>
              <h2 className='font-bold text-2xl mb-12'>
                이밖에도 대기업 출신의 개발 멘토들이
                <br /> 여러분을 기다리고 있어요!
              </h2>
              <Link href='/about'>
                <SolidButton type='button' text='멘토 자세히 보러 가기 →' />
              </Link>
            </div>
            <div className='w-[700px] relative mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center'>
                <div className='relative flex justify-center sm:left-48 sm:-top-10'>
                  <div className='animate-[breath_7s_ease-in-out_3.5s_infinite_both]'>
                    <div
                      className='flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl shadow-black/[0.05] 
      before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-lime-800/5 
      before:bg-gradient-to-b before:from-lime-200/60 before:to-transparent 
      before:[mask-image:linear-gradient(to_bottom,black,transparent)]'
                    >
                      <Image
                        className='relative'
                        src={line}
                        width={50}
                        height={50}
                        alt='라인'
                      />
                    </div>
                  </div>
                </div>
                <div className='relative flex justify-center sm:left-48 sm:bottom-20'>
                  <div className='animate-[breath_6s_ease-in-out_1.5s_infinite_both]'>
                    <div
                      className='flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-xl shadow-black/[0.05] 
      before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-blue-800/5 
      before:bg-gradient-to-b before:from-blue-200/60 before:to-transparent 
      before:[mask-image:linear-gradient(to_bottom,black,transparent)]'
                    >
                      <Image
                        className='relative'
                        src={toss}
                        width={100}
                        height={100}
                        alt='토스'
                      />
                    </div>
                  </div>
                </div>
                <div className='relative flex justify-center sm:-left-36 sm:-bottom-20'>
                  <div className='animate-[breath_6s_ease-in-out_2.5s_infinite_both]'>
                    <div
                      className='flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-xl shadow-black/[0.05] 
      before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-amber-800/5 
      before:bg-gradient-to-b before:from-amber-200/60 before:to-transparent 
      before:[mask-image:linear-gradient(to_bottom,black,transparent)]'
                    >
                      <Image
                        className='relative'
                        src={kakaoEnter}
                        width={90}
                        height={25}
                        alt='카카오엔터프라이즈'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
