import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyApnFbHrHSmPo5cYV8XbIWGiN5loubyI84",
  authDomain: "challenge-16dd2.firebaseapp.com",
  projectId: "challenge-16dd2",
  storageBucket: "challenge-16dd2.appspot.com",
  messagingSenderId: "147505619319",
  appId: "1:147505619319:web:9ac5e003bb228cb8c68172",
  measurementId: "G-PPPQ8G1ZXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
