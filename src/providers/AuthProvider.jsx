import React, { createContext, useEffect } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase_config';
import { signOut } from 'firebase/auth';

 export const AuthContext = createContext(null); 
  const auth = getAuth(app);
 console.log(auth);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUser = (email, password) => {
    setLoading(true);
     return createUserWithEmailAndPassword (auth, email, password);

}  

const signIn = (email, password) => {
    setLoading(true);
     return  signInWithEmailAndPassword(auth, email, password);
}

const logOut = () => {
    return signOut(auth);
}

// observer user auth state 
useEffect (()=> {
   const unsubscribe= onAuthStateChanged (auth, currentUser => {
          setUser(currentUser);
            setLoading (false);
     });
     // stop observing while unmounting
      return () => {
         return unsubscribe();
      }
}, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;