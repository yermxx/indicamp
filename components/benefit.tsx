import PlanetOverlayImg from '@/public/home/benefit/planet-overlay.svg';
import PlanetImg from '@/public/home/benefit/planet.png';
import member1 from '@/public/home/benefit/team-member-01.jpg';
import member2 from '@/public/home/benefit/team-member-02.jpg';
import member3 from '@/public/home/benefit/team-member-03.jpg';
import member4 from '@/public/home/benefit/team-member-04.jpg';
import {
  ChartColumn,
  Rocket,
  Server,
  ThumbsUp,
  Trophy,
  Users,
  VideoIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SolidButton from './ui/solid-button';

export default function Benefit() {
  const planetDatas = [
    {
      image: member1,
      roll: '프론트엔드 개발자',
      style:
        'w-[160px] sm:w-[253px] -left-24 top-8 sm:top-16 animate-[float_4s_ease-in-out_infinite_both] opacity-70',
    },
    {
      image: member2,
      roll: '프로덕트/프로젝트 매니저',
      style:
        'w-[180px] sm:w-[241px] left-32 sm:left-80 top-2 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30',
    },
    {
      image: member3,
      roll: 'UX/UI 디자이너',
      style:
        'w-[160px] sm:w-[243px] -left-20 sm:-left-20 bottom-8 sm:bottom-24 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25',
    },
    {
      image: member4,
      roll: '백엔드 개발자',
      style:
        'w-[160px]  sm:w-[251px] sm:h-[56px] bottom-20 sm:bottom-32 left-36 sm:left-64 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80',
    },
  ];

  const courseBenefits = [
    {
      id: 1,
      icon: VideoIcon,
      title: '자체 제작 강의 무제한 제공',
      description: [
        '최신 개발 트렌드를 반영한 커리큘럼으로',
        '원하는 만큼 수강할 수 있어요.',
      ],
    },
    {
      id: 2,
      icon: Users,
      title: '오프라인 장소 제공',
      description: [
        '코치진이 상주하는 오프라인 장소를',
        '제공함으로써 편하게 공부할 수 있어요.',
      ],
    },
    {
      id: 3,
      icon: ThumbsUp,
      title: '팀별 밀착 코드 리뷰',
      description: [
        '주 1회 현업 개발자 멘토의 코드 리뷰로',
        '실력 향상을 도와드려요.',
      ],
    },
  ];

  const completionBenefits = [
    {
      id: 1,
      icon: Server,
      title: '서버 비용 전액 지원',
      description: [
        '8주동안 프로젝트를 완주한 팀에게는',
        '수료 이후에도 포트폴리오로 이용 가능한',
        '무료 웹 호스팅을 지원해요.',
      ],
    },
    {
      id: 2,
      icon: ChartColumn,
      title: '데일리 성장 트래킹 시스템',
      description: [
        '현업 멘토의 맞춤형 성장 가이드와',
        '팀원들의 협업 피드백으로',
        '균형 잡힌 역량을 키워갈 수 있어요.',
      ],
    },
    {
      id: 3,
      icon: Trophy,
      title: "Champion's Table 제공",
      description: [
        '1등 팀만을 위한 특별한 기회!',
        '현직 개발자들과 함께하는 식사 자리에서',
        '새로운 인사이트를 얻어가세요.',
      ],
    },
  ];

  return (
    <section className='relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 font-["pretendard"]'>
      <div className='mx-auto max-w-6xl py-20 px-4 md:px-6'>
        <div className='py-16 md:py-12 lg:py-8'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl text-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200'>
              지금 <strong className='text-blue-500'>Indicamp</strong>에
              합류하면
              <br /> 받을 수 있는 혜택
            </h2>
          </div>
          {/* Planet */}
          <div className='py-24 md:py-28' data-aos='zoom-y-out'>
            <div className='text-center'>
              <div className='relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]'>
                <Image
                  className='rounded-full bg-gray-900 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mb-3'
                  src={PlanetImg}
                  alt='Planet'
                />
                <div className='pointer-events-none' aria-hidden='true'>
                  <Image
                    className='absolute -right-64 -top-20 z-10 max-w-none w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mb-3'
                    src={PlanetOverlayImg}
                    alt='Planet decoration'
                  />
                  <ul>
                    {planetDatas.map((data, idx) => (
                      <li key={idx}>
                        <div
                          className={`p-4 flex justify-between items-center transition-opacity duration-500 bg-slate-700 rounded-xl z-10 absolute h-[40px] sm:h-[56px] ${data.style}`}
                        >
                          <div className='flex justify-between items-center gap-3'>
                            <Image
                              className='rounded-full'
                              src={data.image}
                              alt='data.image'
                              width={24}
                              height={24}
                            />
                            <p className='text-xs sm:text-lg text-white font-bold'>
                              {data.roll}
                            </p>
                          </div>
                          <div>
                            <Rocket size={16} className='text-blue-500' />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className='mb-32'>
            <div className='flex flex-col mb-24'>
              <h3 className='text-2xl font-bold text-white mb-8 pl-12'>
                1. 수강 혜택
              </h3>
              <div className='grid gap-12 sm:gap-0 sm:grid-cols-3 px-12 sm:px-0'>
                {courseBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <article
                      className={`col-span-1 ${benefit.id > 1 && 'sm:border-l sm:border-l-gray-700'} h-24 flex flex-col items-start sm:items-center justify-center`}
                    >
                      <div className='w-full sm:w-auto text-left border border-gray-500 rounded-lg px-8 py-4 sm:p-0 sm:border-none'>
                        <h3 className='mb-2 flex items-center space-x-2 text-xl font-bold text-gray-200'>
                          <Icon size={16} className='text-blue-500' />
                          <span>{benefit.title}</span>
                        </h3>
                        <span className='text-base text-gray-400'>
                          {benefit.description.map((line, i) => (
                            <p key={i}>
                              {line}
                              {benefit.description.length - 1 > i && <br />}
                            </p>
                          ))}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-2xl font-bold text-white mb-12 sm:mb-8 pl-12'>
                2. 완주 혜택
              </h3>
              <div className='grid gap-20 sm:gap-0 sm:grid-cols-3 px-12 sm:px-0'>
                {completionBenefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <article
                      className={`col-span-1 ${benefit.id > 1 && 'sm:border-l sm:border-l-gray-700'} h-24 flex flex-col items-start sm:items-center justify-center`}
                    >
                      <div className='w-full sm:w-auto text-left border border-gray-500 rounded-lg px-8 py-4 sm:p-0 sm:border-none'>
                        <h3 className='mb-2 flex items-center space-x-2 text-xl font-bold text-gray-200'>
                          <Icon size={16} className='text-blue-500' />
                          <span>{benefit.title}</span>
                        </h3>
                        <span className='text-base text-gray-400'>
                          {benefit.description.map((line, i) => (
                            <p key={i}>
                              {line}
                              {benefit.description.length - 1 > i && <br />}
                            </p>
                          ))}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className='flex flex-col text-center'>
            <h2 className='text-xl font-bold text-gray-200 mb-2'>
              더 많은 혜택이 궁금하다면?
            </h2>
            <Link href='/about' className='flex justify-center'>
              <SolidButton text='혜택 보러 가기 ->' type='button' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
