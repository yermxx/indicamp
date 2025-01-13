import prisma from '@/lib/db';
import AvatarPlaceholder from '@/components/avatar-placeholder';
import Creatives from './creatives';
import Hero from './hero';
import LastProjectsCarousel from './last-projects';
import LatestCamps from './latest-camps';

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

      <div className='my-5'>
        <h1 className='text-3xl'>About @indicamp</h1>

        <AvatarPlaceholder name='홍길동' />
        <AvatarPlaceholder name='Jade' />
        <AvatarPlaceholder name='박' />
        <AvatarPlaceholder name='ax' className='bg-red-500' />
      </div>
    </>
  );
}
