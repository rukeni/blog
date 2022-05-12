import { NavigationUrl } from '@components/Layout';
import { FC } from 'react';

import SidebarItem from './SidebarItem';
import { sidebarMenus } from './sidebarMenus';

type SidebarProps = {
  navigationUrl: NavigationUrl;
};

const Sidebar: FC<SidebarProps> = ({ navigationUrl }) => {
  if (navigationUrl) {
    const sidebarList = sidebarMenus[navigationUrl];

    return (
      <aside className='hidden overflow-scroll flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent lg:flex'>
        {sidebarList?.map((sidebarItem, index) => (
          <SidebarItem key={`${sidebarItem.title}.${index}`} {...sidebarItem} />
        ))}
      </aside>
    );
  }
  return (
    <aside className='hidden overflow-scroll flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent lg:flex' />
  );
};

export default Sidebar;
