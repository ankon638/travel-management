// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxUh69XRdIzFn_B-dzwKs-3a9lHyvLuLg",
    authDomain: "travel-service-af15b.firebaseapp.com",
    projectId: "travel-service-af15b",
    storageBucket: "travel-service-af15b.appspot.com",
    messagingSenderId: "99374643107",
    appId: "1:99374643107:web:b67d6d373e176dcd260c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;