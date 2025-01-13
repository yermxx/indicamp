import dahye from '@/public/images/home/challenge/dahye.png';
import jieun from '@/public/images/home/challenge/jieun.png';
import junho from '@/public/images/home/challenge/junho.png';
import minsu from '@/public/images/home/challenge/minsu.png';
import styles from '@/styles/bubble.module.css';
import Image from 'next/image';

const peopleData = [
  {
    id: 1,
    image: minsu,
    name: '민수씨',
    role: ['프론트엔드 개발자가', '되고싶은'],
    message:
      '남들과 똑같은 클론 코딩 말고 경쟁력 있는 포트폴리오 만들고 싶어요',
    isRight: false,
    bgColor: 'bg-[#d9d9d9]',
    textColor: 'text-black',
  },
  {
    id: 2,
    image: dahye,
    name: '다혜씨',
    role: ['신입 IT 디자이너를', '꿈꾸는'],
    message: '면접에서 강조하는 협업, 소통 경험 쌓고 싶어요',
    isRight: true,
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  },
  {
    id: 3,
    image: jieun,
    name: '지은씨',
    role: ['경력 2년차의', '백엔드 개발자'],
    message: '상사가 아닌 현업 멘토에게 코드 리뷰 받아보고 싶어요',
    isRight: false,
    bgColor: 'bg-[#d9d9d9]',
    textColor: 'text-black',
  },
  {
    id: 4,
    image: junho,
    name: '준호씨',
    role: ['PM 직무로 이직을', '준비하는'],
    message: '열정 있는 팀원들과 팀 프로젝트 하고 싶어요',
    isRight: true,
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
  },
];

export default function Challenge() {
  return (
    <section className='p-12 sm:p-20 md:p-16 lg:p-24'>
      {/* Section header */}
      <div className='text-center'>
        <h2 className='font-bold text-xl sm:text-3xl md:text-3xl leading-tight'>
          채용 혹한기에서 살아남기 위한 경쟁력 장착하기
          <br />
          <strong className='text-blue-500'>8주 완성 챌린지</strong>
        </h2>
      </div>
      {/* Contents */}
      <div className='flex items-center justify-center'>
        <div className='w-full md:w-[90%] lg:w-[1040px] pt-8 sm:pt-16 lg:pt-12 pb-8 sm:pb-12 my-8 sm:my-16 lg:my-24 bg-slate-100 rounded-lg'>
          <ul>
            {peopleData.map((item) => (
              <li
                key={item.id}
                className={`relative flex ${item.isRight ? 'justify-end' : ''} relative px-4 sm:px-12 lg:px-24 pt-16 sm:pt-20 lg:pt-28 mb-8 sm:mb-6 lg:mb-0`}
              >
                {/* Bubble */}
                <article
                  className={`flex absolute ${item.isRight ? 'right-[100px] sm:right-[160px] lg:right-[240px]' : 'left-[100px] sm:left-[160px] lg:left-[240px]'} top-10`}
                >
                  <blockquote
                    className={`${
                      item.id === 1
                        ? 'w-[200px] sm:w-[300px] md:w-[400px] lg:w-[660px]'
                        : 'w-[200px] sm:w-[300px] md:w-[400px] lg:w-[540px]'
                    } min-h-[50px] sm:min-h-[60px] ${item.bgColor} ${
                      item.isRight
                        ? styles.speechBubbleRight
                        : styles.speechBubbleLeft
                    } rounded-full justify-start items-center gap-2.5 inline-flex ${item.isRight ? 'shadow-[-3px_4px_4px_0_rgba(0,0,0,0.2)]' : 'shadow-[3px_4px_4px_0_rgba(0,0,0,0.2)]'}`}
                  >
                    <p
                      className={`w-full text-center ${item.textColor} text-sm sm:text-lg md:text-xl font-bold leading-tight font-['Pretendard']`}
                    >
                      {item.message}
                    </p>
                  </blockquote>
                </article>
                {/* People */}
                <div className='flex items-center flex-col'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] mb-2'
                  />
                  <p className='text-center font-bold text-base sm:text-lg'>
                    {item.role.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {item.role.length - 1 > idx && <br />}
                        &nbsp;
                      </span>
                    ))}
                    {item.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* CTA */}
      <div>
        <h2 className='text-center leading-tight lg:leading-normal font-bold text-xl sm:text-3xl'>
          여러분의 모든 고민, <br />
          <span className='bg-amber-300'>
            <strong className='text-blue-900'>indicamp</strong>와 함께라면 해결
            가능합니다!
          </span>
        </h2>
      </div>
    </section>
  );
}
