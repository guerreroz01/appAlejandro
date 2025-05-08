// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  //@ts-ignore
  getReactNativePersistence,
  Auth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUmb2Z-9UOP8yYeR7IfNasY3ZaaMuC0ps",
  authDomain: "univia-642c8.firebaseapp.com",
  projectId: "univia-642c8",
  storageBucket: "univia-642c8.appspot.com",
  messagingSenderId: "1021085977238",
  appId: "1:1021085977238:web:55feecfb795df43f8ed0b7",
};

// Init App
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Singleton para evitar doble inicialización
let auth: Auth;
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

const db = getFirestore(app);

export { app, auth, db };
