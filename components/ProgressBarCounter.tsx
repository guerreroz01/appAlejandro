import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ProgressBar, MD3LightTheme as DefaultTheme } from "react-native-paper";

interface ProgressBarCounterInt {
  count: number;
  maxCount: number;
}

export default function ProgressBarCounter({
  count,
  maxCount,
}: ProgressBarCounterInt) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {count} / {maxCount}
      </Text>
      <ProgressBar
        progress={count / maxCount}
        style={styles.progress}
        color="#6200ee"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  progress: {
    width: 200,
    height: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "rgba(194, 183, 235, 0.7)",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
});
