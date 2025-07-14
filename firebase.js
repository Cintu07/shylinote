import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWCpJi2XhiwWIM3ayFXAVUKK--M7IFsr0",
  authDomain: "note-app-1dc71.firebaseapp.com",
  projectId: "note-app-1dc71",
  storageBucket: "note-app-1dc71.appspot.com", // fixed typo
  messagingSenderId: "3544382583",
  appId: "1:3544382583:web:cabe0f5c7f5ce8e6299a72",
  measurementId: "G-TKK2R39L2Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
