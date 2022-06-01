import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../context/Context';
import { auth, provider } from '../../firebase/firebase';

const Login = () => {
    
    const [isAuth, setIsAuth] = useContext(AuthContext);

    const signOut = () => {
        // auth.signOut();
        localStorage.setI()
        setIsAuth(false);
    }

    const googleSignIn = ( ) => {
        // signInWithPopup(auth, provider).then((res) => {
        // })
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
    }


  return (
    <div className="pt-16 min-h-screen">
        {isAuth && (
            <button onClick={signOut}>Sign out</button>
        )}
        <button onClick={googleSignIn}>
        Sign in with Google
        </button>
    </div>
  )
}

export default Login