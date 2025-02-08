import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiEOOtM2oiEDcY-D7xe3HPJrtIJ1Nv4BQ",
  authDomain: "portfolio-9cb4d.firebaseapp.com",
  projectId: "portfolio-9cb4d",
  storageBucket: "portfolio-9cb4d.firebasestorage.app",
  messagingSenderId: "737298760011",
  appId: "1:737298760011:web:5405a3601d23c67bd028ce",
  measurementId: "G-FYFCRSF4H8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
