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


  

// fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//   .then((userCredential) => {
//     // User has been successfully created, and userCredential contains information about the newly created user
//     const user = userCredential.user;

//     // Add additional data to the user in your database
//     addDoc(usersCollectionRef, {
//       email,
//       firstName,
//       lastName,
//       fullName: `${firstName} ${lastName}`,
//       interests: [],
//       Blogs: {},
//       followers: [],
//       // ... other properties you want to add
//     });

//     // You can also update the user profile with additional information
//     return user.updateProfile({
//       displayName: `${firstName} ${lastName}`,
//       // ... other properties you want to update in the user profile
//     });
//   })
//   .then(() => {
//     // Verification code can be sent here if needed
//     sendVerificationCode(this.state.email);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
