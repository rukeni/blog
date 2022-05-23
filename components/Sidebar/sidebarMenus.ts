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
      {
        title: '코드숨 2주차 회고록',
        url: '/diary/soom-2',
      },
      {
        title: '코드숨 3주차 회고록',
        url: '/diary/soom-3',
      },
    ],
  },
  {
    name: 'react',
    items: [
      {
        title: 'React.createElement에 대하여',
        url: '/react/about-createElement',
      },
      {
        title: '[번역]리액트 Ref의 완벽한 스토리',
        url: '/react/react-refs-the-complete-story',
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
