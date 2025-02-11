// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-a3tv8iIHKG1zdZfEHOXXOlV7RpX0EwI",
  authDomain: "authreact-e9be3.firebaseapp.com",
  projectId: "authreact-e9be3",
  storageBucket: "authreact-e9be3.firebasestorage.app",
  messagingSenderId: "523757853648",
  appId: "1:523757853648:web:f1c0db357334884eda77d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,db}