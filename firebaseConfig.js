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
  apiKey: "AIzaSyDigHXAgTc_R5sJSHxo_G0SwiYVh33seM0",
  authDomain: "univia-b5034.firebaseapp.com",
  projectId: "univia-b5034",
  storageBucket: "univia-b5034.firebasestorage.app",
  messagingSenderId: "236180547128",
  appId: "1:236180547128:web:b0971d98a3d7eec00ce8cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
