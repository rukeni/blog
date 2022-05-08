type HeadPostProps = {
  title: string;
  createdDate: string;
  updatedDate: string;
};
const HeadPost = ({ title, createdDate, updatedDate }: HeadPostProps) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>
        {title || '타이틀을 입력해주세요'}
      </h1>
      <div className='flex flex-col justify-start items-end'>
        <p className='my-0'>작성일: {createdDate || '입력필요'}</p>
        <p className='my-0'>변경일: {updatedDate || '입력필요'}</p>
      </div>
    </div>
  );
};

export default HeadPost;
