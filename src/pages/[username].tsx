import { Body, Navsection, SearchBar } from '@/componentsUserAcc';
import { useRouter } from 'next/router';
import Head from "next/head";

const UserPage = () => {
    const router = useRouter();
    const { username } = router.query;
    console.log(username);

    return (
        <div>
            <Head>
                <title>{`${username}'s profile` }</title>
                <meta name="description" content="Bookworm’s heaven" />
                <link
                    rel="icon"
                    href="https://res.cloudinary.com/du8oaagwi/image/upload/v1686066271/favicon_nmm0r9.png"
                />
            </Head>
            <p>{username }'s profile</p>
        </div>
    );
};

export default UserPage;