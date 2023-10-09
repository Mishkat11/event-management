import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-400">
         <div>
         <h1 className="text-9xl">404 </h1><p className="text-center">Page Not found</p>
         <Link  to={'/'}> <p className="underline text-center text-blue-800">Go back to home</p> </Link>
         </div>
        </div>
    );
};

export default Error;