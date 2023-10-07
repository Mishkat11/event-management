import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import {  GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../Firebase/firebase.config";
 




 export const AuthContext = createContext(null)

 const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser]= useState(null)


const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
}




 const authInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
 }



    return (
      <AuthContext.Provider value={authInfo} >
 {children}
      </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;