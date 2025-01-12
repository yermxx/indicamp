import Benefit from '@/components/benefit';
import Challenge from '@/components/challenge';
import Curriculum from '@/components/curriculum';
import Edge from '@/components/edge';
import Faq from '@/components/faq';
import Intro from '@/components/intro';
import Mentor from '@/components/mentor';
import Price from '@/components/price';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Challenge />
      <Edge />
      <Mentor />
      <Curriculum />
      <Benefit />
      <Price />
      <Faq />
    </>
  );
}
