// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCORBHDosu0aqE3HH8-eVqgnTuSy5zasfE",
    authDomain: "video-3b893.firebaseapp.com",
    projectId: "video-3b893",
    storageBucket: "video-3b893.appspot.com",
    messagingSenderId: "278049217598",
    appId: "1:278049217598:web:f9b487d7870748f9c3856f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;