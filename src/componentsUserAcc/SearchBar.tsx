import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { NavbarVisibilityProps } from "@/types/shared";

const SearchBar: React.FC<NavbarVisibilityProps> = ({ setShowNavSection, showNavsection }) => {
  return (
    <section className="flex grid-flow-col   w-full h-16 items-center justify-between border-2 relative gap-4 ">
      <h2
        className={`uppercase sm:text-2xl text-base text-blue-700 cursor-pointer py-2 font-medium pl-4 visible sm:invisible ${!showNavsection && 'invisible'}`}
      >
        <b
          onClick={() => setShowNavSection(!showNavsection)}
        >Chatter</b>
      </h2>
      <div className="flex h-3/5 w-3/6 rounded relative items-center">
        <div className="absolute px-2">
          <FiSearch />
        </div>
        <input type="text" className="border-2 w-full h-full rounded text-sm pl-8" placeholder="Search Chatter" />
      </div>
      <div className=" flex items-center justify-center gap-2 cursor-pointer pr-4">
        <BsBell />
        <Image height={40} width={40} src="/default.png" alt="display photo" className="rounded-full" />
      </div>

    </section>
  )
}

export default SearchBar  