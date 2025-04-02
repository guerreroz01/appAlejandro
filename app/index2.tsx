import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Animated, StyleSheet, View } from "react-native";
import AnimatedText from "@/components/AnimationText";
import { Colors } from "@/constants/Colors";
import ButtonComponent from "@/components/ButtonComponent";
import LottieView from "lottie-react-native";

export default function Index() {
  const [breadcumbWidth] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(breadcumbWidth, {
      toValue: 60,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.pallete.background }}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <View style={styles.imageContainer}>
          <LottieView
            source={require("@/assets/looties/logolibro.json")}
            autoPlay
            loop={false}
            style={{ flex: 1, width: "80%" }}
          />
        </View>
        <View style={styles.textContainer}>
          <AnimatedText text={["Encuentra tu carrera", "con Univia"]} />
          <View
            style={{
              height: 100,
              flexDirection: "row",
              paddingBottom: 46,
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Animated.View
              style={{
                backgroundColor: "#6600ff",
                height: 10,
                width: breadcumbWidth,
                borderRadius: 20,
              }}
            />
            <View
              style={{
                backgroundColor: "#6600ff",
                height: 10,
                width: 10,
                borderRadius: 20,
              }}
            />
            <View
              style={{
                backgroundColor: "#6600ff",
                height: 10,
                width: 10,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
        <ButtonComponent text="Siguiente" href="/greetings1" link />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingVertical: 80,
  },
  textContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
