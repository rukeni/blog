import Link from "next/link"
import NavigationItem from "./NavigationItem"
import Title from "./Title"

const NavigationBar = () => {
  return (
    <nav className='h-16 flex border-b-2 items-center'>
      <Title />
      <NavigationItem />
      <div className="flex-1 flex justify-end items-center">
        <a href="" className="mr-8 font-semibold">이력서</a>
        <a href="" className="mr-8 font-semibold">Github</a>
        <button className="bg-red-100 p-2 mr-8 rounded-full">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default NavigationBar