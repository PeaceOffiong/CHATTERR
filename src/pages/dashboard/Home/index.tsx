import { Body, Navsection, SearchBar } from '@/componentsUserAcc';
import { useUserAuthContext } from '@/context/userAuthContext';
import Head from "next/head";
import React, { useEffect} from "react";
import { db } from '@/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { REDUCER_ACTION_TYPE } from '@/reducers/actions';
import NavLayout from '@/componentsUserAcc/NavLayout';

const Home = () => {
  const { dataState, dispatchB, touchEnd,
    touchStart,
    touchMove, showNavsection,
    setShowNavsection } = useUserAuthContext();
  const { currentUser } = dataState;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async (token: string) => {
      try {
        const q = query(collection(db, 'Users'), where('email', '==', token));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const user = userDoc.data();
          dispatchB({ type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload: user })
          dispatchB({
            type: REDUCER_ACTION_TYPE.UPDATE_LOADING
          })
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error getting user from Firestore:', error);
        return null;
      }
    }
    if (token) {
      fetchUser(token)
      console.log(currentUser);
    }
  }, [])

  return (
    <>
      <Head>
        <title>Home \ Chatter</title>
        <meta name="description" content="Bookworm’s heaven" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
        />
      </Head>
      <section
        onTouchEnd={touchEnd}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        className={`h-full flex section-container overflow-x-hidden`}>
        <NavLayout>
          <Body showNavsection={showNavsection} setShowNavSection={setShowNavsection} />
        </NavLayout>     
      </section>
    </>
  )
}

export default Home
