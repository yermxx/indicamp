export type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export default function SolidButton({ text, type }: ButtonProps) {
  return (
    <button
      type={type}
      className='px-8 py-3 rounded-2xl  bg-amber-400 hover:bg-amber-300 hover:text-gray-700 font-bold text-xl font-["Pretendard"] shadow-[2px_3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_3px_3px_0_rgba(0,0,0,0.1)]'
    >
      {text}
    </button>
  );
}
