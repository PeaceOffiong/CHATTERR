import { BsPencil } from "react-icons/bs";
import { Post } from "../componentsUserAcc";
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

const Postsection = () => {
  const [timelinePost, setTimelinePost] = useState<Post[]>([])
  const { dataState } = useUserAuthContext()
  const {currentUser} = dataState

  const usersCollectionRef = collection(db, "Posts");


  useEffect(() => {
    const getTimelinePosts = async () => {
      try {
        const data = await getDocs(usersCollectionRef)
        console.log(data)
        const dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

        console.log(dataArray);

        const followerPosts = dataArray
          .filter((post) => currentUser[0].followers.some((follower) => follower.name === post))
        //   .filter((post) => !lastTimestamp || post.timestamp < lastTimestamp)
        //   .sort((a, b) => b.timestamp - a.timestamp);

        // return followerPosts.slice(0, pageSize);
      } catch (error) {
        console.log(error)
      }
    }

    getTimelinePosts();
  }, [])

  if(timelinePost.length == 0){
    return <> No Post, Follow friends to see their posts </>
  }


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

      <Post post={timelinePost} />
    </div>
  )
}

export default Postsection;