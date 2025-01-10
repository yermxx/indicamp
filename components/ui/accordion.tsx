'use client';

import { useState, useEffect } from 'react';

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
  className?: string;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
  className,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`font-["pretendard"] ${className}`}>
      <h3 className='py-1 sm:py-2 text-lg sm:text-xl font-bold'>
        <button
          className='flex items-center justify-between w-full text-left font-medium px-5 py-2'
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg
            className='fill-gray-400 dark:fill-gray-500 shrink-0 ml-8'
            width='12'
            height='12'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              y='5'
              width='12'
              height='2'
              rx='1'
              className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
            />
            <rect
              y='5'
              width='12'
              height='2'
              rx='1'
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
            />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-text-${id}`}
        role='region'
        aria-labelledby={`accordion-title-${id}`}
        className={`grid rounded-xl text-sm bg-blue-100 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className='overflow-hidden'>
          <div className='text-gray-600 rounded-md px-8 py-4 sm:py-6 leading-normal'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
