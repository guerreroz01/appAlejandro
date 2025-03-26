import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useGoogleOauth } from "@/hooks/useGoogleFirebaseOauth";
import { FontAwesome } from "@expo/vector-icons";

export default function LogInWithIOSButton() {
  const { promptAsync, userInfo } = useGoogleOauth();
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
        <FontAwesome name="apple" color={"#fff"} size={30} />
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>
          Inicia sesión con Apple
        </Text>
      </View>
    </Pressable>
  );
}
