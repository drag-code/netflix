// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDdrHWMPQYBoqeJvizILqX-SyRqCHS3P5k",
	authDomain: "netflix-244c6.firebaseapp.com",
	projectId: "netflix-244c6",
	storageBucket: "netflix-244c6.appspot.com",
	messagingSenderId: "91515089096",
	appId: "1:91515089096:web:2ec840bbefc8941024b5fd",
	measurementId: "G-TB1H76ETDT"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut };
export default db;
