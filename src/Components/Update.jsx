import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email}

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('Updated Successful')
            }
        })
    }

    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={loadedUser.name} className="border mt-2 border-solid border-black" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser.email} className="border border-solid my-2 border-black" />
                <br />
                <input type="submit" value="Update" className="border border-solid p-2 mb-2 rounded-lg border-black" />
            </form>
        </div>
    );
};

export default Update;