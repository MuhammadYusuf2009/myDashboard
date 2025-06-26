import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIyXcbytUn6zpjJzP-fwF2etvRNMtTIog",
  authDomain: "login-997f1.firebaseapp.com",
  projectId: "login-997f1",
  storageBucket: "login-997f1.firebasestorage.app",
  messagingSenderId: "509371067008",
  appId: "1:509371067008:web:0b72bb66e5eca3f529d465",
  measurementId: "G-HFHZXHBHLL",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
