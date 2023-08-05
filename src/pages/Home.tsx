import { Body, Navsection, SearchBar } from '@/componentsUserAcc';
import { useUserAuthContext } from '@/context/userAuthContext';
import Head from "next/head";
import { useEffect } from "react";
import { db } from '@/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { REDUCER_ACTION_TYPE } from '@/reducers/actions';


const Home = () => {
  const { dataState, dispatchB } = useUserAuthContext();
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

  if (currentUser.length < 0) {
    return <h1>Loading</h1>
  }

  return (
    <div className='h-full'>
        <Head>
          <title>Home \ Chatter</title>
          <meta name="description" content="Bookworm’s heaven" />
          <link
            rel="icon"
            href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
          />
        </Head>
        <section className='flex w-full h-full flex-row
        '>
          <Navsection />
          <Body />
        </section>

    </div>
  )
}

export default Home