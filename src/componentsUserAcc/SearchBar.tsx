import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Body from "./Body";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div>
      <section>
        <div>
          <FiSearch/>
          <input type="text" className="border-4 width-3/5 " />

        </div>
        <div>
          <BsBell />
          <Image height={50} width={50} src="/default.png" alt="display photo" />
        </div>
      </section>
      

    </div>
  )
}

export default SearchBar  