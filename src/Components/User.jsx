import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();

    return (
        <div>
            <h2> {user.length} </h2>
        </div>
    );
};

export default User;