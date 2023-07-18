import { useRouter } from 'next/router';

const UserPage = () => {
    const router = useRouter();
    const { username } = router.query;

    return (
        <div>
            <h1>User: {username}</h1>
            <p>Trying my best here</p>
        </div>
    );
};

export default UserPage;