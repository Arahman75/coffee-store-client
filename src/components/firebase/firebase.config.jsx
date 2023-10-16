// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9bMC_ZiG6wu7pI4zRvHAkeIbZjQltqZc",
    authDomain: "coffee-store-de038.firebaseapp.com",
    projectId: "coffee-store-de038",
    storageBucket: "coffee-store-de038.appspot.com",
    messagingSenderId: "851065558918",
    appId: "1:851065558918:web:e0210e0cbeb35e11d17e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
