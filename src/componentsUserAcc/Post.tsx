
interface PostProps {
  post: any[];
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    post.map((each) => {
      return <div>{each}</div>
    })
  )
}

export default Post