'use server';

import { hash } from 'bcrypt';

export const signin = () => {};

export const regist = (formData: FormData) => {
  const email = formData.get('email');
  console.log('🚀  email:', email);
  // const nickname = formData.get('nickname');
  // const passwd = formData.get('passwd');
  // const passwd2 = formData.get('passwd2');
};

export async function hashPassword(passwd: string) {
  return hash(passwd, 10);
  // const hashedPassword = await hash(passwd, 10);
  // console.log('🚀  hashedPassword:', hashedPassword);
  // return hashedPassword;
}
