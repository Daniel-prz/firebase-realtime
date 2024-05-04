// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYvk_KcXavyNU5nEjCy0RP0rrjJhtuMls",
  authDomain: "fir-snapshot-a84f0.firebaseapp.com",
  projectId: "fir-snapshot-a84f0",
  storageBucket: "fir-snapshot-a84f0.appspot.com",
  messagingSenderId: "1073974308843",
  appId: "1:1073974308843:web:efaaa4302a494c8bbe73ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
