'use client';

import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function EditAccount() {
  const session = useSession();
  return (
    <div className='flex flex-col items-center gap-10 mt-20 mb-14'>
      <div className='flex flex-col w-96 gap-8'>
        <div className='text-2xl font-bold'>내정보수정</div>

        <div className='flex flex-col gap-2'>
          <p className='text-sm font-bold'>아이디</p>
          <p className='text-base text-gray-500'>{session.data?.user?.email}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='passwd1'>
            <p className='text-sm font-bold'>
              비밀번호 <span className='text-red-600'>*</span>
            </p>
          </label>
          <p className='font-bold text-sm text-neutral-400 px-2'>
            영문 대소문자, 숫자, 특수문자 중 3가지 이상을 조합하여 8~16자리
            비밀번호를 입력하여주세요.
          </p>
          <Input
            id='passwd1'
            type='password'
            placeholder='비밀번호를 입력해주세요'
          />
          <Input
            id='passwd2'
            type='password'
            placeholder='비밀번호를 한번 더 입력해주세요'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='nickname'>
            <p className='text-sm font-bold'>
              닉네임 <span className='text-red-600'>*</span>
            </p>
          </label>
          <Input
            id='nickname'
            type='text'
            defaultValue={session.data?.user?.name || ''}
            placeholder='닉네임을 입력해주세요'
          />
        </div>

        <div className='mt-4'>
          <Button
            type='submit'
            className='w-96 h-12 bg-blue-500 hover:bg-blue-600  text-base'
          >
            수정하기
          </Button>
        </div>
        <div className='my-4'>
          <p
            onClick={() => alert('정말 탈퇴하시겠어요?')}
            className='text-base hover:cursor-pointer hover:text-gray-600 text-center text-red-300'
          >
            계정삭제하기
          </p>
        </div>
      </div>
    </div>
  );
}
