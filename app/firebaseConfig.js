import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Ik-eir4epe_odT-srEhvtkAlYu0SBeE",
  authDomain: "coinbot-628b3.firebaseapp.com",
  projectId: "coinbot-628b3",
  storageBucket: "coinbot-628b3.appspot.com",
  messagingSenderId: "1077577464730",
  appId: "1:1077577464730:web:92586174ab55fd16281823",
  measurementId: "G-EE6PLESFF4",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
