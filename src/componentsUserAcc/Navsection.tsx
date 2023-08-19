import { useUserAuthContext } from "@/context/userAuthContext";
import { LeftTabs } from "../componentsUserAcc";
import { PiBookmarksThin } from "react-icons/pi";
import { GiZBrick } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { BsEnvelopeOpen } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { useState } from "react";

type NavSectionProps = {
  showNavsection: boolean;
}

const Navsection: React.FC<NavSectionProps> = ({showNavsection}) => {
  const [showItems, setShowItems] = useState<number>(4);
  const { dataState } = useUserAuthContext();
  const { tags } = dataState;

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= tags.length ?  4 : tags.length
    );
  };

  const handleShowMoreLess = ():string => {
    if(showItems == 4){
      return "show more"
    } else {
      return "show less"
    }
  }
  return (
    <div
      className={`${showNavsection ? `hidden` :`block` }  sm:block w-4/6 shrink-0 sm:w-2/12 md:w-1/5 border-r-2 m-0 `}
    >
      <div className=" px-6 pt-1 h-screen section-container overflow-auto overflow-x-hidden">
        <h2
          className="uppercase sm:text-2xl text-xl text-blue-700 cursor-pointer py-2 font-medium"
        >
            <b>Chatter</b>
        </h2>
        <div className="">
          <h2 className="pb-4 pt-2 flex gap-2"><b className="font-semibold">Overview</b></h2>
          <LeftTabs icons={<GiZBrick />} name="Feed" />
          <LeftTabs icons={<PiBookmarksThin />} name="Bookmarks" />
          <LeftTabs icons={<GoPeople />} name="Team Blogs" />
          <LeftTabs icons={<BsEnvelopeOpen />} name="Drafts" />
          <LeftTabs icons={<VscGraph />} name="Analytics" />
        </div>
        <div>
          <h2 className="py-4 flex gap-2">
            <b>
              Trending Tags 
            </b>
            <HiArrowTrendingUp />
          </h2>
          <ul className="text-sm gap-2 flex flex-col">
            {tags.slice(0, showItems).map((each, index) => {
              return <li key={index} className="pl-4 cursor-pointer">{each}</li>;
            })}
            <p className="cursor-pointer pl-4 text-blue-500" onClick={handleShowMore}>
            {handleShowMoreLess()}
            </p>
          </ul>
        </div>
        <div>
          <h2 className="py-4 flex gap-2">
            <b>Personal</b>
          </h2>
          <LeftTabs icons={<BsPerson />} name="Account" />
          <LeftTabs icons={<GoBell />} name="Notifications" />
          <p className="text-red-500 p-4 text-sm cursor-pointer">Logout </p>
        </div>
      </div>
    </div>
  )
}

export default Navsection
