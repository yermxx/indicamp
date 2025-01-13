import Logo from '@/public/indicamp+logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/lib/auth';
import prisma, { query } from '@/lib/db';
import LoginForm from './(components)/loginForm';
import SnsLogin from './(components)/sns-login';

type User = {
  id: number;
  nickname: string;
  email: string;
};

export type SNS = 'google' | 'github' | 'kakao' | 'naver';
type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
export default async function Login({ searchParams: { callbackUrl } }: Props) {
  const session = await auth();
  console.log('🚀 login - session:', session);
  if (session?.user?.email) {
    redirect('/');
  }

  const users1 = await query<User>('select * from User');
  console.log('🚀  users1:', users1?.length);
  const users = await prisma.user.findMany();
  console.log('🚀  users:', users);

  const snsLogin = async (service: SNS = 'google') => {
    'use server';
    console.log('snsLogin>>>', service, callbackUrl);
    await signIn(service, { redirectTo: callbackUrl });
  };

  return (
    <>
      <div className='flex flex-col items-center gap-8 w-96 mx-auto my-12'>
        <div className='flex items-end'>
          <div className=' mb-2'>
            <strong className='text-4xl'>Indicam</strong>
          </div>
          <Image className='' src={Logo} alt='Logo' />
        </div>

        <LoginForm />

        <div className=''>
          <p className='text-base'>
            <Link href={'/'} className='hover:underline'>
              <span>비밀번호 찾기</span>
            </Link>
            <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link href={'/signup'} className='hover:underline'>
              <span>회원가입</span>
            </Link>
          </p>
        </div>

        <div className='flex justify-center w-full items-center'>
          <div className='border-b border-neutral-300 grow '></div>
          <div className='mx-4 text-neutral-700 text-base'>
            SNS 계정으로 간편 로그인
          </div>
          <div className='border-b border-neutral-300 grow'></div>
        </div>

        <SnsLogin snsLogin={snsLogin} />
      </div>

      {/* 강사님 코드 
      <div className='borderx pt-5 text-center'>
        <h1 className='text-2xl mb-3 text-center'>Login</h1>
        <ul className='text-green-500'>
          {users.map((user) => (
            <li key={user.id}>
              {user.id}. {user.nickname}
            </li>
          ))}
        </ul>
        <div className='w-64 mx-auto'>
          <form action={googleLogin} className='mb-3'>
            <input type='hidden' name='service' value='google' />
            <ul className='space-y-3'>
              <li>
                <Button type='submit' className='w-full flex justify-between'>
                  <Image
                    width='24'
                    height='24'
                    src='https://authjs.dev/img/providers/google.svg'
                    alt='login with google'
                  />
                  Sign In with Google
                </Button>
              </li>
              <li>
                <GithubLogin githubLogin={snsLogin} />
              </li>
            </ul>
          </form>

          <PassButton
            label='Sign In with Naver'
            action={async () => {
              'use server';
              await snsLogin('naver');
            }}
            className='w-full mb-3 flex justify-between'
          />
          <KakaoLogin login={snsLogin} />
          <Image
            width='300'
            height={500}
            alt='xx'
            src='https://preview.cruip.com/creative/images/hero-image.png'
          />
        </div>
      </div>
      */}
    </>
  );
}
