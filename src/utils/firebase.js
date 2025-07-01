// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1pGeLvABtM-CyeCV4ofY9KfVgn-lew2I",
  authDomain: "cinemasphere-f217c.firebaseapp.com",
  projectId: "cinemasphere-f217c",
  storageBucket: "cinemasphere-f217c.firebasestorage.app",
  messagingSenderId: "102628248557",
  appId: "1:102628248557:web:2ebe6bc7e27c22d71675e4",
  measurementId: "G-PH668NXMWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();