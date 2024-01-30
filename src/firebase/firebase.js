// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbhxEnakfmzlPokAxbEUY9cnT8fmFaAZY',
  authDomain: 'social-media-app-7c4e6.firebaseapp.com',
  projectId: 'social-media-app-7c4e6',
  storageBucket: 'social-media-app-7c4e6.appspot.com',
  messagingSenderId: '794039716874',
  appId: '1:794039716874:web:c20be3a2d7b2d771e0a3f3',
  measurementId: 'G-7VZ465WQ6E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
