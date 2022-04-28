import { FC, ReactNode } from "react"
import Comments from "../Comment";
import FootPost from "./FootPost";
import HeadPost from "./HeadPost";

type PostProps = {
  children: ReactNode;
}

const Post: FC<PostProps> = ({children}) => {
  return (
    <article className={'prose prose-stone border flex-1 m-auto w-[calc(100vw-16rem)] max-w-full px-48 mt-10 h-full overflow-auto'}>
    <HeadPost title=''/>
    {children}
    {/* 페이지 이동 */}
    <FootPost />
    <Comments />
  </article>
  )
}

export default Post