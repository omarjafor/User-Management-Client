import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);

    const handleDelete = ( _id ) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        } )
        .then( res => res.json())
        .then( data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully')
                const remaining = user.filter(usr => usr._id !== _id);
                setUser(remaining);
            }
        })
    }

    return (
        <div>
            <h2> {user.length} </h2>
            <div>
                {
                    user.map(usr => <p key={usr._id}> {usr.name} : {usr.email} 
                    <Link to={`/update/${usr._id}`}>
                        <button className='p-1 m-2 bg-blue-500'> Update </button>
                    </Link>
                    <button className='p-1 m-2 bg-red-500'
                        onClick={() => handleDelete(usr._id)}
                    >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default User;