
import { Post } from "../componentsUserAcc/Postsection";

interface ForYouProps {
  forYouPost: Post[];
}

const Foryou: React.FC<ForYouProps> = ({ forYouPost }) => {
  return (
    <div className="w-full shrink-0 h-96">
      {forYouPost.map(post =>{
        return <div key={post.id}>{ post.text}</div>
      })}
    </div>
  )
}

export default Foryou