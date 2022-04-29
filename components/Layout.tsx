import { FC, ReactNode, useRef, useState } from "react";
import NavigationBar from "./Navigation/NavigationBar"
import Post from "./Post/Post";
import Sidebar from "./Sidebar/Sidebar"
type LayoutProps = {
  title: 'hello world',
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="flex overflow-hidden h-[93vh]">
      <Sidebar />
      <Post>{children}</Post>
      </div>
      {/* <Footer /> */}
      <button className="fixed rounded-full p-3 bg-purple-500 text-white bottom-0 right-0 mr-8 mb-6" onClick={(event) => {
        event.preventDefault();
        const article = document.querySelector('#post');
        if(article) {
          article.scrollTop = 0;
        }
      }}>위로</button>
    </div>
  )
}

export default Layout;