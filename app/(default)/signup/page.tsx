'use client';

import { regist } from '@/actions/sign';
import Logo from '@/public/indicamp+logo.png';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import SolidButton from '@/components/ui/solid-button';
import { Input } from '../../../components/ui/input';
import Term from './term';

export default function SignUp() {
  const passwd1Ref = useRef<string>('');
  const passwd2Ref = useRef<string>('');

  async function formAction(formData: FormData) {
    if (confirm('제출하시겠습니까?')) {
      regist(formData);
    }
  }

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (e.target.id === 'passwd1') {
      passwd1Ref.current = e.target.value;
      const passwd1 = passwd1Ref.current;
      if (!reg.test(passwd1)) {
        alert('올바르지 않은 비밀번호입니다.');
      }
    }
    if (e.target.id === 'passwd2') {
      passwd2Ref.current = e.target.value;
    }
    if (passwd1Ref.current !== passwd2Ref.current) {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <>
      <div className='flex flex-col items-center gap-10 mt-8 mb-14'>
        <div className='flex items-end'>
          <div className=' mb-2'>
            <strong className='text-4xl'>Indicam</strong>
          </div>
          <Image className='' src={Logo} alt='Logo' />
        </div>

        <form action={formAction} className='flex flex-col w-96 gap-8'>
          <div className='text-2xl font-bold'>회원가입</div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>
              <p className='text-sm font-bold'>
                이메일 <span className='text-red-600'>*</span>
              </p>
            </label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='이메일을 입력해주세요'
              className=''
            />
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
              name='passwd1'
              type='password'
              placeholder='비밀번호를 입력해주세요'
              onChange={handlePwdChange}
            />
            <Input
              id='passwd2'
              name='passwd2'
              type='password'
              placeholder='비밀번호를 한번 더 입력해주세요'
              onChange={handlePwdChange}
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
              placeholder='닉네임을 입력해주세요'
            />
          </div>
          <Term />
          <SolidButton type='submit' text='가입하기' />
        </form>
      </div>
    </>
  );
}
