// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1zYOjqd_oWscNvWIwjUNNS9K4R5nuOzs",
  authDomain: "au-cruncher.firebaseapp.com",
  projectId: "au-cruncher",
  storageBucket: "au-cruncher.appspot.com",
  messagingSenderId: "612431441692",
  appId: "1:612431441692:web:ea5aaad7d7b1e7c36994d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);