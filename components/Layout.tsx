import { usePathName } from '@app/hooks';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Url } from 'url';

import FloatingTopButton from './FloatingTopButton';
import NavigationBar from './Navigation/NavigationBar';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';
import { SidebarMenuItem, sidebarMenus } from './Sidebar/sidebarMenus';

type LayoutProps = {
  title: 'hello world';
  children: ReactNode;
};

export type NavigationUrl = 'diary' | 'frontend' | '';

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const [navigationUrl, setNavigationUrl] = useState('diary');
  const [pathName, setPathName] = useState('');
  const [sidebar, setSidebar] = useState<SidebarMenuItem[]>([]);

  const path = usePathName();
  const router = useRouter();

  const onNavigationChange = (keyword: string, path: string) => {
    setNavigationUrl(keyword);
    const targetItems = sidebarMenus.find((item) => item.name === keyword);
    setSidebar(targetItems?.items ?? []);
    router.push(path);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    let keyword = '';
    if (pathname.includes('/diary')) {
      keyword = 'diary';
    }
    if (pathname.includes('/frontend')) {
      keyword = 'frontend';
    }
    const targetItems = sidebarMenus.find((item) => item.name === keyword);
    return setSidebar(targetItems?.items ?? []);
  }, []);

  return (
    <>
      <div className='flex flex-col'>
        <NavigationBar onNavigationChange={onNavigationChange} />
        <div className='flex overflow-hidden h-[93vh]'>
          <Sidebar navigationUrl={navigationUrl} sidebarList={sidebar} />
          <Post>{children}</Post>
        </div>
      </div>
      <FloatingTopButton />
    </>
  );
};

export default Layout;
