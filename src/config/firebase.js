// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpKwmet8bqttvqzkS0Fmf0qSlBb1tAEWk",
  authDomain: "contactapp-8cffd.firebaseapp.com",
  projectId: "contactapp-8cffd",
  storageBucket: "contactapp-8cffd.appspot.com",
  messagingSenderId: "344871054670",
  appId: "1:344871054670:web:ac80d36a78e3271bf9821f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
