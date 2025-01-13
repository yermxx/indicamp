import { ChevronUp } from 'lucide-react';
import TableSingleData from './table-data';

const data = [
  {
    title: '캠프 신청 현황',
    status: ['전체', '신청중', '학습중', '종료'],
    tableHead: ['NO', '캠프명', '프로젝트 기간', '진행상황'],
    tableData: [
      [1, '영등포 2기', '2025.02.01 ~ 2025.04.01', '지원완료'],
      [
        2,
        '영등포 1기 : 포트폴리오를 꿈꾸는 새싹들아 모여라',
        '2025.02.01 ~ 2025.04.01',
        '학습중',
      ],
    ],
  },
  {
    title: '나의 프로젝트',
    status: ['전체', '신청중', '학습중', '종료'],
    tableHead: ['NO', '캠프명', '프로젝트 기간', '진행상황'],
    tableData: [
      [1, '영등포 2기', '2025.02.01 ~ 2025.04.01', '지원완료'],
      [
        2,
        '영등포 1기 : 포트폴리오를 꿈꾸는 새싹들아 모여라',
        '2025.02.01 ~ 2025.04.01',
        '학습중',
      ],
    ],
  },
  {
    title: '캠프 신청 현황',
    status: ['전체', '신청중', '학습중', '종료'],
    tableHead: ['NO', '캠프명', '프로젝트 기간', '진행상황'],
    tableData: [
      [1, '영등포 2기', '2025.02.01 ~ 2025.04.01', '지원완료'],
      [
        2,
        '영등포 1기 : 포트폴리오를 꿈꾸는 새싹들아 모여라',
        '2025.02.01 ~ 2025.04.01',
        '학습중',
      ],
    ],
  },
];

export default function InfoAccordion() {
  // const currentStatus = '전체';

  return (
    <div className='w-9/12 mx-auto'>
      {data.map((item) => (
        <div key={item.title} className='mb-10'>
          <div className='flex flex-col  bg-blue-100 h-14 '>
            <button className=' my-auto ml-4 text-xl'>
              <p className='flex gap-2 items-center'>
                <span>{item.title}</span>
                <ChevronUp />
              </p>
            </button>
          </div>

          <div>
            <ul className='flex gap-2'>
              {item.status.map((state) => (
                <li className='mx-4 my-4' key={`${state}`}>
                  {state}
                </li>
              ))}
            </ul>

            <div>
              <table className='w-full table-auto'>
                <thead>
                  <tr className='border-y border-black h-10'>
                    {item.tableHead.map((th) => (
                      <th key={th} className='px-4'>
                        {th}
                      </th>
                    ))}
                    <th className='w-1/5'></th>
                  </tr>
                </thead>
                <tbody>
                  {item.tableData.map((tr) => (
                    <tr key={`${tr}`} className='border-b h-14 items-center'>
                      <TableSingleData singleData={tr} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
