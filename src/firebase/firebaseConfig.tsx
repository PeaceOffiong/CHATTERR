// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBowZ3N6yCk1HlZRLAJyRlvlmpEnakQPlk",
  authDomain: "chatter-a087d.firebaseapp.com",
  projectId: "chatter-a087d",
  storageBucket: "chatter-a087d.appspot.com",
  messagingSenderId: "10180416082",
  appId: "1:10180416082:web:867468e05a08304e69058b",
  measurementId: "G-95REXFNZ0Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword };
