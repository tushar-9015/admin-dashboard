// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDmGrUZJ23ob2z1AX4G4KrOt6mp3N19mp4",
  authDomain: "dashboard-38c0c.firebaseapp.com",
  projectId: "dashboard-38c0c",
  storageBucket: "dashboard-38c0c.appspot.com",
  messagingSenderId: "1018463275548",
  appId: "1:1018463275548:web:453e9372adb81bc8df6dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
export const auth = getAuth();