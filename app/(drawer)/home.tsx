import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.cardContainer}>
            <Link
              href={{
                pathname: "/preguntas",
                params: { numberOfQ: 20 },
              }}
              style={styles.link}
            >
              <View style={styles.card}>
                <ImageBackground
                  source={{
                    uri: "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg",
                  }}
                  resizeMode="cover"
                  style={styles.cardImage}
                />
                <Text style={styles.text}>5 Preguntas</Text>
              </View>
            </Link>
            <Link
              href={{
                pathname: "/preguntas",
                params: { numberOfQ: 2 },
              }}
              style={styles.link}
            >
              <View style={styles.card}>
                <ImageBackground
                  source={{
                    uri: "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg",
                  }}
                  resizeMode="cover"
                  style={styles.cardImage}
                />
                <Text style={styles.text}>20 Preguntas</Text>
              </View>
            </Link>
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: "100%",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.pallete.background,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  cardImage: {
    flex: 1,
    justifyContent: "center",
    width: 140,
    height: 140,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "column",
    gap: 20,
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
  },
  link: {
    flex: 1,
    width: "100%",
    height: 200,
  },
  card: {
    width: "100%",
    height: 200,
    paddingVertical: 20,
    paddingHorizontal: 4,
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    borderRadius: 16,
  },
});
