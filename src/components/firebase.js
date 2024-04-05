// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh42yst0WHfbLG3V252OxZdVbNC4EVx7o",
  authDomain: "aixsense.firebaseapp.com",
  projectId: "aixsense",
  storageBucket: "aixsense.appspot.com",
  messagingSenderId: "333118386942",
  appId: "1:333118386942:web:bce21ddb50db5973116baf",
  measurementId: "G-M8KPD7TNY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;