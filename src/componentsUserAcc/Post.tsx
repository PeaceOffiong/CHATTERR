import Image from "next/image";

interface PostProps {
  post: string;
  postImgSrc?: string;
  posterImg: string;
  posterName: string;
  posterJob: string;
  postDate: string;
}

const Post: React.FC<PostProps> = ({ post, posterName, posterImg, posterJob, postDate, postImgSrc}) => {
  return (
    <>
      <div>
        <Image src={posterImg} alt="" />
        <div>
          <h2>{posterName}</h2>
          <small>{posterJob}, <span>{ postDate}</span></small>
        </div>
      </div>
      <div>
        <h3>

        </h3>
        <small>

        </small>
        <p>

        </p>
        {postImgSrc && <Image src={postImgSrc} alt="" />}
      </div>
      <div>

      </div>

    </>
  )
}

export default Post