import React, { MouseEventHandler } from 'react';

const FloatingTopButton = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const article = document.querySelector('#post');
    if (article) {
      article.scrollTop = 0;
    }
  };
  return (
    <button
      className='fixed right-0 bottom-0 p-3 mr-8 mb-6 text-white bg-purple-500 hover:bg-purple-600 rounded-full transition-colors'
      onClick={handleClick}
    >
      위로
    </button>
  );
};

export default FloatingTopButton;
