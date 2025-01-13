import Image from 'next/image';

export default function Edge() {
  const cards: { title: string; img: string; detail: string }[] = [
    {
      title: `스타트업 같은 자율적인 팀 빌딩
        & 트레이딩 시스템`,
      img: '/images/teambuild.png',
      detail: ` 팀장 - 팀원을 선택하는 자유로운 팀 빌딩,
      1주일의 트레이드 기간으로 완성되는
      최적의 팀 구성`,
    },
    {
      title: `클론 코딩을 넘어선 
실제 서비스 구현`,
      img: '/images/chart.png',
      detail: `클론 코딩이 아닌 실제 서비스를 목표,
      영구적으로 살아있는 진짜 포트폴리오`,
    },
    {
      title: `실무 중심 프로젝트에서 시작되는
인사이드 네트워크`,
      img: '/images/network.png',
      detail: `현직자와 나누는 실무 인사이트,
    특강부터 네트워킹까지 생생한 현장 경험`,
    },
  ];
  const colors = ['to-red-200', 'to-lime-200', 'to-indigo-200'];
  return (
    <section className='bg-blue-100 text-center mt-20 pb-40 font-["pretendard"]'>
      <h1 className='p-20 text-center font-bold sm:text-3xl md:text-3xl lg:text-4xl leading-tight'>
        <strong className='text-mainblue'>indicamp</strong>는 무엇이 다른가요?
      </h1>

      {/* <div className='relative w-full h-full'>  */}
      <div className='flex justify-around mx-20'>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col w-[600px] h-[420px] text-center whitespace-pre-line items-center m-4 p-8 rounded-lg shadow-md bg-gradient-to-tl from-white ${colors[i]}`}
          >
            <h1 className='font-bold text-xl'>{card.title}</h1>
            <div className='flex items-center justify-center m-8 flex-grow'>
              <Image
                src={card.img}
                alt={`card img${i}`}
                width={200}
                height={200}
              />
            </div>
            <h2 className='text-slate-700'>{card.detail}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
