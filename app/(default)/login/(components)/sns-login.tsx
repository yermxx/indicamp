'use client';

import github from '@/public/images/login/login-github-logo.png';
import google from '@/public/images/login/login-google-logo.png';
import kakao from '@/public/images/login/login-kakao-logo.png';
import naver from '@/public/images/login/login-naver-logo.png';
import Image, { StaticImageData } from 'next/image';
import { type SNS } from '../page';

type Props = {
  snsLogin: (service: SNS) => void;
};

export default function SnsLogin({ snsLogin }: Props) {
  const snslist: SNS[] = ['kakao', 'naver', 'google', 'github'];
  const snsLogos: Record<string, StaticImageData> = {
    github,
    google,
    kakao,
    naver,
  };
  return (
    <>
      <div className='flex w-11/12 justify-evenly'>
        {snslist.map((sns) => (
          <button onClick={() => snsLogin(sns)}>
            <Image
              loading='lazy'
              width='62'
              height='62'
              src={snsLogos[sns]}
              alt={`login with ${sns}`}
              className='hover:opacity-70 hover:cursor-pointer'
            />
          </button>
        ))}
      </div>
    </>
  );
}
