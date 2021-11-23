// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBGKkSqZspG4xaPqG5Q-ihYITQi9Vzr6RU",
  authDomain: "tienda-uam.firebaseapp.com",
  projectId: "tienda-uam",
  storageBucket: "tienda-uam.appspot.com",
  messagingSenderId: "546473739872",
  appId: "1:546473739872:web:8912d553b921c543df2505",
  measurementId: "G-8EQYN0BZCT"
});

const db = getFirestore();

export { db }


