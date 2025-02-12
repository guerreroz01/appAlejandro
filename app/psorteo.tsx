import * as React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import ButtonComponent from "@/components/ButtonComponent";
import AnimatedText from "@/components/AnimationText";

export default function Index() {
  const [breadcumbWidth] = useState(new Animated.Value(1)); // Usar Animated.Value

  // Usar useEffect con un setTimeout para crear un retraso
  useEffect(() => {
    // Simulamos un retraso en la animación para asegurar que se active después de la transición
    const timer = setTimeout(() => {
      Animated.timing(breadcumbWidth, {
        toValue: 60, // Finalizamos en 60
        duration: 300, // Duración rápida (300ms)
        useNativeDriver: false, // No usamos native driver porque estamos animando el ancho
      }).start(); // Iniciar animación
    }, 100); // Retraso de 100ms después de la carga inicial

    // Limpiar el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.pallete.background }}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require("@/assets/images/greetings2.png")}
            resizeMode="cover"
            style={styles.image}
          ></ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <AnimatedText
            text={["Gana 200€", "participando en", "nuestro sorteo"]}
          />

          <View
            style={{
              flexDirection: "row",
              paddingBottom: 46,
              justifyContent: "center",
              gap: 20,
            }}
          >
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
            <Animated.View
              style={{
                backgroundColor: "#6600ff",
                height: 10,
                width: breadcumbWidth,
                borderRadius: 20,
              }}
            />
          </View>
        </View>
        <ButtonComponent text="Siguiente" href="/greetings2" link />
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
    marginBottom: 20,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    zIndex: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
