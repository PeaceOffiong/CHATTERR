import Link from "next/link";
import { getDocs, collection } from "firebase/firestore";
import { REDUCER_ACTION_TYPE } from "@/reducers/actions";
import { db } from "../firebase/firebaseConfig";
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
import { useEffect, useState } from "react";

const Navsection = () => {
  const [showItems, setShowItems] = useState<number>(4);
  const { dataState } = useUserAuthContext();
  const { tags } = dataState;

  const handleShowMore = () => {
    setShowItems((prevShowItems) =>
      prevShowItems >= tags.length ? prevShowItems : tags.length
    );
  };
  return (
    <div className=" sm:w-1/6 md:1/5 w-24 ">
      <h2
        className="uppercase text-3xl text-blue-700  cursor-pointer"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <Link href="/Home">
          <b>Chatter</b>
        </Link>
      </h2>
      <section>
        <h2>Overview</h2>
        <LeftTabs icons={<GiZBrick />} name="Feed" />
        <LeftTabs icons={<PiBookmarksThin />} name="Bookmarks" />
        <LeftTabs icons={<GoPeople />} name="Team Blogs" />
        <LeftTabs icons={<BsEnvelopeOpen />} name="Drafts" />
        <LeftTabs icons={<VscGraph />} name="Analytics" />
      </section>
      <section>
        <h2><b>Trending Tags  <HiArrowTrendingUp /></b></h2>
        <ul>
          {tags.slice(0, showItems).map((each,index) => {
            return <li key={index}>{each}</li>
          })}
          <p className="cursor-pointer" onClick={handleShowMore}>Show more</p>
        </ul>
      </section>
      <section>
        <h2><b>Personal</b></h2>
        <LeftTabs icons={<BsPerson />} name="Account" />
        <LeftTabs icons={<GoBell />} name="Notifications" />
        <p className="text-red-7000">Logout</p>
      </section>
    </div>
  )
}

export default Navsection