import { BsJustify } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import { useGlobalContext } from "../context/globalContext";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";

export const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const { toggle, isNavbarFixed } = state;

  const navbarToogle = (): void => {
    dispatch({ type: REDUCER_ACTION_TYPE.TOOGLE });
  };

  const toogleDefault = (): void =>
    dispatch({ type: REDUCER_ACTION_TYPE.TOOGLEDEFAULT });

  return (
    <>
      <Head>
        <title>Welcome to CHATTER</title>
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
      <nav
        className={`${
          isNavbarFixed ? "fixed top-0 left-0" : ""
        }flex items-center justify-center h-20 w-full px-10 bg-white z-10`}
      >
        <section className=" w-full flex justify-between items-center h-full ">
          <aside className="w-1/3 ">
            <h2
              className="uppercase text-3xl text-blue-700  cursor-pointer"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <Link href="/">
                <b>Chatter</b>
              </Link>
            </h2>
          </aside>

          <aside className=" w-2/3 grid">
            <div className="md:w-full md:block justify-center md:justify-between flex items-center fixed top-20 left-0 right-0 bg-white md:static z-10">
              <div
                className={`flex justify-center md:justify-between items-center w-full md:flex-row flex-col gap-5 ${
                  toggle ? "" : "hidden"
                } md:flex`}
              >
                <ul
                  className="flex justify-center gap-5 w-full text-sm md:flex-row flex-col text-center"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  <Link href="/">
                    <li className="cursor-pointer" onClick={toogleDefault}>
                      <b>Home</b>
                    </li>
                  </Link>
                  <Link href="#about">
                    <li className="cursor-pointer" onClick={toogleDefault}>
                      <b>About Us</b>
                    </li>
                  </Link>
                  <li className="cursor-pointer" onClick={toogleDefault}>
                    <b>Contact</b>
                  </li>
                  <li className="cursor-pointer" onClick={toogleDefault}>
                    <b>Blogs</b>
                  </li>
                </ul>

                <aside className="flex md:justify-between justify-center items-center w-full">
                  <ul
                    className="flex md:justify-end justify-center items-center gap-5 w-full md:flex-row flex-col"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    <li
                      className="cursor-pointer h-10 flex items-center justify-center border-2 border-blue-700 w-28 rounded-md "
                      onClick={toogleDefault}
                    >
                      <Link href="/LoginSignup">Log in</Link>
                    </li>
                    <li
                      className="cursor-pointer h-10 flex items-center justify-center w-28 bg-blue-700 rounded-md capitalize text-white"
                      onClick={toogleDefault}
                    >
                      <Link href="/LoginSignup">Sign up</Link>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
            <aside
              className="justify-self-end md:hidden text-3xl cursor-pointer"
              onClick={navbarToogle}
            >
              {toggle ? "X" : <BsJustify />}
            </aside>
          </aside>
        </section>
      </nav>
    </>
  );
};
export default Navbar;
