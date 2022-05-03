import Link from 'next/link';

import { navigationMenus } from './navigationMenus';

const NavigationItem = () => {
  return (
    <ul className='flex ml-10'>
      {navigationMenus.map((menu, index) => (
        <li className='mx-8' key={menu.name}>
          <Link href={menu.url}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationItem;
