import Image01 from '@/public/images/projects/user-64-05.jpg';
import TileCard from '@/app/projects/tile-card';

export default function UsersTabs() {
  const users = [
    {
      id: 0,
      name: '홍길동',
      image: Image01,
      occupation: '백엔드',
      link: 'aa',
      location: '',
      content: 'Java / Spring',
      career: '백엔드 3년',
    },
  ];

  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        {users.map((user) => (
          <TileCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
