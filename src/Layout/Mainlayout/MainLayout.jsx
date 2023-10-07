import { Outlet } from "react-router-dom";
import Nav from "../../Components/Navbar/Nav";


const MainLayout = () => {
    return (
        <div className="max-w-[98%] mx-auto font-Nunito">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;