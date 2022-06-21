// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWPeUo_5tDpfJncb9e5i_Fc0ABEbX_BG8",
  authDomain: "attireallure-5e60a.firebaseapp.com",
  projectId: "attireallure-5e60a",
  storageBucket: "attireallure-5e60a.appspot.com",
  messagingSenderId: "538920666962",
  appId: "1:538920666962:web:6eb3572002db73a4dadc8b",
  measurementId: "G-WB1QZHFTSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;