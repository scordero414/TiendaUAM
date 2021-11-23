const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKkSqZspG4xaPqG5Q-ihYITQi9Vzr6RU",
  authDomain: "tienda-uam.firebaseapp.com",
  projectId: "tienda-uam",
  storageBucket: "tienda-uam.appspot.com",
  messagingSenderId: "546473739872",
  appId: "1:546473739872:web:8912d553b921c543df2505",
  measurementId: "G-8EQYN0BZCT"
};

const fire = firebase.initializeApp(firebaseConfig);

const store = fire.firestore()

export { store }


