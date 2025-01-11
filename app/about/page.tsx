import prisma from '@/lib/db';
import AvatarPlaceholder from '@/components/avatar-placeholder';
import Hero from './hero';
import Inspiration from './inspiration';

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
      <Inspiration />

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
