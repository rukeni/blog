import { NavigationUrl } from '@components/Layout';
import Dropdown from '@components/Navigation/Dropdown';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Url } from 'url';

import NavigationItem from './NavigationItem';
import Title from './Title';

type NavigationBarProps = {
  onNavigationChange: (keyword: string, path: string) => void;
};

const NavigationBar: FC<NavigationBarProps> = ({ onNavigationChange }) => {
  const [isShownDropdown, setIsShownDropdown] = useState(false);
  const onDropdown = (value: boolean) => {
    setIsShownDropdown(value);
  };
  return (
    <>
      <nav className='flex justify-center items-center h-16 border-b-2 lg:justify-start'>
        <Title />
        <NavigationItem onNavigationChange={onNavigationChange} />
        <div className='flex justify-end items-center lg:flex-1'>
          <a href='' className='hidden mr-8 font-semibold lg:block'>
            이력서
          </a>
          <a href='' className='hidden mr-8 font-semibold lg:block'>
            Github
          </a>
          <button
            className='p-2 bg-purple-100 rounded-full xs:mr-8 xs:ml-3 lg:hidden'
            onClick={() => onDropdown(!isShownDropdown)}
          >
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
      {isShownDropdown && <Dropdown onDropdown={onDropdown} />}
    </>
  );
};

export default NavigationBar;
