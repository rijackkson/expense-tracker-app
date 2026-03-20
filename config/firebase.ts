import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfjjtbQcVYGuqRhdzw_eNB7Z4TpIhH8o4",
  authDomain: "expense-tracker-30e88.firebaseapp.com",
  projectId: "expense-tracker-30e88",
  storageBucket: "expense-tracker-30e88.firebasestorage.app",
  messagingSenderId: "1057604097070",
  appId: "1:1057604097070:web:3146de27541258efbabbbf"
};

const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// db
export const firestore = getFirestore(app);