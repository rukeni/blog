import Link from 'next/link';
import { FC } from 'react';

type SidebarItemProps = {
  title: string;
  url: string;
};

const SidebarItem: FC<SidebarItemProps> = ({ title, url }) => {
  return (
    <>
      <section className={'my-5 font-bold hover:opacity-50'}>
        <Link href={url}>{title}</Link>
      </section>
    </>
  );
};

export default SidebarItem;
