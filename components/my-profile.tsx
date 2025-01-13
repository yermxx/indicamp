import github from '@/public/images/login/login-github-logo.png';
import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Myprofile() {
  return (
    <div className='flex flex-col mx-auto items-center gap-4'>
      <Image alt='profile Image' src={github} width='180' height='180' />
      <p className='text-xl font-bold'>닉네임</p>
      <div className='flex w-full justify-center gap-4 items-center mt-1'>
        <p className='text-lg flex gap-3 items-center'>
          <Users />
          Follower
        </p>
        <button>2</button>
        <p className='text-lg'>Following</p>
        <button>2</button>
      </div>

      <div className='flex gap-4'>
        <p className='hover:cursor-pointer'>프로필 수정</p>
        <p> | </p>
        <Link href='/mypage/edit-account'>내 정보 수정</Link>
      </div>
    </div>
  );
}
