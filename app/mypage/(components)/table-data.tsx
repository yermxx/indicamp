import { Button } from '@/components/ui/button';

export default function TableSingleData({
  singleData,
}: {
  singleData: (string | number)[];
}) {
  const showButtons = () => {
    const status = singleData[3];
    if (status === '지원완료') {
      return (
        <>
          <Button>가입하기</Button>
          <Button>탈퇴하기</Button>
        </>
      );
    }
    if (status === '학습중' || status === '수료') return <></>;
  };

  return (
    <>
      {singleData.map((data) => (
        <td className='px-4 text-center'>{data}</td>
      ))}
      <td className='flex gap-2 justify-end items-center h-14'>
        {showButtons()}
      </td>
    </>
  );
}
