import { FC, ReactNode } from "react";
import Comments from "./Comment";
import Footer from "./Footer";
import NavigationBar from "./Navigation/NavigationBar"
import Sidebar from "./Sidebar/Sidebar"
type LayoutProps = {
  title: 'hello world',
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({children, title}) => {
  const tempList = new Array(50).fill(0).map((el, idx) => idx +1)
  return (
    <div className="flex flex-col">
      <NavigationBar />
      <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <article className='prose flex-1 m-auto w-[calc(100vw-16rem)] max-w-full px-48 mt-10 h-full overflow-auto'>
        {children}
      {/* 페이지 이동 */}
      <div className="flex justify-between h-16 mx-4">
       <button className="font-bold">이전</button>
       <button className="font-bold">다음</button>
      </div>
      <Comments />
      </article>
      </div>
      {/* <Footer /> */}

    </div>
  )
}

export default Layout