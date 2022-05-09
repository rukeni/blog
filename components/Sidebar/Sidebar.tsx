import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <aside className='hidden overflow-scroll flex-col justify-start items-center w-64 min-h-screen border-r-[8px] border-r-transparent lg:flex'>
      <SidebarItem />
    </aside>
  );
};

export default Sidebar;
