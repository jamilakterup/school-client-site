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
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login User with email and password===============
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // login and register user with google account=======
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // update userName===========
    const updateUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    // send a verification email=============
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // sent reset password email=================
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // logOut user===============================
    const logUotUser = () => {
        return signOut(auth)
    }


    // get currently signed in user================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const uid = currentUser.uid;
                console.log(uid);
            }
            else {
                console.log('user signed out');
            }
        });

        return () => {
            return unsubscribe();
        };
    }, [])






    const authInfo = {
        user,
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