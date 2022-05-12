type HeadPostProps = {
  title: string;
  createdDate: string;
  updatedDate: string;
  estimatedTime: string;
  isWriting: boolean;
};
const HeadPost = ({
  title,
  createdDate,
  updatedDate,
  estimatedTime = '',
  isWriting = false,
}: HeadPostProps) => {
  return (
    <div className='mt-4 lg:mt-16'>
      {isWriting && (
        <p className='p-4 w-full text-center text-white bg-purple-500 rounded-full'>
          *아직 작성중인 글입니다 🙅🏻‍♂️*
        </p>
      )}
      <h1 className='text-2xl font-bold text-center whitespace-pre-line xs:text-3xl lg:text-[3.2rem]'>
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
