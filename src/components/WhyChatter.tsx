import Image from "next/image";

const WhyChatter = () => {
  return (
    <>
      <div className="md:px-20">
        <h1
          className={`tracking-wider text-3xl sm:text-4xl w-full pb-6 leading-loose text-center`}
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <b className="capitalize font-black">Why you should join chatter</b>
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
      </div>
      <div className="w-full flex">
        <ul className="w-full flex items-center justify-center flex-col md:flex-row px-20 py-10 gap-8 h-auto">
          <li className="w-80 flex flex-col border-2 rounded-lg p-5 h-full flex-auto">
            <div className="py-1">
              <Image
                alt="Icons"
                height="90"
                width="90"
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688392931/Icon1_t0wri4.svg"
              />
            </div>

            <div>
              <h3 className="text-base py-2">
                <b>Analytics</b>
              </h3>
              <p
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className="w-4/5 md:w-full leading-relaxed text-base"
              >
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>
          </li>
          <li className="w-80 flex flex-col  border-2 rounded-lg p-5 h-full flex-auto">
            <div className="py-1">
              <Image
                alt="Icons"
                height="90"
                width="90"
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688392963/Group_2_ddvsqb.svg"
              />
            </div>

            <div>
              <h3 className="text-lg py-2">
                <b>Social interactions</b>
              </h3>
              <p
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className="w-4/5 md:w-full leading-relaxed text-base"
              >
                Users on the platform can interact with posts they like, comment
                and engage in discussions
              </p>
            </div>
          </li>
          <li className="w-80 flex flex-auto flex-col border-2 rounded-lg p-5 h-full ">
            <div className="py-1">
              <Image
                alt="Icons"
                height="90"
                width="90"
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688392977/Group_3_agpcf6.svg"
              />
            </div>

            <div>
              <h3 className="text-lg py-2">
                <b>Content creation</b>
              </h3>
              <p
                style={{ fontFamily: "DM Sans, sans-serif" }}
                className="w-4/5 md:w-full leading-relaxed text-base"
              >
                Write nice and appealing with our in-built markdown, a rich text
                editor
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyChatter;
