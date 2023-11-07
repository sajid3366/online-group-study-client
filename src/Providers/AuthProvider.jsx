import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {user:userEmail}
            setUser(currentUser);
            setLoading(false)

            if(currentUser){
                axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials: true})
                .then(res => {
                    console.log("token response", res.data);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [auth, user?.email])

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