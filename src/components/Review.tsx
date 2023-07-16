import React from 'react';

const Review = () => {
  return (
    <>
      <aside>
        <div>
          <Image
            src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688508324/Person1_qnkadx.svg"
            alt="person"
            height="450"
            width="450"
            className="rounded-full"
          />
        </div>
      </aside>
      <aside className="flex flex-col gap-8">
        <p
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="leading-relaxed text-base max-w-[60%]"
        >
          &ldquo;Chatter has become an integral part of my online experience. As a
          user of this incredible blogging platform, I have discovered a vibrant
          community of individuals who are passionate about sharing their ideas
          and engaging in thoughtful discussions.&rdquo;
        </p>

        <div className="flex gap-2 md:flex-row flex-col items-center ">
          <h2 style={{ fontFamily: "DM Sans, sans-serif" }} className="text-xl">
            <b>Adebobola Muhydeen,</b>
          </h2>
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="leading-relaxed text-base max-w-[60%]"
          >
            Software developer at Apple
          </p>
        </div>

        <div className="flex justify-center items-center w-full md:block">
          <Link href="/LoginSignup">
            <button className="cursor-pointer h-10 w-28 bg-blue-700 rounded-md capitalize text-white self-start">
              Join Chatter
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Review;
