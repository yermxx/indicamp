'use client';

import { useFlyoutContext } from '@/contexts/flyout-context';
import ProfileImage from '@/public/images/user-avatar-32.png';
import Image from 'next/image';
import UserCard from '../molecule/user-card';

// TODO: MockSkill
export type Skill = {
  id: number;
  name:
    | 'aws'
    | 'c'
    | 'django'
    | 'docker'
    | 'figma'
    | 'firebase'
    | 'flutter'
    | 'go'
    | 'java'
    | 'javascript'
    | 'jest'
    | 'kotlin'
    | 'kubernetes'
    | 'mongodb'
    | 'mysql'
    | 'nestjs'
    | 'nextjs'
    | 'nodejs'
    | 'php'
    | 'python'
    | 'react'
    | 'spring'
    | 'svelte'
    | 'swift'
    | 'typescript'
    | 'unity'
    | 'vue'
    | 'zeplin';
};

// TODO: MockCamperType
export type Camper = {
  id: number;
  camp: number;
  user: {
    id: number;
    nickname: string;
    profileimg?: string;
  };
  jobrole: 'FrontEnd' | 'BackEnd' | 'FullStack' | 'PlanMaster' | 'Designer';
  job: string;
  location: string;
  mobile: string;
  name: string;
  birthyear: number;
  gender: string;
  motive: string;
  goal: string;
  introduce: string;
  camperSkills: Skill[];
};

// TODO: Mock Skills
const mockSkills = [
  { id: 1, name: 'aws' },
  { id: 2, name: 'c' },
  { id: 3, name: 'django' },
  { id: 4, name: 'docker' },
  { id: 5, name: 'figma' },
  { id: 6, name: 'firebase' },
  { id: 7, name: 'flutter' },
  { id: 8, name: 'go' },
  { id: 9, name: 'java' },
  { id: 10, name: 'javascript' },
  { id: 11, name: 'jest' },
  { id: 12, name: 'kotlin' },
  { id: 13, name: 'kubernetes' },
  { id: 14, name: 'mongodb' },
  { id: 15, name: 'mysql' },
  { id: 16, name: 'nestjs' },
  { id: 17, name: 'nextjs' },
  { id: 18, name: 'nodejs' },
  { id: 19, name: 'php' },
  { id: 20, name: 'python' },
  { id: 21, name: 'react' },
  { id: 22, name: 'spring' },
  { id: 23, name: 'svelte' },
  { id: 24, name: 'swift' },
  { id: 25, name: 'typescript' },
  { id: 26, name: 'unity' },
  { id: 27, name: 'vue' },
  { id: 28, name: 'zeplin' },
];

// TODO: Mock Campers
const mockCampers: Camper[] = [
  {
    id: 1,
    camp: 1,
    user: {
      id: 1,
      nickname: 'shinkwang',
      profileimg: '/images/user-32-08.jpg',
    },
    jobrole: 'FrontEnd',
    job: 'Baksoo',
    location: '은평구',
    mobile: '010-1111-2222',
    name: '이신광',
    birthyear: 1993,
    gender: 'Male',
    motive: '취업을 위한 포트폴리오',
    goal: '사용자가 있는 프로젝트',
    introduce: '반갑소',
    camperSkills: [mockSkills[0], mockSkills[10], mockSkills[12]] as Skill[],
  },
  {
    id: 2,
    camp: 1,
    user: {
      id: 2,
      nickname: 'minseo',
      profileimg: '/images/user-32-02.jpg',
    },
    jobrole: 'BackEnd',
    job: 'Developer',
    location: '강남구',
    mobile: '010-2222-3333',
    name: '김민서',
    birthyear: 1995,
    gender: 'Female',
    motive: '백엔드 심화 학습',
    goal: '효율적인 서버 아키텍처 설계',
    introduce: '서버를 사랑합니다.',
    camperSkills: [mockSkills[3], mockSkills[22], mockSkills[7]] as Skill[],
  },
  {
    id: 3,
    camp: 1,
    user: {
      id: 3,
      nickname: 'jiyoon',
      profileimg: '/images/user-32-03.jpg',
    },
    jobrole: 'FullStack',
    job: 'Engineer',
    location: '송파구',
    mobile: '010-3333-4444',
    name: '박지윤',
    birthyear: 1996,
    gender: 'Female',
    motive: '풀스택 역량 강화',
    goal: '유지보수 가능한 애플리케이션 개발',
    introduce: '프론트와 백 모두 재미있어요!',
    camperSkills: [mockSkills[9], mockSkills[15], mockSkills[20]] as Skill[],
  },
  {
    id: 4,
    camp: 2,
    user: {
      id: 4,
      nickname: 'donghyun',
    },
    jobrole: 'Designer',
    job: 'Designer',
    location: '마포구',
    mobile: '010-4444-5555',
    name: '이동현',
    birthyear: 1994,
    gender: 'Male',
    motive: 'UI/UX 연구',
    goal: '사용자 친화적인 인터페이스 개발',
    introduce: '디자인과 코딩을 동시에!',
    camperSkills: [mockSkills[4], mockSkills[11], mockSkills[12]] as Skill[],
  },
  {
    id: 5,
    camp: 2,
    user: {
      id: 5,
      nickname: 'yewon',
    },
    jobrole: 'PlanMaster',
    job: 'System Admin',
    location: '중랑구',
    mobile: '010-5555-6666',
    name: '최예원',
    birthyear: 1992,
    gender: 'Female',
    motive: '효율적인 데이터베이스 설계',
    goal: '안정적인 시스템 제공',
    introduce: '데이터베이스를 좋아해요.',
    camperSkills: [mockSkills[7], mockSkills[8], mockSkills[6]] as Skill[],
  },
];

export default function ProfileSidebar() {
  const { flyoutOpen, setFlyoutOpen } = useFlyoutContext();

  return (
    <div
      id='profile-sidebar'
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out ${
        flyoutOpen ? 'translate-x-0' : '+translate-x-full'
      }`}
    >
      <div className='sticky top-16 bg-white dark:bg-[#151D2C] overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 dark:border-gray-700/60 md:w-[18rem] xl:w-[20rem] h-[calc(100dvh-64px)]'>
        {/* Profile group */}
        <div>
          {/* Group header */}
          <div className='sticky top-0 z-10'>
            <div className='flex items-center bg-white dark:bg-[#151D2C] border-b border-gray-200 dark:border-gray-700/60 px-5 h-16'>
              <div className='w-full flex items-center justify-between'>
                {/* Profile image */}
                <div className='relative'>
                  <div className='grow flex items-center truncate'>
                    <Image
                      className='w-8 h-8 rounded-full mr-2'
                      src={ProfileImage}
                      width={32}
                      height={32}
                      alt='Group 01'
                    />
                    <div className='truncate'>
                      <span className='font-semibold text-gray-800 dark:text-gray-100'>
                        TODO:로그인한 사람
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Group body */}
          <div className='px-5 py-4'>
            {/* Search form */}
            <form className='relative'>
              <label htmlFor='profile-search' className='sr-only'>
                Search
              </label>
              <input
                id='profile-search'
                className='form-input w-full pl-9 bg-white dark:bg-gray-800'
                type='search'
                placeholder='Search…'
              />
              <button
                className='absolute inset-0 right-auto group'
                type='submit'
                aria-label='Search'
              >
                <svg
                  className='shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-3 mr-2'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z' />
                  <path d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z' />
                </svg>
              </button>
            </form>
            {/* Team members */}
            <div className='mt-4'>
              <div className='text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3'>
                Camper Lists
              </div>
              <ul className='mb-6'>
                {mockCampers.map((c) => (
                  <li className='-mx-2' key={c.id}>
                    <UserCard camper={c} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
