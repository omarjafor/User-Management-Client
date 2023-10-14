import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
        </div>
    );
};

export default Update;