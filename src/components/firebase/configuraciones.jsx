/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCunjexLvpC60yMZ2sZ5KmHF0oO5nFCt0",
    authDomain: "ia-house-6c7cf.firebaseapp.com",
    projectId: "ia-house-6c7cf",
    storageBucket: "ia-house-6c7cf.appspot.com",
    messagingSenderId: "468241721646",
    appId: "1:468241721646:web:ef72637b28c9894ad532bf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
