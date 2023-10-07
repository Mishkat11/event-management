import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const navLink = <div className="text-xl space-x-2">
        <NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "  underline btn btn-sm btn-ghost  text-blue-600 font-semibold" : ""
            }>Home </NavLink>
        <NavLink to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline btn btn-sm btn-ghost  text-blue-600 font-semibold" : ""
            }> Contact </NavLink>
        <NavLink to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline btn btn-sm btn-ghost  text-blue-600 font-semibold " : ""
            }> About</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-[120px]" src="/src/assets/6QFKAX-LogoMakr.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navLink}

                    </ul>
                </div>
                <div className="navbar-end">
                  <Link to={'/login'}>  <button className="btn btn-sm hover:bg-blue-400 hover:text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;