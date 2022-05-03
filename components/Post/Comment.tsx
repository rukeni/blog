import React from 'react';

const Comments = () => {
  return (
    <section
      className=''
      ref={(element) => {
        if (!element) {
          return null;
        }
        const script = document.createElement('script');
        script.src = 'https://utteranc.es/client.js';
        script.setAttribute('isExist', 'true');
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.setAttribute('repo', 'rukeni/blog');
        script.setAttribute('issue-term', 'pathname');
        script.setAttribute('label', 'blog-comment');
        script.setAttribute('theme', 'boxy-light');
        element.appendChild(script);
      }}
    />
  );
};

export default Comments;
