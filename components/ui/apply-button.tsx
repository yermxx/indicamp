import Link from 'next/link';

type Props = {
  deadline: string;
};
export default function ApplyButton({ deadline }: Props) {
  const deadlineDate = new Date(deadline);
  const now = Date.now();
  const timeDiff = deadlineDate.getTime() - now;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return (
    <>
      <div className='flex items-center fixed bottom-2 left-1/3 font-bold text-center p-4 rounded-full bg-gray-100 w-120 z-50 opacity-90'>
        <span className='mr-14 ml-4 text-lg'>
          {daysLeft}일 후 모집이 종료돼요!
        </span>
        <Link
          href='/apply'
          className='bg-mainyello p-2 border-2 border-black rounded-xl hover:bg-yellow-300 opacity-100 z-60'
        >
          🌱 1기 신청 바로가기 <span className='font-extrabold'>→</span>
        </Link>
      </div>
    </>
  );
}
