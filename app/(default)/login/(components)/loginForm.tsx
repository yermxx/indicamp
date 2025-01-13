'use client';

import { useFormState } from 'react-dom';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
  useFormState;

  const emailRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const email = emailRef.current?.value || '';
    const passwd = passwdRef.current?.value || '';
    alert(email + passwd);
    // 서버에 넘기기!
  };

  return (
    <form className='flex flex-col gap-4' onSubmit={submit}>
      <div className='flex flex-col gap-8'>
        <Input
          ref={emailRef}
          type='text'
          placeholder='아이디'
          className='h-12 rounded-lg focus:border-spacing-1 focus-visible:ring-gray-300  '
        />
      </div>
      <div className='flex flex-col w-96 gap-8'>
        <Input
          ref={passwdRef}
          type='password'
          placeholder='비밀번호'
          className='h-12 rounded-lg focus:border-spacing-1 focus-visible:ring-gray-300'
        />
      </div>

      <div className='mt-4'>
        <Button
          type='submit'
          className='w-96 h-12 bg-blue-500 hover:bg-blue-600  text-base'
        >
          로그인
        </Button>
      </div>
    </form>
  );
}
