import { FC, ReactNode } from "react";
import NavigationBar from "./NavigationBar"
import Sidebar from "./Sidebar"
type LayoutProps = {
  title: 'hello world',
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({children, title}) => {
  return (
    <div className="container flex flex-col">
      <NavigationBar />
      <div className="flex">
      <Sidebar />
      <article className='prose flex-1'>
        {children}
      </article>
      </div>
    </div>
  )
}

export default Layout