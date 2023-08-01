import Image from "next/image";
import Link from "next/link";

const Others = () => {
  return (
    <>
      <aside className=" w-5/12 h-60 gap-5 items-center justify-center flex ">
        <div className="flex flex-col gap-14">
          <div>
            <Image
              src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688571350/Person5_y6puh1.svg"
              alt="person"
              height="100"
              width="100"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688508246/Person4_xyxjfe.svg"
              alt="person"
              height="100"
              width="100"
              className="rounded-full"
            />
          </div>
        </div>

        <div>
          <div>
            <Image
              src="https://res.cloudinary.com/du8oaagwi/image/upload/v1688508310/Person3_pyrdkh.svg"
              alt="person"
              height="100"
              width="100"
              className="rounded-full"
            />
          </div>
        </div>
      </aside>
      <aside
        style={{ fontFamily: "DM Sans, sans-serif" }}
        className="w-8/12 flex flex-col gap-8"
      >
        <h1 className="text-2xl leading-relaxed decoration-black font-black w-8/12 ">
          <b className="font-semibold">Write, read and connect with great minds on chatter</b>
        </h1>
        <p
          style={{ fontFamily: "DM Sans, sans-serif" }}
          className="leading-relaxed text-small w-8/12"
        >
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <Link href="/LoginSignup">
          <button className="cursor-pointer h-10 w-28 bg-blue-700 rounded-md capitalize text-white self-start">
            Get Started
          </button>
        </Link>
      </aside>
    </>
  );
};

export default Others;
