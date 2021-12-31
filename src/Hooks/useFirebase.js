import InitializeFirebase from '../Pages/Login/Firebase/firebase.init'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
InitializeFirebase()

const useFirebse = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(user)
                setUser(user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage)
            });

    }

    //observer user state
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    return {
        signInWithGoogle,
        user,
        error,
        setUser,
        logout,

    }
}
export default useFirebse; 