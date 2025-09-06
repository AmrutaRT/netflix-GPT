// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXv8vAcNBjJ-fKg0DufUVvOx87NZqIPzU",
  authDomain: "netflixgpt-ffa37.firebaseapp.com",
  projectId: "netflixgpt-ffa37",
  storageBucket: "netflixgpt-ffa37.firebasestorage.app",
  messagingSenderId: "626275234380",
  appId: "1:626275234380:web:f39fecef0367138068bae9",
  measurementId: "G-489GDWY9ZC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);