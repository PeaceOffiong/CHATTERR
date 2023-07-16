import {
  Navbar,
  HomeBody,
  About,
  WhyChatter,
  Review,
  Others,
  Footer
} from "../components";
import { REDUCER_ACTION_TYPE } from "../reducers/actions";
import { useGlobalContext } from "../context/globalContext";
import { useCallback, useEffect } from "react";

export default function IndexPage() {
  const { state, dispatch } = useGlobalContext();
  const { isNavbarFixed } = state;

  const fixNavBar = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        dispatch({ type: REDUCER_ACTION_TYPE.FIXNAVBAR });
      } else {
        dispatch({ type: REDUCER_ACTION_TYPE.NAVBARDEF });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    fixNavBar();
    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, [isNavbarFixed, fixNavBar]);

  return (
    <main>
      <section id="home" className="h-screen ease-linear">
        <Navbar />
        <HomeBody />
      </section>
      <section id="about" className="h-auto ">
        <article className="w-full md:flex items-center justify-center p-8 gap-8">
          <About />
        </article>
        <article className="flex items-center justify-center  p-6 flex-col">
          <WhyChatter />
        </article>
      </section>
      <section className="h-full">
        <article className="h-auto bg-yellow-100 bg-opacity-50 flex flex-col items-center justify-center p-16 md:p-24 gap-10 md:flex-row">
          <Review />
        </article>
        <article className="flex justify-center items-center h-full md:h-96 gap-10 flex-col md:flex-row">
          <Others />
        </article>
      </section>
      <Footer />
    </main>
  );
}
