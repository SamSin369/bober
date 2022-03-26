// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ6xCgGIc1n6WwF8C4g54AabUJnwxcZdU",
  authDomain: "bober-1abe8.firebaseapp.com",
  databaseURL: "https://bober-1abe8-default-rtdb.firebaseio.com",
  projectId: "bober-1abe8",
  storageBucket: "bober-1abe8.appspot.com",
  messagingSenderId: "746639065684",
  appId: "1:746639065684:web:a685aa19e05937669063c1",
  measurementId: "G-FQNHJXPKMB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const contractRef = collection(db, 'events');

export const auth = getAuth(app);
















