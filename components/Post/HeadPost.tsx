type HeadPostProps = {
  title: string;
  createdDate: string;
  updatedDate: string;
  estimatedTime: string;
};
const HeadPost = ({
  title,
  createdDate,
  updatedDate,
  estimatedTime = '',
}: HeadPostProps) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>
        {title || '타이틀을 입력해주세요'}
      </h1>
      <div className='flex flex-col justify-start items-end'>
        {estimatedTime && `예상 소요 시간: ${estimatedTime}분☕️`}
        <p className='my-0 lg:mt-0 lg:mb-1'>
          작성일: {createdDate || '입력필요'}
        </p>
        <p className='my-0 lg:mt-0 lg:mb-8'>
          수정일: {updatedDate || '입력필요'}
        </p>
      </div>
    </div>
  );
};

export default HeadPost;
