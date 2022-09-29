// npm i firebase
import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApsgeL5U0shbilwToTHkkIQoLURU2iRNA",
  authDomain: "expenses-75d63.firebaseapp.com",
  projectId: "expenses-75d63",
  storageBucket: "expenses-75d63.appspot.com",
  messagingSenderId: "850529543813",
  appId: "1:850529543813:web:3e8bbc03354d40bd1e6bec",
  measurementId: "G-QPLW6MHPWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
