import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function Agreement() {
  const serviceTerm = () => {
    return <></>;
  };

  const personInfoTerm = () => {};

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex '>
        <Checkbox id='allcheck' />
        <Label htmlFor='allcheck' className='ml-1'>
          <p className='text-center pl-1 leading-4'>전체 동의</p>
        </Label>
      </div>

      <div className='border-b border-neutral-200 my-3'></div>

      <div className='flex'>
        <Checkbox id='service' />
        <Label htmlFor='service' className='ml-1 w-full '>
          <p className='text-center pl-1 leading-4 font-bold flex justify-between '>
            <span>(필수) 서비스 이용약관 동의</span>
            <button type='button' onClick={() => serviceTerm()}>
              상세보기 &gt;
            </button>
          </p>
        </Label>
      </div>

      <div className='flex '>
        <Checkbox id='personInfo' />
        <Label htmlFor='personInfo' className='ml-1 w-full'>
          <p className='text-center pl-1 leading-4 font-bold flex justify-between '>
            <span>(필수) 개인정보 처리방침</span>
            <button type='button' onClick={() => personInfoTerm()}>
              상세보기 &gt;
            </button>
          </p>
        </Label>
      </div>

      <div className='flex'>
        <Checkbox id='marketingInfo' />
        <Label htmlFor='marketingInfo' className='ml-1'>
          <p className='text-center pl-1 leading-4'>
            (선택) 광고성 정보 수신 동의
          </p>
        </Label>
      </div>
    </div>
  );
}
