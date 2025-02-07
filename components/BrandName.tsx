import { View, Text } from "react-native";
import React from "react";

export default function BrandName() {
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Text
        style={{
          fontSize: 22,
          color: "#FFF",
          fontFamily: "Spectral",
        }}
      >
        UNIV
      </Text>
      <Text
        style={{
          fontSize: 32,
          color: "#75d8fc",
          fontFamily: "Spectral",
        }}
      >
        IA
      </Text>
    </View>
  );
}
