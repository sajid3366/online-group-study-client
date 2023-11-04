// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLIVK_dKoC0MM4zy5yAtsV0Ihn7jk4GNQ",
  authDomain: "online-group-study-auth.firebaseapp.com",
  projectId: "online-group-study-auth",
  storageBucket: "online-group-study-auth.appspot.com",
  messagingSenderId: "488915958394",
  appId: "1:488915958394:web:982f04204a850e89c0d9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;