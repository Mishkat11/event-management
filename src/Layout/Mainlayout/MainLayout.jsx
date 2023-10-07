import { Outlet } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-[98%] mx-auto font-Nunito">
            <Nav></Nav>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;