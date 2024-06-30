// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "fir-b0663.firebaseapp.com",
  projectId: "fir-b0663",
  storageBucket: "fir-b0663.appspot.com",
  messagingSenderId: "62101617985",
  appId: "1:62101617985:web:f5442e7e797d05efeaf5c0",
  measurementId: "G-9YSG11T1CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();