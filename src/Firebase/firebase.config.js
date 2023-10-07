// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRFIShrSMCu9-WnN88dADc_47srz1-8Y",
  authDomain: "event-management-dbf97.firebaseapp.com",
  projectId: "event-management-dbf97",
  storageBucket: "event-management-dbf97.appspot.com",
  messagingSenderId: "378846633604",
  appId: "1:378846633604:web:6dbc636e54ab4dd3beecd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth