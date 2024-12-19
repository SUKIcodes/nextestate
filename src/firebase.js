// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "silken-impulse-316614.firebaseapp.com",
  projectId: "silken-impulse-316614",
  storageBucket: "silken-impulse-316614.appspot.com",
  messagingSenderId: "794057372241",
  appId: "1:794057372241:web:8136fbbaf2d4c2a706be70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
