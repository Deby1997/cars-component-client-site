// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBettXKtdBrFYaMtwfNZFid3aZAEPUMLTw",
  authDomain: "parts-cars.firebaseapp.com",
  projectId: "parts-cars",
  storageBucket: "parts-cars.appspot.com",
  messagingSenderId: "271994359512",
  appId: "1:271994359512:web:f2bf25748c2b1e44e151ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;