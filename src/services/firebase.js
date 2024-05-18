
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCmMXn3H5l5oqX7FfbwQFRmnw1QljSuOQ0",
  authDomain: "react-netflix-clone-2fc4c.firebaseapp.com",
  projectId: "react-netflix-clone-2fc4c",
  storageBucket: "react-netflix-clone-2fc4c.appspot.com",
  messagingSenderId: "115239195846",
  appId: "1:115239195846:web:7fa47d0ecf5a4cc1b633c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);