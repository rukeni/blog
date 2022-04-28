import { FC, ReactNode } from "react";
import Footer from "./Footer";
import NavigationBar from "./Navigation/NavigationBar"
import Sidebar from "./Sidebar/Sidebar"
type LayoutProps = {
  title: 'hello world',
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <article className='prose flex-1 m-auto mt-10 h-full overflow-auto'>
        {children}
      {/* 페이지 이동 */}

      </article>
      </div>
      <Footer />

    </div>
  )
}

export default Layout