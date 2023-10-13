import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();

    const handleDelete = ( _id ) => {
        console.log(_id);
    }

    return (
        <div>
            <h2> {user.length} </h2>
            <div>
                {
                    user.map(usr => <p key={usr._id}> {usr.name} : {usr.email} <button
                        onClick={() => handleDelete(usr._id)}
                    >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default User;