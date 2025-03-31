import { View, Text } from "react-native";
import React from "react";

type BrandNameProps = {
  fontSize?: number;
  fontBigSize?: number;
};

export default function BrandName({ fontSize, fontBigSize }: BrandNameProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Text
        style={{
          fontSize: fontSize ? fontSize : 22,
          color: "#FFF",
          fontFamily: "Spectral",
        }}
      >
        UNIV
      </Text>
      <Text
        style={{
          fontSize: fontBigSize ? fontBigSize : 32,
          color: "#75d8fc",
          fontFamily: "Spectral",
        }}
      >
        IA
      </Text>
    </View>
  );
}
