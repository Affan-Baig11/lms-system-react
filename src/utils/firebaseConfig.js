// src/utils/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDm42wdzYmiRVVwnnmAPQ2SjfiHjKMNYyU",
    authDomain: "lms-system-5c150.firebaseapp.com",
    projectId: "lms-system-5c150",
    storageBucket: "lms-system-5c150.firebasestorage.app",
    messagingSenderId: "228762797137",
    appId: "1:228762797137:web:5a0902e49ebc8882186470",
    measurementId: "G-910B1RCXQC"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
