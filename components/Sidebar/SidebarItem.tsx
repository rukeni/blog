import Link from 'next/link';

import { sidebarMenus } from './sidebarMenus';

const SidebarItem = () => {
  return (
    <>
      {sidebarMenus.map((menu, index) => (
        <section
          className={
            'font-bold whitespace-pre my-5 hover:opacity-50 ' +
            (index === 0 ? 'mt-10' : '')
          }
          key={menu.title}
        >
          <Link href={menu.url}>{menu.title}</Link>
        </section>
      ))}
    </>
  );
};

export default SidebarItem;
