import Link from 'next/link';

const Title = () => {
  return (
    <Link href='/'>
      <a className='my-auto ml-6 text-3xl font-bold hover:font-thin transition-all'>
        Home
      </a>
    </Link>
  );
};

export default Title;
