import Firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import "firebase/compat/auth"
import { getAuth } from "firebase/auth";

// import { seedDatabase } from  '../seed'

const config = {
    apiKey: "AIzaSyD2e948JRW5kLOa5HHMPaao7rA2fnJZzY4",
    authDomain: "workout-journal-8b694.firebaseapp.com",
    projectId: "workout-journal-8b694",
    storageBucket: "workout-journal-8b694.appspot.com",
    messagingSenderId: "418552834483",
    appId: "1:418552834483:web:44b15355aab054d02143c6",
    measurementId: "G-0LFZ91HV80"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)
export const auth = getAuth(firebase);
export { firebase, FieldValue};