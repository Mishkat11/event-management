import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import auth from "../Firebase/firebase.config";
 




 export const AuthContext = createContext(null)

 const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser]= useState(null)
const [loading , setLoading ] = useState(true)


const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const handleUpdateProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName: name, photoURL: photo
    })
}

const logout = ()=>{
   return signOut(auth)
}


useEffect(()=>{
const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)
})
return ()=>{
    unSubscribe()
}
},[])

const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
}




 const authInfo = {
    logout,
    user,
    setUser,
    createUser,
    signIn,
    handleUpdateProfile,
    googleLogin,
    loading
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