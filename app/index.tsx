import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

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
    <ImageBackground
      source={require("@/assets/images/appbackground-25-lighting-light.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["left", "right"]}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("@/assets/images/greetings1.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Encuentra tu carrera con nosotros</Text>
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 46,
                justifyContent: "center",
                gap: 20,
              }}
            >
              <Animated.View
                style={{
                  backgroundColor: Colors.pallete.lightBlue,
                  height: 10,
                  width: breadcumbWidth, // Usamos el valor animado
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  backgroundColor: Colors.pallete.lightBlue,
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? Colors.pallete.active
                  : Colors.pallete.lightBlue,
              },
            ]}
          >
            <Link href={"/greetings1"}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </Link>
          </Pressable>
          <StatusBar style="light" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
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
  button: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 40,
    width: "80%",
    height: "auto",
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    color: Colors.pallete.light,
    paddingHorizontal: 10,
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  buttonText: {
    color: Colors.pallete.light,
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    zIndex: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
