import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useGoogleOauth } from "@/hooks/useGoogleFirebaseOauth";

export default function LogInWithGoogleButton() {
  const { promptAsync, userInfo } = useGoogleOauth();
  return (
    <Pressable
      style={{
        width: "80%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        paddingVertical: 6,
        alignSelf: "center",
        marginBottom: 20,
        flexDirection: "row",
        gap: 20,
        borderRadius: 5,
      }}
      onPress={() => {
        promptAsync();
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          width: 240,
        }}
      >
        <Image
          source={require("@/assets/images/google.png")}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <Text style={{ color: "#333", fontSize: 18, fontWeight: 500 }}>
          Inicia sesión con Google
        </Text>
      </View>
    </Pressable>
  );
}
