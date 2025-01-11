import prisma from '@/lib/db';
import AvatarPlaceholder from '@/components/avatar-placeholder';

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
      <h1 className='text-3xl'>About @indicamp</h1>

      <AvatarPlaceholder name='홍길동' />
    </>
  );
}
