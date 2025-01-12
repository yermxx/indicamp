import { PropsWithChildren } from 'react';
import BlurredShapeGray from './(compnents)/BlurredShapeGray';

export default function LessonLayout({ children }: PropsWithChildren) {
  return (
    <main className='pt-[77px] relative min-h-[100vh] bg-gray-800'>
      <BlurredShapeGray />
      {children}
    </main>
  );
}
