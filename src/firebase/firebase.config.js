// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYW0fX5PfFJ6FigmWIMPN-ymmx4zhqxDE",
    authDomain: "dragon-news-auth-34305.firebaseapp.com",
    projectId: "dragon-news-auth-34305",
    storageBucket: "dragon-news-auth-34305.firebasestorage.app",
    messagingSenderId: "625380837715",
    appId: "1:625380837715:web:d4624058c9b821fa1239a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);