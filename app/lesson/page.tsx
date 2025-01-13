import PageNation from './(compnents)/PageNation';
import PostItem from './(compnents)/PostItem';
import LessonCategory from './(compnents)/lessonCategory';

export default function Lesson() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6'>
      <div className='py-8 md:pt-20 md:pb-10 relative '>
        <div className='pb-12 text-center'>
          <h1 className='animate-[gradient_3s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl'>
            본질을 꿰뚫는 웹 풀스택 개발자
          </h1>
          <div className='mx-auto max-w-3xl'>
            <p className='text-xl text-indigo-200/65'>
              <strong>JavaScript/TypeScript</strong> 부터{' '}
              <strong>React/Next</strong> 와{' '}
              <strong>Linx, Spring, Database</strong>
              까지 한번에
            </p>
          </div>
        </div>
        <LessonCategory />
      </div>
      <section className='px-5 pb-10'>
        <div className='mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3'>
          {YOUTUBELINKDUMMY.map((data, i) => (
            <PostItem key={i} data={data} />
          ))}
        </div>
        <PageNation />
      </section>
    </div>
  );
}

const YOUTUBELINKDUMMY = [
  {
    category: 'Javascript',
    title: '본질을 꿰뚫는 Javascript',
    content: 'Javascript의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/q_fIkgZVTOg/0.jpg',
    lessonNumber: 0,
  },
  {
    category: 'Javascript',
    title: '본질을 꿰뚫는 Javascript',
    content: 'Javascript의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/84EbVFeU390/0.jpg',
    lessonNumber: 0,
  },
  {
    category: 'Javascript',
    title: '본질을 꿰뚫는 Javascript',
    content: 'Javascript의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/isqpE-E3Y-8/0.jpg',
    lessonNumber: 0,
  },
  {
    category: 'Typescript',
    title: '본질을 꿰뚫는 Typeascript',
    content: 'Typeascript의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/ivNltriV4Ls/0.jpg',
    lessonNumber: 1,
  },
  {
    category: 'Java',
    title: '본질을 꿰뚫는 Java',
    content: 'Java의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/3B6xDVV3f_E/0.jpg',
    lessonNumber: 2,
  },
  {
    category: 'Database',
    title: '본질을 꿰뚫는 Database',
    content: 'Database의 원리와 사용방법에 대해 깊게 공부합니다다',
    titleImg: 'https://img.youtube.com/vi/3S8koZ-UAQo/0.jpg',
    lessonNumber: 3,
  },
];
