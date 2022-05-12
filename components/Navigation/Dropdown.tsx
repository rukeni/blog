import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type DropdownProps = {
  onDropdown: (value: boolean) => void;
};

export default function Dropdown({ onDropdown }: DropdownProps) {
  const router = useRouter();

  const handleHome = () => {
    onDropdown(false);
    router.push('/');
  };
  return (
    <div className='flex fixed z-10 flex-col justify-center items-center w-screen h-screen bg-white'>
      <button
        className='mb-5 text-3xl font-bold hover:font-thin transition-all'
        onClick={() => handleHome()}
      >
        Home
      </button>
      <button className='mb-5 text-3xl font-bold hover:font-thin transition-all'>
        이력서
      </button>
      <button className='mb-5 text-3xl font-bold hover:font-thin transition-all'>
        Github
      </button>
      <button
        className='mb-5 text-3xl font-bold hover:font-thin transition-all'
        onClick={() => onDropdown(false)}
      >
        닫기
      </button>
    </div>
  );
}
