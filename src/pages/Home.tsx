import { Body, Navsection, SearchBar } from '@/componentsUserAcc';
import { useUserAuthContext } from '@/context/userAuthContext';
import Head from "next/head";
import { useEffect } from "react";
import { db } from '@/firebase/firebaseConfig';
import { REDUCER_ACTION_TYPE } from '@/reducers/actions';
import useFetchUser from '@/customHooks/usefetchUser';

type token = {

}

const Home = () => {
  const { dataState, dispatchB } = useUserAuthContext();
  const { currentUser, usersData } = dataState;

  useEffect(() => {
    const token = localStorage.getItem("token");  
    if (token) {
      (async () => {
        try {
          const specificUser = await useFetchUser(token);
          dispatchB({ type: REDUCER_ACTION_TYPE.UPDATE_CURRENT_USER, payload: specificUser });
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      })();
    }
  }, [])

  if (currentUser.length < 0) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <div>
        <Head>
          <title>Home \ Chatter</title>
          <meta name="description" content="Bookworm’s heaven" />
          <link
            rel="icon"
            href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
          />
        </Head>
        <section className='flex justify-between'>
          <Navsection />
          <SearchBar />
        </section>
      </div>
    </div>
  )
}

export default Home