
import { View, Text, Pressable } from "react-native";
import React from "react";
import appleAuth, {
  AppleRequestOperation,
  AppleRequestScope,
} from "@invertase/react-native-apple-authentication";
import { FontAwesome } from "@expo/vector-icons";
import { getAuth, signInWithCredential, OAuthProvider, updateProfile } from "firebase/auth";

///TODO! implementar con una MAC


export default function LogInWithIOSButton() {
  const auth = getAuth();
  const provider = new OAuthProvider("apple.com");

  async function handlePress() {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleRequestOperation.LOGIN,
        requestedScopes: [AppleRequestScope.EMAIL, AppleRequestScope.FULL_NAME],
      });

      const { identityToken, nonce, fullName, user } = appleAuthRequestResponse;

      if (!identityToken) {
        throw "Apple Sign-In failed - no identity token returned";
      }

      const credential = provider.credential({
        idToken: identityToken,
        rawNonce: nonce,
      });

      const result = await signInWithCredential(auth, credential);

      // Guardar nombre si es nuevo usuario
      if (fullName) {
        const displayName = `${fullName.givenName || ""} ${fullName.familyName || ""}`.trim();
        await updateProfile(result.user, { displayName });
      }

      console.log("Inicio de sesión exitoso:", result);
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

