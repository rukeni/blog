import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-start items-center min-h-screen border-r-[16px] border-r-red-100 w-64 overflow-auto">
      <SidebarItem />
    </aside>
  )
}

export default Sidebar