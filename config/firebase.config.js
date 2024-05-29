
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsZ15WB5_svo7IBwSTnHeLCX7Itm4ezd0",
  authDomain: "connect-codegod.firebaseapp.com",
  databaseURL: "https://connect-codegod-default-rtdb.firebaseio.com",
  projectId: "connect-codegod",
  storageBucket: "connect-codegod.appspot.com",
  messagingSenderId: "916685416199",
  appId: "1:916685416199:web:b0426a408aa9b6cffec7a2",
  measurementId: "G-3MZCKT3PJ8"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

export { app, firebaseAuth, firestoreDB };
