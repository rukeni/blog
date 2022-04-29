import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className='flex overflow-auto flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent'>
      <SidebarItem />
    </aside>
  );
};

export default Sidebar;
