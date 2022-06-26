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
      {
        title: '코드숨 4주차 회고록',
        url: '/diary/soom-4',
      },
      {
        title: '코드숨 5주차 회고록',
        url: '/diary/soom-5',
      },
      {
        title: '코드숨 6주차 회고록',
        url: '/diary/soom-6',
      },
      {
        title: '코드숨 7주차 회고록',
        url: '/diary/soom-7',
      },
      {
        title: '코드숨 8주차 회고록',
        url: '/diary/soom-8',
      },
    ],
  },
  {
    name: 'react',
    items: [
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
