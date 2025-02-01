import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
