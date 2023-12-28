import React from 'react'
import { Post } from "../componentsUserAcc/Postsection";

interface RecentProps {
  recentPost: Post[];
}

const Recent: React.FC<RecentProps> = ({ recentPost }) => {
  return (
    <div className="w-full shrink-0 h-96">
      {recentPost.map(post => {
        return <div key={post.id}>{post.text}</div>
      })}
    </div>
  )
}

export default Recent