import { BsPencil } from "react-icons/bs";
import { Post } from "../componentsUserAcc";
import { useUserAuthContext } from "@/context/userAuthContext";

const Postsection = () => {
  const {dataState} =useUserAuthContext()
  console.log(dataState.currentUser[0])
  return (
    <div className="sm:w-11/12 md:w-4/5">

      <div className="flex justify-between items-center w-full">
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
      </div>

      <div className="flex justify-around mt-6 border-2 rounded h-12 items-center text-sm font-semibold">
        <div className="h-full flex items-center justify-center relative cursor-pointer">
          <p>For you</p>
          <div className="w-12 bg-blue-600 rounded h-1 absolute bottom-0"></div>
        </div>
        <div className="h-full flex items-center justify-center relative cursor-pointer">
          <p>Featured</p>
          <div className="w-12 rounded h-1 absolute bottom-0"></div>
        </div>
        <div className="h-full flex items-center justify-center relative cursor-pointer">
          <p>Recent</p>
          <div className="w-12 rounded h-1 absolute bottom-0"></div>
        </div>
      </div>

      <Post />
    </div>
  )
}

export default Postsection;