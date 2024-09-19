import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD0m9XC79cX5AX6QVu0Et5YfbQOE5Z80KI",
  authDomain: "fir-with-react-fb5d0.firebaseapp.com",
  projectId: "fir-with-react-fb5d0",
  storageBucket: "fir-with-react-fb5d0.appspot.com",
  messagingSenderId: "1039569757979",
  appId: "1:1039569757979:web:95c43d1dbe6d33156095be",
  measurementId: "G-PDBSBNHMEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const db = getFirestore(app);
