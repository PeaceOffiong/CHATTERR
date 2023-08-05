import { BsPencil } from "react-icons/bs"

const Postsection = () => {
  return (
    <div className="w-11/12">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl py-2">
          <b>FEED</b>
        </h2>
        <p className="text-sm">
          Explore different content you'd love
        </p>
      </div>
      <div className="flex h-10 bg-blue-600 items-center justify-center gap-1 text-white p-2 rounded-md">
        <BsPencil />
        <p className="text-xs cursor-pointer">
          Post a content
        </p>
      </div>
      <div>
        </div>
      </div>
      <div className="flex justify-around mt-6 border-2 rounded h-12 items-center text-sm font-semibold">
        <div className="h-full flex items-center justify-center ">
          <p>For you</p>
        </div>
        <div className="h-full flex items-center justify-center ">
          <p>Featured</p>
        </div>
        <div className="h-full flex items-center justify-center ">
          <p>Recent</p>
        </div>
      </div>
    </div>
  )
}

export default Postsection;