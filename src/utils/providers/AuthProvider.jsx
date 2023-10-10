import {createContext} from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import {app} from "../../config/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({children}) => {


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


    const user = {dName: 'jamil'}

    const authInfo = {
        user,
        registerUser,
        loginUser,
        loginWithGoogle,
        updateUserName
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;