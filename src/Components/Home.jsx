import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/user')
        .then( res => res.json())
        .then( data => setUsers(data))
    } , [])

    const handleAddUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email}
        console.log(user);
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then( data => {
            console.log(data)
            if(data.insertedId){
                alert('User added successful');
            }
            const newUsers = [...users, data]
            
        })
    }

    return (
        <div>
            <Link to='/user'>User</Link>
            <h1 className="text-3xl font-bold">User Management Client</h1>
            <h1 className="text-xl font-bold">User Length : {users.length} </h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" className="border mt-2 border-solid border-black" />
                <br />
                <input type="email" name="email" id="" className="border border-solid my-2 border-black" />
                <br />
                <input type="submit" value="Submit" className="border border-solid p-2 mb-2 rounded-lg border-black" />
            </form>
            {
                users.map( user => <li key={user.id}> {user.id} : {user.name} : {user.email} </li>)
            }
        </div>
    );
};

export default Home;