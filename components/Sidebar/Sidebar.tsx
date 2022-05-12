import { NavigationUrl } from '@components/Layout';
import { FC } from 'react';

import SidebarItem from './SidebarItem';
import { SidebarMenuItem } from './sidebarMenus';

type SidebarProps = {
  navigationUrl: string;
  sidebarList: SidebarMenuItem[];
};

const Sidebar: FC<SidebarProps> = ({ navigationUrl, sidebarList }) => {
  if (navigationUrl) {
    return (
      <aside className='hidden overflow-scroll flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent lg:flex'>
        {sidebarList?.length > 0
          ? sidebarList?.map((sidebarItem, index) => (
              <SidebarItem
                key={`${sidebarItem.title}.${index}`}
                {...sidebarItem}
              />
            ))
          : ''}
      </aside>
    );
  }
  return (
    <aside className='hidden overflow-scroll flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent lg:flex' />
  );
};

export default Sidebar;
