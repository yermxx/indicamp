import prisma from '@/lib/db';
import AvatarPlaceholder from '@/components/avatar-placeholder';
import AboutBlog from './blog';
import Creatives from './creatives';
import AboutCta from './cta';
import Hero from './hero';
import Hosts from './hosts';
import LastProjectsCarousel from './last-projects';
import LatestCamps from './latest-camps';
import MainReviewsInAbout from './main_review';

export const metadata = {
  title: 'About - indicamp',
  description: '인디캠프에 대해, 인디캠프 소개',
};

export default async function About() {
  const projecter = await prisma.projecter.findUnique({
    where: {
      project_camper: {
        project: 1,
        camper: 2,
      },
    },
  });
  const cnt = await prisma.camp.count();
  console.log('🚀  projecter:', projecter, cnt);
  return (
    <>
      <Hero />
      <LatestCamps />
      <LastProjectsCarousel />
      <Creatives />
      <Hosts />
      <MainReviewsInAbout />
      <AboutBlog />
      <AboutCta />

      <div className='my-5'>
        <AvatarPlaceholder name='홍길동' />
        <AvatarPlaceholder name='Jade' />
        <AvatarPlaceholder name='박' />
        <AvatarPlaceholder name='ax' className='bg-red-500' />
      </div>
    </>
  );
}
