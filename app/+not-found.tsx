import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.link}>
          Go back to Home Screen
        </Link>
      </View>
    </>
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
  link: {
    color: "#000",
    paddingVertical: 10,
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
