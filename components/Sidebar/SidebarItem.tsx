import Link from 'next/link';

import { sidebarMenus } from './sidebarMenus';

const SidebarItem = () => {
  return (
    <>
      <section className={'my-5 font-bold hover:opacity-50'}>
        <Link href='/diary/soom-1'>코드숨 1주차 회고록</Link>
      </section>
    </>
  );
};

export default SidebarItem;
