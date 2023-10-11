import {createContext, useEffect, useState} from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import {app} from "../../config/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create User With Email And Password=============
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login User with email and password===============
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login and register user with google account=======
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // update userName===========
    const updateUserName = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    // send a verification email=============
    const verifyEmail = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    // sent reset password email=================
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // logOut user===============================
    const logUotUser = () => {
        setLoading(true);
        return signOut(auth)
    }


    // get currently signed in user================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const uid = currentUser.uid;
                console.log(uid);
                setLoading(false);
            }
            else {
                console.log('user signed out');
            }
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };
    }, [])






    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        loginWithGoogle,
        updateUserName,
        verifyEmail,
        resetPassword,
        logUotUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;