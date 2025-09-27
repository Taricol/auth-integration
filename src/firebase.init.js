// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//Danger
const firebaseConfig = {
  apiKey: "AIzaSyAYY1idDqVakDNeGeMhTDzX1bb2aZhgepQ",
  authDomain: "auth-intergration-c58ed.firebaseapp.com",
  projectId: "auth-intergration-c58ed",
  storageBucket: "auth-intergration-c58ed.firebasestorage.app",
  messagingSenderId: "429305761585",
  appId: "1:429305761585:web:6ad8c35d9e082e1253ea10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);