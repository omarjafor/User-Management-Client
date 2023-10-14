import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email}
        console.log(user);
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