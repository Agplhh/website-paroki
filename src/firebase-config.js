// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvlrrfkfcvKV4ODMo4E9yNByN0Gc-mLeI",
  authDomain: "website-parokibalai.firebaseapp.com",
  projectId: "website-parokibalai",
  storageBucket: "website-parokibalai.firebasestorage.app",
  messagingSenderId: "605416157105",
  appId: "1:605416157105:web:7b35b5ffe8f399a8369790"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };