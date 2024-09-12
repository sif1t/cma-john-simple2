// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpA1YI6zSWjUdoGcsIujh3fMZC1YEq-L8",
  authDomain: "ema-jonh-firbase-auth.firebaseapp.com",
  projectId: "ema-jonh-firbase-auth",
  storageBucket: "ema-jonh-firbase-auth.appspot.com",
  messagingSenderId: "1028572046607",
  appId: "1:1028572046607:web:a99d93d9fedd21f5154a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;