import Benefit from '@/components/benefit';
import Challenge from '@/components/challenge';
import Faq from '@/components/faq';
import Intro from '@/components/intro';

export default function HomePage() {
  return (
    <>
      <Intro />;
      <Challenge />;
      <Benefit />;
      <Faq />;
    </>
  );
}
