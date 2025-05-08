import { View, Text, Pressable } from "react-native";
import React from "react";
import appleAuth from "@invertase/react-native-apple-authentication";
import { FontAwesome } from "@expo/vector-icons";
import {
  getAuth,
  signInWithCredential,
  OAuthProvider,
  updateProfile,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Importa tus funciones personalizadas
import getDocumentById  from "@/scripts/getData";
import addUser from "@/scripts/addUser";
import { UserInfo } from "@/hooks/useGoogleFirebaseOauth"; // Ajusta el path según donde tengas definido tu tipo
import { useRouter } from "expo-router";

export default function LogInWithIOSButton() {
  const auth = getAuth();
  const provider = new OAuthProvider("apple.com");
  const router = useRouter();

  async function handlePress() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const { identityToken, nonce, fullName, email, user } =
        appleAuthRequestResponse;

      if (!identityToken) {
        throw new Error("Apple Sign-In failed - no identity token returned");
      }

      const credential = provider.credential({
        idToken: identityToken,
        rawNonce: nonce,
      });

      const userCredential = await signInWithCredential(auth, credential);
      const firebaseUser = userCredential.user;

      // Extraer datos del usuario
      const displayName =
        firebaseUser.displayName ||
        `${fullName?.givenName || ""} ${fullName?.familyName || ""}`.trim();

      const formattedUser: UserInfo = {
        email: firebaseUser.email || email || "", // fallback si no se recibe directamente
        name: displayName,
        picture: firebaseUser.photoURL || "",
        uid: firebaseUser.uid,
        codigo: firebaseUser.uid,
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

        // Enviar correo
        await fetch("/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: newUser }),
        });
      } else {
        await AsyncStorage.setItem("user", JSON.stringify(data));
      }

      console.log("Inicio de sesión con Apple exitoso");
      router.replace("/(drawer)/home");
    } catch (error) {
      console.log("Error al iniciar sesión con Apple:", error);
    }
  }

  return (
    <Pressable
      style={{
        width: "80%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        paddingVertical: 6,
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 5,
      }}
      onPress={handlePress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: 240,
        }}
      >
        <FontAwesome name="apple" color={"#fff"} size={30} />
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
          Inicia sesión con Apple
        </Text>
      </View>
    </Pressable>
  );
}
