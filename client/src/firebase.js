// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-page.firebaseapp.com",
  projectId: "mern-page",
  storageBucket: "mern-page.appspot.com",
  messagingSenderId: "853722763665",
  appId: "1:853722763665:web:df1cec90a22491e3f14a30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
