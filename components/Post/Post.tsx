import { FC, ReactNode } from 'react';

import Comments from './Comment';
import FootPost from './FootPost';
import HeadPost from './HeadPost';

type PostProps = {
  children: ReactNode;
};

const Post: FC<PostProps> = ({ children }) => {
  return (
    <article
      id='post'
      className={
        'overflow-auto flex-1 px-48 m-auto mt-10 w-[calc(100vw-16rem)] max-w-full h-full prose prose-stone'
      }
    >
      {children}
      {/* 페이지 이동 */}
      <Comments />
      <FootPost />
    </article>
  );
};

export default Post;
