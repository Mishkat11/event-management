import { useContext } from "react";

import toast from "react-hot-toast";
import {  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {googleLogin } = useContext(AuthContext)
    const handleLogin =(media)=>{
        media()
        .then(()=>{
            navigate(location?.state ? location.state : '/' )
            toast.success('user created successfully')
        })
        
        .catch(error=>{
        toast.error(error.message)
        })
    }
    return (
        <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button onClick={()=>handleLogin(googleLogin)}
                 className="btn btn-neutral btn-sm  btn-outline">Google</button>
               
            </div>
        </>
    );
};

export default SocialLogin;