// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "billbuddy-73bb6.firebaseapp.com",
    projectId: "billbuddy-73bb6",
    storageBucket: "billbuddy-73bb6.firebasestorage.app",
    messagingSenderId: "874504995127",
    appId: "1:874504995127:web:01db7c62fa2278088e1ab2",
    measurementId: "G-J7226P01VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);