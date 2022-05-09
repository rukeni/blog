import { FC, ReactNode } from 'react';

import Comment from './Comment';
import FootPost from './FootPost';

type PostProps = {
  children: ReactNode;
};

const Post: FC<PostProps> = ({ children }) => {
  return (
    <article
      id='post'
      className={
        'overflow-auto flex-1 px-12 m-auto mt-10 w-[calc(100vw-16rem)] max-w-full h-full prose prose-stone lg:px-48 lg:prose-xl'
      }
    >
      {children}
      {/* 페이지 이동 */}
      <Comment />
      <FootPost />
    </article>
  );
};

export default Post;
