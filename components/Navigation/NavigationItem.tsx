import { NavigationUrl } from '@components/Layout';
import Link from 'next/link';
import { FC, MouseEventHandler } from 'react';
import { Url } from 'url';

import { navigationMenus } from './navigationMenus';

type NavigationProps = {
  onNavigationChange: (keyword: string, path: string) => void;
};

const NavigationItem: FC<NavigationProps> = ({ onNavigationChange }) => {
  const handleNavigationChange: MouseEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    event.preventDefault();
    const { href } = event.currentTarget;
    const { pathname: pathName } = new URL(href);
    console.log('url.pathname', pathName.split('/'));
    const [, keyword] = pathName.split('/');
    console.log('pathName', pathName);
    console.log('href', href);
    onNavigationChange(keyword, pathName);
  };

  return (
    <ul className='flex overflow-x-auto lg:ml-10'>
      {navigationMenus.map((menu, index) => (
        <li className='mx-1 text-xs lg:mx-8 lg:text-base' key={menu.name}>
          <a href={menu.url} onClick={handleNavigationChange}>
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationItem;
