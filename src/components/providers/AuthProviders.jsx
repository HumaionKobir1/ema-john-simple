import React, { createContext, useContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    

    // Sign up / Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in / log in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }


    // sign out /  log out
    const logOut = () => {
        return signOut(auth);
    }



    

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;