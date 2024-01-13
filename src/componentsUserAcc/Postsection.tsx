import { BsPencil } from "react-icons/bs";
import { Foryou, Featured, Recent} from "../componentsUserAcc";
import { useUserAuthContext } from "@/context/userAuthContext";
import { collection, query, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";

export type timeStamptype = {
  nanoseconds: number;
  seconds: number;
}

export interface comments{
  comment: string;
  name: string;
  timeStamp: timeStamptype; 
}

export interface Post {
  id: string;
  Tags: any[];
  comments: comments[];
  postFrom: string;
  text: string;
  timeStamp: timeStamptype;
}

interface TabDataAttributes {
  name: string;
}

interface TabsProps {
  name: string,
  active: boolean,
}


const Postsection : React.FC = () => {
  const [forYouPost, setForYouPost] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post[]>([]);
  const [recentPost, setRecentPost] = useState<Post[]>([]);
  console.log(recentPost, featuredPost, forYouPost);

  const [lastTimestamp, setLastTimestamp] = useState<number>(1609459200000)
  const [tabs, setTabs] = useState<TabsProps[]>([
    {name:"For You", active: true}, 
    {name:"Featured", active: false}, 
    {name:"Recent", active: false}
  ]);
  const [dynamicClass, setDynamicClass] = useState<string>("custom-translateFy")
  const { dataState } = useUserAuthContext()
  const { currentUser, loading } = dataState;
  console.log(currentUser);


  const handleSwitchTabs = (index: number) => {
    console.log(index)
    setTabs(prevTabs => {
      const updatedTabs = prevTabs.map((tab, indx) => ({
        ...tab,
        active: indx === index,
      }));

      let dynamicClassValue = "custom-translateFy";
      if (updatedTabs[1].active) {
        dynamicClassValue = "custom-translateFe";
      } else if (updatedTabs[2].active) {
        dynamicClassValue = "custom-translateRe";
      }

      setDynamicClass(dynamicClassValue);
      return updatedTabs;
    });
  }


  useEffect(() => {
    const getTimelinePosts = async () => {
      try {
        const postsCollection = collection(db, 'Posts')

        const q = query(postsCollection, orderBy('timeStamp', 'desc'), limit(10))
        const querySnapshot = await getDocs(q);
        const dataArray = querySnapshot.docs.map((docs) => ({ ...docs.data(), id: docs.id })) as Post[]
        console.log(dataArray);

        //For you Post  
        const followerPosts = await dataArray.filter((post) => currentUser.followers.some((follower) => follower.name === post.postFrom || currentUser.email === post.postFrom))
        setForYouPost([...followerPosts]);

        //Featured
        const featuredPosts = dataArray.filter((each) => {
          return each.comments.some((comment) => comment.name === currentUser.email);
        })
        setFeaturedPost(featuredPosts);

        //Recent
        const recentPosts = dataArray.filter((post) => currentUser.followers.some((follower) => follower.name === post.postFrom || currentUser.email === post.postFrom))
        setRecentPost(recentPosts)


        // if (recentPost.length > 0) {
        //   setLastTimestamp(recentPost[0].timeStamp.seconds)
        // } else {
        //   setLastTimestamp(1609459200000)
        // }

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
      <div className= "px-2">
        <h2 className="text-xl py-2">
          <b>FEED</b>
        </h2>
        <p className="text-sm text-grey-300">
          Explore different content you&apos;d love
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
          return <div key={indx} onClick={() => handleSwitchTabs(indx)} data-name="For you" className="h-full flex items-center justify-center relative cursor-pointer" >
          <p>{tab.name}</p>
            <div className={`w-12 ${tabs[indx].active ?`bg-blue-600` : `hidden`} rounded h-1 absolute bottom-0`}></div>        
        </div>
        })}

      </div>
      {loading ? <p> No Post, Follow friends to see their posts</p> : <div className="section-container overflow-hidden relative"><div className={`flex w-full ${dynamicClass}`}><Foryou forYouPost={forYouPost}/><Featured featuredPost={featuredPost} /><Recent recentPost={recentPost}/></div></div>   
       }
    </div>
  )
}

export default Postsection;

{/* <Post post={timelinePost}/> */}