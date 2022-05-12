import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import FloatingTopButton from './FloatingTopButton';
import NavigationBar from './Navigation/NavigationBar';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';

type LayoutProps = {
  title: 'hello world';
  children: ReactNode;
};

export type NavigationUrl = 'diary' | 'frontend' | '';

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const [navigationUrl, setNavigationUrl] = useState<NavigationUrl>('diary');

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.includes('/diary')) {
      return setNavigationUrl('diary');
    }
    if (pathname.includes('/frontend')) {
      return setNavigationUrl('frontend');
    }
    return setNavigationUrl('');
  }, []);

  const navigate = (url: NavigationUrl) => {
    setNavigationUrl(url);
  };
  return (
    <>
      <div className='flex flex-col'>
        <NavigationBar />
        <div className='flex overflow-hidden h-[93vh]'>
          <Sidebar navigationUrl={navigationUrl} />
          <Post>{children}</Post>
        </div>
      </div>
      <FloatingTopButton />
    </>
  );
};

export default Layout;
