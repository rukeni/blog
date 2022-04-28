import { FC, ReactNode, useState } from "react";
import NavigationBar from "./Navigation/NavigationBar"
import Post from "./Post/Post";
import Sidebar from "./Sidebar/Sidebar"
type LayoutProps = {
  title: 'hello world',
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({children, title}) => {
  const tempList = new Array(50).fill(0).map((el, idx) => idx +1);
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <Post>{children}</Post>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout