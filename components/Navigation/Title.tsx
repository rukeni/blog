import Link from 'next/link';

const Title = () => {
  return (
    <Link href='/'>
      <a className='hidden my-auto font-bold hover:font-thin transition-all lg:block lg:ml-6 lg:text-3xl'>
        Home
      </a>
    </Link>
  );
};

export default Title;
