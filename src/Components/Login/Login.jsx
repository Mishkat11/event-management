import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault()
        
       
        const email = e.target.email.value
       
        const password = e.target.password.value
        
        signIn(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>console.error(error))
        
            }
    return (
        <div>
                       <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Your security is important to us. Remember to keep your password confidential.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                       <div className="card-body">
                       <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                        </form>
                          <SocialLogin></SocialLogin>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;