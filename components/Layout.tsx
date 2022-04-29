import { FC, ReactNode, useRef, useState } from 'react';

import FloatingTopButton from './FloatingTopButton';
import NavigationBar from './Navigation/NavigationBar';
import Post from './Post/Post';
import Sidebar from './Sidebar/Sidebar';
type LayoutProps = {
  title: 'hello world';
  children: ReactNode;
};
const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <div className='flex flex-col'>
        <NavigationBar />
        <div className='flex overflow-hidden h-[93vh]'>
          <Sidebar />
          <Post>{children}</Post>
        </div>
      </div>
      <FloatingTopButton />
    </>
  );
};

export default Layout;
