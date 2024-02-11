import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const Authcontext = createContext();

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();
const UserContext = ({children}) => {
    const [user, setUser] = useState({}) 
    const [loading, setLoading] = useState(true);
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signinGoogle = () =>{
        return signInWithPopup (auth, Provider);
    }
    const logout = () =>{
        return signOut(auth);
    }
    const facebooklogin = () =>{
        return signInWithPopup(auth, fProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authinfo = {user,  createUser, signIn, logout, signinGoogle, facebooklogin, loading};
   
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;