// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj3wgiFOAqnRof0wYUKC_jJAIWP4CNyW8",
  authDomain: "movie-rating-22a4b.firebaseapp.com",
  projectId: "movie-rating-22a4b",
  storageBucket: "movie-rating-22a4b.appspot.com",
  messagingSenderId: "650358701567",
  appId: "1:650358701567:web:aa88879d576a756b813bca",
  measurementId: "G-BEGXWPLGBT"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };