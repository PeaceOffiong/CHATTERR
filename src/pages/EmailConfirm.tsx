import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../components";

const EmailConfirm: React.FC = () => {
  return (
    <>
      <Head>
        <title>Confirm Email</title>
        <meta name="description" content="Bookworm’s heaven" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Dancing+Script:wght@600;700&family=Playfair+Display:ital,wght@0,600;1,400&family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="fixed top-0 left-0 right-0 z-10 md:hidden">
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/du8oaagwi/image/upload/v1686066266/ChatterImg_ev0xcp.svg")`
        }}
        className="relative md:w-2/5 h-screen md:h-full md:block bg-cover bg-no-repeat bg-center hidden"
      >
        {/*Starts Here*/}

        <div className="absolute inset-0 h-full bg-black bg-opacity-30 text-white flex items-center justify-center flex-col">
          <h1 className={`tracking-wider text-3xl leading-loose`}>
            <b className="uppercase">chatter</b>
          </h1>
          <p className="w-4/5 leading-relaxed ">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
          <ul className="flex gap-5 p-2.5 md:hidden ">
            <li className="cursor-pointer h-10 flex items-center justify-center border-2 border-blue-700 w-28 rounded-md ">
              <Link href="#formSection">Log in</Link>
            </li>
            <li className="cursor-pointer h-10 flex items-center justify-center w-28 bg-blue-700  rounded-md capitalize text-white">
              <Link href="#formSection">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default EmailConfirm;
