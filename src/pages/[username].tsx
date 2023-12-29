import NavLayout from '@/componentsUserAcc/NavLayout';
import { useRouter } from 'next/router';
import Head from "next/head";
import { useUserAuthContext } from '@/context/userAuthContext';

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  console.log(username);
  const { touchEnd,
    touchStart,
    touchMove, showNavsection,
    setShowNavsection } = useUserAuthContext();

  return (
    <div>
      <Head>
        <title>{`${username}'s profile`}</title>
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
        className={`h-full flex section-container overflow-x-hidden`}
      >
        <NavLayout>
          <p>{username}&apos;s profile</p>
        </NavLayout>
      </section>
    </div>
  );
};

export default UserProfile;