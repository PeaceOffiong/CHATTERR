import { BsPencil } from "react-icons/bs";
import { Foryou, Featured, Recent} from "../componentsUserAcc";
import { useUserAuthContext } from "@/context/userAuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

interface Post {
  Tags: any[];
  postFrom: string;
  text: string;
  timestamp: number;
}

interface TabsProps {
  name: string,
  active: boolean,
}


const Postsection = () => {
  const [timelinePost, setTimelinePost] = useState<Post[]>([])
  const [lastTimestamp, setLastTimestamp] = useState<number>(1609459200000)
  const [tabs, setTabs] = useState<TabsProps[]>([
    {name:"For You", active: true}, 
    {name:"Featured", active: false}, 
    {name:"Recent", active: false}
  ]);
  const { dataState } = useUserAuthContext()
  const { currentUser, loading } = dataState
  console.log(currentUser);
  console.log(loading);

  const usersCollectionRef = collection(db, "Posts");

  const handleSwitchTabs = () =>{

  }


  useEffect(() => {
    const getTimelinePosts = async () => {
      try {
        const data = await getDocs(usersCollectionRef)
        console.log(data)
        const dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        console.log(dataArray);

        //@ts-ignore
        const followerPosts = await dataArray.filter((post) => currentUser[0].followers.some((follower) => follower.name === post.postFrom || currentUser[0].email === post.postFrom))
        .filter((post) => !lastTimestamp || post.timeStamp < lastTimestamp)
        .sort((a, b) => b.timestamp - a.timestamp);
        console.log(followerPosts)
      } catch (error) {
        console.log(error)
      }
    }


    if (loading) {
      return;
    } else {
      getTimelinePosts();  
    }
  }, [loading, currentUser])



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
        {tabs.map((tab, indx) =>{
          return <div key={indx} onClick={handleSwitchTabs} name="For you" className="h-full flex items-center justify-center relative cursor-pointer" >
          <p>{tab.name}</p>
          <div className="w-12 bg-blue-600 rounded h-1 absolute bottom-0"></div>        
        </div>
        })}
        
        <div onClick={handleSwitchTabs}  name="Featured" className="h-full flex items-center justify-center relative cursor-pointer">
          <p>Featured</p>
          <div className="w-12 rounded h-1 absolute bottom-0"></div>
        </div>
        <div onClick={handleSwitchTabs} name="Recent" className="h-full flex items-center justify-center relative cursor-pointer">
          <p>Recent</p>
          <div className="w-12 rounded h-1 absolute bottom-0"></div>
        </div>
      </div>
      {loading ? <p> No Post, Follow friends to see their posts</p> : <div className="section-container overflow-hidden relative"><div className="flex w-full"><Foryou/><Featured/><Recent/></div></div>   
       }
    </div>
  )
}

export default Postsection;

{/* <Post post={timelinePost}/> */}