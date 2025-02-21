import { View, Text, Pressable } from "react-native";
import React from "react";
import { useGoogleOauth } from "@/hooks/useGoogleOauth";
import { MaterialIcons } from "@expo/vector-icons";
export default function LogOutButton() {
  const { logout } = useGoogleOauth();

  async function logoutAndRedirect() {
    await logout();
  }
  return (
    <View style={{ width: "100%" }}>
      <Pressable
        onPress={logoutAndRedirect}
        style={{
          width: "70%",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#222",
          paddingHorizontal: 4,
          paddingVertical: 14,
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: 500,
            alignItems: "baseline",
          }}
        >
          Cerrar sesión
        </Text>
        <MaterialIcons name="logout" color={"#fff"} size={30} />
      </Pressable>
    </View>
  );
}
