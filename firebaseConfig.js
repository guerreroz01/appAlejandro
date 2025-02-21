// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const uri_facebook = "https://univia-b5034.firebaseapp.com/__/auth/handler";
const uri_apple = "https://univia-b5034.firebaseapp.com/__/auth/handler";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUmb2Z-9UOP8yYeR7IfNasY3ZaaMuC0ps",
  authDomain: "univia-642c8.firebaseapp.com",
  projectId: "univia-642c8",
  storageBucket: "univia-642c8.firebasestorage.app",
  messagingSenderId: "1021085977238",
  appId: "1:1021085977238:web:2c2449d4f04dc8bf8ed0b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const androidClientId = process.env.ANDROID_CLIENT_ID;
