import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();

    //user registretion
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);



                //send usename to firebase After creation
                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {


                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    //user login 
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {


                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    //user logout
    const logout = () => {
        setIsLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }



    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {


                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, [auth])




    return {
        user,

        registerUser,
        loginUser,
        logout,
        isLoading,
        authError

    }

}
export default useFirebase