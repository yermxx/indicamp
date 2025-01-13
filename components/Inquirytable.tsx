'use client';

import { Lock, PhoneCall } from 'lucide-react';
import { useState } from 'react';

interface Inquiry {
  id: number;
  title: string;
  author: string;
  date: string;
  status: 'private' | 'answered' | 'public';
}

export default function Inquirytable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [content, setContent] = useState('');

  const inquiries: Inquiry[] = [
    {
      id: 10,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-24',
      status: 'public',
    },
    {
      id: 9,
      title: '수강신청은 어떻게 하나요?',
      author: '홍길동',
      date: '2024-12-24',
      status: 'public',
    },
    {
      id: 8,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-23',
      status: 'public',
    },
    {
      id: 7,
      title: '수강신청은 어떻게 하나요?',
      author: '홍길동',
      date: '2024-12-22',
      status: 'public',
    },
    {
      id: 6,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-22',
      status: 'private',
    },
    {
      id: 5,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-22',
      status: 'private',
    },
    {
      id: 4,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-22',
      status: 'private',
    },
    {
      id: 3,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-22',
      status: 'private',
    },
    {
      id: 2,
      title: '환불 관련 문의',
      author: '홍길동',
      date: '2024-12-22',
      status: 'private',
    },
    {
      id: 1,
      title: '환불 관련 문의',
      author: '관리자',
      date: '2024-12-21',
      status: 'answered',
    },
  ];

  const openModal = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    setModalOpen(true);
    setContent(''); // Reset content when opening the modal
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedInquiry(null);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Content:', content);
    // You can add logic to send this content to a server or handle it as needed.
    closeModal();
  };

  return (
    <div className='p-6'>
      <div className='right-align mb-3'>
        <button
          type='button'
          onClick={() =>
            openModal({
              id: 0,
              title: '1:1 문의하기',
              author: 'Anonymous',
              date: new Date().toLocaleDateString(),
              status: 'public',
            })
          }
          className='px-4 py-2 border border-gray-300 rounded bg-transparent text-blue-600 hover:bg-blue-100'
        >
          문의하기
        </button>
      </div>

      <table className='table-auto w-full text-sm border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-200 px-4 py-2 text-center'>No</th>
            <th className='border border-gray-200 px-4 py-2'>제목</th>
            <th className='border border-gray-200 px-4 py-2 text-center'>
              작성자
            </th>
            <th className='border border-gray-200 px-4 py-2 text-center'>
              작성일
            </th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr
              key={inquiry.id}
              onClick={() => openModal(inquiry)}
              className='cursor-pointer hover:bg-gray-50'
            >
              <td className='border border-gray-200 px-4 py-2 text-center'>
                {inquiry.id}
              </td>
              <td className='border border-gray-200 px-4 py-2'>
                <div className='flex items-center space-x-2'>
                  {inquiry.status === 'private' && (
                    <Lock size={16} className='text-gray-500' />
                  )}
                  {inquiry.status === 'answered' && (
                    <PhoneCall size={16} className='text-green-500' />
                  )}
                  <span>{inquiry.title}</span>
                </div>
              </td>
              <td className='border border-gray-200 px-4 py-2 text-center'>
                {inquiry.author}
              </td>
              <td className='border border-gray-200 px-4 py-2 text-center'>
                {inquiry.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg w-1/3'>
            <h3 className='text-lg font-bold mb-4'>{selectedInquiry?.title}</h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='inquiry-content'
                  className='block text-sm font-medium text-gray-700'
                >
                  문의 내용
                </label>
                <textarea
                  id='inquiry-content'
                  value={content}
                  onChange={handleContentChange}
                  rows={4}
                  className='w-full mt-1 p-2 border border-gray-300 rounded'
                  placeholder='내용을 입력하세요...'
                ></textarea>
              </div>
              <div className='flex justify-between'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                >
                  제출
                </button>
                <button
                  type='button'
                  onClick={closeModal}
                  className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
                >
                  닫기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
