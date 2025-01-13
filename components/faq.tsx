import Link from 'next/link';
import Accordion from './ui/accordion';
import SolidButton from './ui/solid-button';

export default function Faq() {
  const terms = [
    {
      title: 'Q. 참가 자격이 어떻게 되나요?',
      text: [
        '인디캠프는 단기간 실무 역량 향상을 위한 프로그램으로, 8주 동안 몰입해 참여할 의지가 강하신 분들이라면',
        '학생, 직장인, 취준생 등 누구나 상관 없이 지원 가능합니다.',
      ],
      active: false,
    },
    {
      title: 'Q. 수업 일정과 오프라인 참석은 어떻게 되나요?',
      text: [
        '8주 동안 매주 토요일 오전 9시부터 오후 6시까지 프로젝트에 몰입하는 코어 타임이 운영됩니다.',
        '여러분의 일정에 맞춰 자유롭게 스터디나 프로젝트 작업을 진행하실 수 있어요.',
        '평일 학습 시 공간을 제공해드리며, 멘토진들도 항상 상주하고 있어 언제든 도움을 받으실 수 있습니다.',
      ],
      active: false,
    },
    {
      title: 'Q. 교육 비용은 어떻게 되나요?',
      text: [
        '교육 비용은 30만원이며, 인터넷 강의/프로젝트 멘토링/학습 공간 제공 등 모든 프로그램 비용이 포함되어 있습니다.',
        '결제는 무통장 입금으로 진행될 예정이예요.',
      ],
      active: false,
    },
    {
      title: 'Q. (개발 직군) 코딩 경험이 전혀 없어도 수강할 수 있나요?',
      text: [
        '본 프로그램은 실무 프로젝트를 직접 수행하는 부트캠프인 만큼, 개발에 대한 기본적인 이해도가 필요합니다.',
        '',
        '아래에 해당되는 분들에게 추천드려요 :',
        '- 기본적인 웹 개발 문법을 알고 계신 분',
        '- 간단한 웹 페이지를 혼자 만들어보신 경험이 있는 분',
        '- 부트캠프를 통해 실무 역량을 키우고 싶으신 분',
        '',
        '프로그램 시작 전 개인 학습을 통해 기본기를 갖추시면 프로젝트 수행 시 더 큰 학습 효과를 얻으실 수 있습니다.',
      ],
      active: false,
    },
  ];
  return (
    <section className='flex items-center justify-center px-12 py-28 font-["pretendard"]'>
      <div className='sm:w-1/2'>
        {/* Section title */}
        <h2 className='text-center sm:text-left text-2xl sm:text-3xl font-semibold mb-12'>
          <strong className='text-indigo-900'>indicamp</strong>에 대해 더 자세히
          알려드려요!
        </h2>
        {/* Main */}
        <div className='mb-16'>
          {terms.map((term, index) => (
            <Accordion
              key={index}
              title={term.title}
              id={`terms-${index}`}
              active={term.active}
              className={`${index !== terms.length - 1 ? 'border-b border-b-gray-300' : ''}`}
            >
              <ul>
                <li key={index}>
                  {term.text.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {term.text.length - 1 > idx && <br />}
                    </span>
                  ))}
                </li>
              </ul>
            </Accordion>
          ))}
        </div>
        {/* CTA */}
        <div className='flex items-center justify-center sm:justify-end gap-4 sm:gap-6'>
          <h2 className='text-gray-500 font-bold text-lg sm:text-xl'>
            추가로 궁금한 점이 있다면?
          </h2>
          <Link href='/cs/inquiry' scroll={false}>
            <div>
              <SolidButton type='button' text='1:1 문의하기 →' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
