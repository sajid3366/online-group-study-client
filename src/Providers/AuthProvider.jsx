import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const logIn = (email, password) => {
        
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignin =()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [auth])

    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        logOut,
        googleSignin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;