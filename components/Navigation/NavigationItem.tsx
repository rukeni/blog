import Link from 'next/link';

const NavigationItem = () => {
  return (
    <ul className='flex ml-10'>
      {new Array(10)
        .fill(0)
        .map((el, idx) => idx + 1)
        .map((el, index) => (
          <li className='mx-8' key={el}>
            <Link href={`/data`}>{String(el)}</Link>
          </li>
        ))}
    </ul>
  );
};

export default NavigationItem;
