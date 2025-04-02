import { useState, useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import {
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebaseConfig"; // Asegúrate de tener esto creado
import getDocumentById from "@/scripts/getData";
import addUser from "@/scripts/addUser";

WebBrowser.maybeCompleteAuthSession();

// Inicializar Firebase app y auth

export type UserInfo = {
  email: string;
  name: string;
  picture: string;
  uid: string;
  codigo: string;
  testMade: number;
  isSorteo: boolean;
};

export function useGoogleOauth() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();

  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });

  useEffect(() => {
    const signInWithGoogle = async () => {
      if (response?.type === "success" && response.authentication?.idToken) {
        try {
          const { idToken } = response.authentication;
          const provider = GoogleAuthProvider.credential(idToken);

          const userCredential = await signInWithCredential(auth, provider);
          const user = userCredential.user;

          const formattedUser: UserInfo = {
            email: user.email || "",
            name: user.displayName || "",
            picture: user.photoURL || "",
            uid: user.uid,
            codigo: user.uid,
            testMade: 0,
            isSorteo: false,
          };

          const { data } = await getDocumentById("usuarios", formattedUser.uid);

          if (!data) {
            const newUser = {
              ...formattedUser,
            };
            await addUser("usuarios", newUser, formattedUser.uid);
            await AsyncStorage.setItem("user", JSON.stringify(formattedUser));
            setUserInfo(newUser);
            /// TODO!!
            // Enviar correo de bienvenida a la app

            const response = await fetch("/sendEmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user: newUser }),
            });

            console.log(response)
            return;
          }

          await AsyncStorage.setItem("user", JSON.stringify(data));
        } catch (err) {
          console.error("Firebase sign-in error:", err);
        }
      }
    };

    signInWithGoogle();
  }, [response]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { data } = await getDocumentById("usuarios", user.uid);
        await AsyncStorage.setItem("user", JSON.stringify(data));
      }
    });
    return unsubscribe;
  }, []);

  const getStoredUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const userParsed: UserInfo = JSON.parse(userData);
        return userParsed;
      }

      return null;
    } catch (error) {
      console.error("Failed to retrieve user data:", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await auth.signOut();
      setUserInfo(null);
      router.replace("/greetings2");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return {
    userInfo,
    promptAsync,
    getStoredUser,
    logout,
  };
}
