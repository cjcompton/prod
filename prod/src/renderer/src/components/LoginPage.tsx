import React from "react";
import { getAuth, signInWithPopup } from 'firebase/auth';
import '/../config/firebase-config';


const Login = () => {
    return(
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-2/4 flex flex-col justify-center items-center">
                <p className="text-4xl">Welcome To</p>
                <p className="text-6xl">PROD</p>
            </div>
            <div className="w-full h-2/4 flex flex-col items-center text-2xl">
                <p>Login Method:</p>
                <p>Google</p>
                <p>Phone</p>
                <p>Email</p>
            </div>
        </div>
    );
}

export default Login;