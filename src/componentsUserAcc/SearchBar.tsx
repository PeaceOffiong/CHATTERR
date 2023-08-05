import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const SearchBar = () => {
  return (
      <section className="flex grid-flow-col   w-full h-16 items-center justify-center border-2 relative gap-4 ">
        <div className="flex justify-self-center h-3/5 w-3/6 rounded relative items-center">
          <div className="absolute px-2">
            <FiSearch/>
          </div>
          <input type="text" className="border-2 w-full h-full rounded text-sm pl-8" placeholder="Search Chatter"/>
        </div>
        <div className="absolute right-0 px-4 flex items-center justify-center gap-2 cursor-pointer">
          <BsBell />
          <Image height={40} width={40} src="/default.png" alt="display photo" className="rounded-full" />
      </div>
      
      </section>
  )
}

export default SearchBar  