type HeadPostProps = {
  title: string;
}
const HeadPost = ({title}: HeadPostProps) => {
  return (
    <h1 className="text-4xl font-bold text-center">{title}</h1>
  )
}

export default HeadPost