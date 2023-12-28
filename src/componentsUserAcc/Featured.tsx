import { Post } from "./Postsection";

interface FeaturedProps {
  featuredPost: Post[];
}

const Featured: React.FC<FeaturedProps> = ({ featuredPost }) => {
  return (
    <div className="w-full shrink-0 h-96">
      {featuredPost.map((post) => {
        return <div key={post.id}>{ post.text}</div>
      })}
    </div>
  )
}

export default Featured