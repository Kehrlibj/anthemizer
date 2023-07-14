import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCFxf_gcqdh9RT5paoCqkNdVAv6C6G5dqw",
  authDomain: "virtjukebox.firebaseapp.com",
  databaseURL: "https://virtjukebox-default-rtdb.firebaseio.com",
  projectId: "virtjukebox",
  storageBucket: "virtjukebox.appspot.com",
  messagingSenderId: "990105631353",
  appId: "1:990105631353:web:c45315b0e61b038f2ab2a8",
  measurementId: "G-DLDFDX97WF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export { app, analytics, auth, db };

