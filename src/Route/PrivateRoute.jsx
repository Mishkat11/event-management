import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
    const {loading,user} =useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <>
        <h1 className="min-h-screen flex justify-center items-center "><span className=" loading loading-spinner loading-lg"></span></h1>
        </>
    }

    if(user){
        return children
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};
PrivateRoute.propTypes ={
    children:PropTypes.node
}
export default PrivateRoute;