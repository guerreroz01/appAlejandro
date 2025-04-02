import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";
import { Link } from "expo-router";

interface Props {
  winner: {
    1: string;
    2: string;
    3: string;
  };
  contactEmail: string;
}

export default function Winner({ winner }: Props) {
  return (
    <SafeAreaProvider style={{ backgroundColor: Colors.pallete.background }}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <View style={styles.imageContainer}>
          <LottieView
            source={require("@/assets/looties/ruleta.json")}
            autoPlay
            loop
            style={{
              flex: 1,
              width: "90%",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: "#F0DD3B" }]}>
            🥇 150€: <Text style={styles.text}> {winner[1]}</Text>
          </Text>
          <Text style={[styles.text, { color: "#DFDFDF" }]}>
            🥈 75€: <Text style={styles.text}> {winner[1]}</Text>
          </Text>
          <Text style={[styles.text, { color: "#D5A745" }]}>
            🥉 25€: <Text style={styles.text}> {winner[1]}</Text>
          </Text>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 16 }}>
              ¡Revisa tu Email ahora, tu premio te está esperando!
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Ve a la sección{" "}
              <Link
                href="/(drawer)/profile"
                style={{
                  color: "lightblue",
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                  fontSize: 14,
                  position: "absolute",
                  zIndex: 20,
                }}
              >
                Perfil
              </Link>{" "}
              y encuentra tu código de verificación
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -10,
          }}
        >
          <LottieView
            source={require("@/assets/looties/confeti.json")}
            autoPlay
            loop
            style={{
              flex: 1,
              width: "90%",
            }}
          />
        </View>
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
    position: "relative",
  },
  textContainer: {
    flex: 1,
    width: "100%",
    gap: 20,
    alignItems: "center",
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
