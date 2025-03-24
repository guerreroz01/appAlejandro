// firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  Auth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBUmb2Z-9UOP8yYeR7IfNasY3ZaaMuC0ps",
  authDomain: "univia-642c8.firebaseapp.com",
  projectId: "univia-642c8",
  storageBucket: "univia-642c8.appspot.com", // ← fix `.app` to `.appspot.com`
  messagingSenderId: "1021085977238",
  appId: "1:1021085977238:web:55feecfb795df43f8ed0b7",
};

// Initialize app once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize auth with AsyncStorage persistence once
let auth: Auth;

if (!getApps().length) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  }
}

// Firestore
const db = getFirestore(app);

export { app, db, auth };
