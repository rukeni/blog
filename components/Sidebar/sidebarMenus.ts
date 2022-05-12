interface SidebarMenus {
  name: string;
  items: SidebarMenuItem[];
}

export type SidebarMenuItem = {
  title: string;
  url: string;
};

export const sidebarMenus: SidebarMenus[] = [
  {
    name: 'diary',
    items: [
      {
        title: '코드숨 1주차 회고록',
        url: '/diary/soom-1',
      },
    ],
  },
  {
    name: 'frontend',
    items: [
      {
        title: '왜 Webpack을 사용하는가?',
        url: '/frontend/why-use-webpack',
      },
    ],
  },
];
