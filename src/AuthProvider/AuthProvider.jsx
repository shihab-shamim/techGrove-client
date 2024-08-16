import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext=createContext(null)
const provider = new GoogleAuthProvider();
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
 
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setLoading(true)
      return signOut(auth)
  }
  const googleLogIn= ()=>{
    setLoading(true)
    return  signInWithPopup(auth, provider)
   }
  
    useEffect(()=>{
        const   unSubscibe= onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser)
           if(currentUser){
           setUser(currentUser)

            setLoading(false)
           }
    
         })
         
         return ()=>{
           return unSubscibe()
         }
             
       },[])
     
   


    const authInfo ={
        createUser,
        logIn,
        user,
        logOut,
        loading,
        googleLogIn,
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            
        </AuthContext.Provider>

    );
};

export default AuthProvider;