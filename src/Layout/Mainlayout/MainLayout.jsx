import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="max-w-[95%] mx-auto font-Nunito">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;