import Myprofile from '@/components/my-profile';
import InfoAccordion from './(components)/info-accordion';

export default function Mypage() {
  // const = [{id: "나의프로젝트",  }]

  return (
    <>
      <div className='flex flex-col justify-center gap-14 py-12'>
        {/* 프로필 */}
        <Myprofile />
        {/* 현황 보기 */}

        {/* 캠프신청현황 */}
        <InfoAccordion />
      </div>
    </>
  );
}
