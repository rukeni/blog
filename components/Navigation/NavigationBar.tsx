import Link from 'next/link';

import NavigationItem from './NavigationItem';
import Title from './Title';

const NavigationBar = () => {
  return (
    <nav className='hidden items-center h-16 border-b-2 lg:flex'>
      <Title />
      <NavigationItem />
      <div className='flex flex-1 justify-end items-center'>
        <a href='' className='mr-8 font-semibold'>
          이력서
        </a>
        <a href='' className='mr-8 font-semibold'>
          Github
        </a>
        <button className='p-2 mr-8 bg-red-100 rounded-full'>
          <svg
            className='w-6 h-6 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
