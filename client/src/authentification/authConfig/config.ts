import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

    const firebaseConfig = {
        apiKey: "AIzaSyCX8TGhBYmaOmre4DYS2dXKtMD7Xify-P8",
        authDomain: "syt-auth-8563b.firebaseapp.com",
        projectId: "syt-auth-8563b",
        storageBucket: "syt-auth-8563b.appspot.com",
        messagingSenderId: "817167374562",
        appId: "1:817167374562:web:dd5c20fafde6d7534ee6bb"
    };
    

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();