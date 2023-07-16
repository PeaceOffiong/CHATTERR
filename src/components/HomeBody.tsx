import Link from "next/link";

const HomeBody = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du8oaagwi/image/upload/v1687814539/Landing_inhh3w.svg")`
        }}
        className="relative bg-cover bg-no-repeat bg-center h-screen "
      >
        <div className="h-full bg-black bg-opacity-40 text-white flex  justify-center flex-col gap-3 items-center">
          <h1
            className={`tracking-wider text-3xl sm:text-4xl leading-normal w-3/5 pb-6`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <b className="capitalize">
              Welcome to Chatter: A haven for text based content
            </b>
          </h1>
          <p
            style={{ fontFamily: "DM Sans, sans-serif" }}
            className="w-3/5 leading-relaxed text-xl md:text-2xl"
          >
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers.
          </p>
          <div className="flex w-3/5">
            <Link href="/LoginSignup">
              <button className="cursor-pointer h-10 w-28 bg-blue-700 rounded-md capitalize text-white self-start">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeBody;
