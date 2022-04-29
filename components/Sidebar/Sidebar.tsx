import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-start items-center min-h-screen border-r-[8px] border-r-transparent w-64 overflow-auto">
      <SidebarItem />
    </aside>
  )
}

export default Sidebar