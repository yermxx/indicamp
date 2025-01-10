import Benefit from '@/components/benefit';
import Challenge from '@/components/challenge';
import Edge from '@/components/edge';
import Faq from '@/components/faq';
import Intro from '@/components/intro';
import Mentor from '@/components/mentor';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Challenge />;
      <Edge />
      <Mentor />
      <Benefit />;
      <Faq />;
    </>
  );
}
