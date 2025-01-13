import { type ButtonProps } from './solid-button';

export default function GhostButton({ text, type }: ButtonProps) {
  return (
    <button
      type={type}
      className='px-6 py-3 border border-blue-500 text-blue-500 font-bold text-base rounded-2xl hover:border-blue-300 hover:text-blue-300 font-["Pretendard"]'
    >
      {text}
    </button>
  );
}
