'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TagInput() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [_, setIsKeyReleased] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const deleteTag = (index: number) => {
    setTags((prevState) => prevState.filter((_, i) => i !== index));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === 'Enter' && !e.nativeEvent.isComposing && tags.length >= 5) {
      e.preventDefault();
      return;
    }

    if (
      key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      tags.includes(trimmedInput) &&
      trimmedInput.length
    ) {
      e.preventDefault();
      return;
    }

    if (
      key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput('');
    }
    setIsKeyReleased(false);
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  return (
    <div>
      <div className='flex space-x-2'>
        {tags.map((tag, index) => (
          <Button
            onClick={() => deleteTag(index)}
            variant={'secondary'}
            key={index}
            className='tag text-indigo-500'
          >
            #{tag}
          </Button>
        ))}
        <Input
          value={input}
          placeholder='태그를 입력하세요'
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
          className='w-32'
        />
      </div>
    </div>
  );
}
