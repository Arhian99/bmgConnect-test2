import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCXE76FLB3H7XxOLKwpSGsUwDbNPwz8OFg",
    authDomain: "bmgconnect-test2.firebaseapp.com",
    projectId: "bmgconnect-test2",
    storageBucket: "bmgconnect-test2.appspot.com",
    messagingSenderId: "88060786626",
    appId: "1:88060786626:web:a61638fdf9a5e887f1085b"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase