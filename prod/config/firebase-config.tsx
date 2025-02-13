import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAE1Cw-jRtx6Us4KuZgtOb8R2dqRcSbH9I",
    authDomain: "prod-bb48d.firebaseapp.com",
    databaseURL: "",
    projectId: "prod-bb48d",
    storageBucket: "prod-bb48d.firebasestorage.app",
    messagingSenderId: "1033643825099",
    appId: "1:1033643825099:web:a764e04680bc14dde2484e",
    hostingUrl: "",
    serviceAccountId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
