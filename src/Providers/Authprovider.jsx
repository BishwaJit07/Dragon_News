import React from 'react';
import { getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";import { createContext } from 'react';
import app from '../firebase/firebase';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser] = useState(null)
     const [loading, setLoading] = useState(true);
     const creatUser = (email,password)=>{ setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
     };

     const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  }

     const logOut = (()=>{
      setLoading(true);
      return signOut(auth);
     })

     useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        console.log(loggedUser);
        setUser(loggedUser);
        setLoading(false)
      })
      return ()=>{
        unsubscribe();
      }
     },[])

    const authInfo= {
        user,
        loading,
        creatUser,
        signIn,
        logOut

    }
    return (
      <AuthContext.Provider value={authInfo}>
                { children}
      </AuthContext.Provider>
    );
};

export default Authprovider;