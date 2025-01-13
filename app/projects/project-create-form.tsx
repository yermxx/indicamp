import TagInput from './tag-input'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProjectCreateForm() {
  return (
    <>
      <div className='mb-4'>
        <h1 className='text-4xl font-bold mb-2'>프로젝트 생성</h1>
        <div className='text-gray-500'>{''}</div>
      </div>
      {/* Form */}
      <form className='mb-12'>
        {/* Group #1 */}
        <div className='py-6'>
          <div className='space-y-4'>
            <div>
              <Label className='block text-sm font-medium mb-1' htmlFor='name'>
                프로젝트 제목 <span className='text-red-500'>*</span>
              </Label>
              <Input
                id='name'
                className='form-input w-full'
                type='text'
                required
                placeholder='프로젝트 제목'
              />
            </div>
          </div>
        </div>

        {/* tags group */}
        <div className='pb-4'>
          <Label className='block text-sm text-gray-800 font-medium mb-1'>
            태그 <span className='text-rose-500'>*</span>
          </Label>
          <TagInput />
        </div>

        {/* Group #2 */}
        <div className='py-4'>
          <div>
            <Label
              className='block text-sm text-gray-800 font-medium mb-1'
              htmlFor='description'
            >
              프로젝트 설명 <span className='text-rose-500'>*</span>
            </Label>
            <textarea
              id='description'
              className='form-textarea border rounded-md text-sm p-4 w-full '
              rows={15}
              required
              placeholder='프로젝트 설명'
            />
          </div>
          <div className='text-lg font-bold text-gray-800 mb-5'>
            {/*<span className='text-indigo-500'>2.</span> The role*/}
          </div>

          <div className='space-y-4'></div>
        </div>
        <div className='pb-8'>
          <Label
            className='block text-sm text-gray-800 font-medium mb-1'
            htmlFor='description'
          >
            참고 자료
          </Label>
          <div className='space-y-4'>
            <Input type='url' placeholder='https://'></Input>
            <Input type='url' placeholder='https://'></Input>
            <Input type='url' placeholder='https://'></Input>
          </div>
        </div>

        {/* Group #3 */}
        <div className='flex gap-4'>
          <Button className='px-5 py-2.5 text-sm font-medium inline-flex items-center justify-center rounded-md leading-5 whitespace-nowrap transition duration-150 ease-in-out w-full text-white bg-slate-400 hover:bg-slate-500 shadow-sm'>
            임시저장
          </Button>
          <Button className='px-5 py-2.5 text-sm font-medium inline-flex items-center justify-center rounded-md leading-5 whitespace-nowrap transition duration-150 ease-in-out w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm'>
            작성완료
          </Button>
        </div>
      </form>
    </>
  );
}
