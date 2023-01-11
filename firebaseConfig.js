import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO::: CHANGE THESE TO ENVIROMENTAL VARIABLES FOR PRODUCTION!!!
const firebaseConfig = {
    apiKey: "AIzaSyCXE76FLB3H7XxOLKwpSGsUwDbNPwz8OFg",
    authDomain: "bmgconnect-test2.firebaseapp.com",
    projectId: "bmgconnect-test2",
    storageBucket: "bmgconnect-test2.appspot.com",
    messagingSenderId: "88060786626",
    appId: "1:88060786626:web:a61638fdf9a5e887f1085b"
};

let app;
if (getApps.length === 0) {
    app = initializeApp(firebaseConfig);
}
else {
    app = getApp(); // double check this syntax
}





export const auth = getAuth(app);

export default app;