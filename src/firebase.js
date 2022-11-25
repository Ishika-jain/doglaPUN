// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_UfKsPjRAoEBHWi85nKmZ5J9jZe694XE",
  authDomain: "bookyourdoc-e9d9b.firebaseapp.com",
  projectId: "bookyourdoc-e9d9b",
  storageBucket: "bookyourdoc-e9d9b.appspot.com",
  messagingSenderId: "430644257924",
  appId: "1:430644257924:web:a092850819e74b45e48ed1",
  measurementId: "G-8L2TRPCFF9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
