import Image from "next/image";

const About = () => {
  return (
    <>
      <aside className="flex items-center justify-center md:w-3/5 flex-col gap-6">
        <h1
          className={`tracking-wider text-3xl sm:text-3xl w-4/5 md:w-full pb-6 leading-loose`}
        >
          <b className="capitalize font-black font-semibold">About Chatter</b>
        </h1>
        <p
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="w-full leading-relaxed text-xl"
        >
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional
          bookworm’s heaven and a blog to get access to more text based content.
          Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for
          all individuals, regardless of their backgrounds or beliefs. By
          promoting dialogue and understanding, we strive
        </p>
      </aside>
      <aside className="flex items-center justify-center md:w-2/5">
        <div className="my-5 mx-5">
          <Image
            src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688373689/unsplash_87gLIFoj79c_k5mswq.svg"
            height="600"
            width="600"
            alt="People in a meeting"
          />
        </div>
      </aside>
    </>
  );
};

export default About;

