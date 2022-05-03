import Script from 'next/script';
import React, { useEffect, useRef } from 'react';
const Comments = () => {
  const commentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://utteranc.es/client.js';
    scriptElement.async = true;
    scriptElement.setAttribute('repo', 'rukeni/blog');
    scriptElement.setAttribute('issue-term', 'pathname');
    scriptElement.setAttribute('theme', 'boxy-light');
    scriptElement.setAttribute('label', 'blog-comment');
    scriptElement.crossOrigin = 'anonymous';
    commentRef?.current?.appendChild(scriptElement);
  }, [commentRef]);

  return <section ref={commentRef} />;
};

export default Comments;
