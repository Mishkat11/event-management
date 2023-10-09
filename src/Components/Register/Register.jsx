import { useContext } from "react";
import { Link, useNavigate,    } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin";
import toast from "react-hot-toast";


const Register = () => {
    const {createUser,handleUpdateProfile,user,setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value


     
        if (!/.{6,}/.test(password)) {
            toast.error('Your password must be at least 6 characters long.  ')
            return
        }
        if (!/(?=.*[\W_])/.test(password)) {
            toast.error('It must include at least one special symbol (e.g., !, @, #, $, etc.).  ')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('It must contain at least one uppercase letter (A-Z).  ')
            return
        }

        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name,img)
                .then(()=>{
                   setUser({...user,displayName:name,photoURL:img})
                    toast.success('User created successfully')
                    // window.location.reload()
                })
                .catch(error=>{
                    toast.error(error.message)
                })
               navigate('/')
              
            })
            .catch(error => toast.error(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Welcome to Bong Productions! Join our community today to unlock a world of possibilities.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" required name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;