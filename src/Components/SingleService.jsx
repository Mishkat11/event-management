import { useLoaderData } from "react-router-dom";


const SingleService = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            hey champ
        </div>
    );
};

export default SingleService;