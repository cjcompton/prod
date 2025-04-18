import React, { useState } from "react";
import { getAuth, signInWithPopup } from 'firebase/auth';
import { auth } from '@shared/config/firebase-config'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { emit } from "process";

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailSignup = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("signed up user: ", user);
        } catch (error: any) {
            console.log("Signup error: ", error.code, error.message);
        }
    };

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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 text-base w-64 text-black"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 text-base w-64 text-black"
                />

                <button
                    onClick={handleEmailSignup}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Login;