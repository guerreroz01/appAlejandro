import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";
import CardComponent from "@/components/CardComponent";
import BrandName from "@/components/BrandName";

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{
              width: "100%",
              height: 100,
              alignSelf: "center",
              marginTop: 100,
              marginBottom: 10,
              resizeMode: "contain",
            }}
          />
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <BrandName />
          </View>

          <View style={styles.cardContainer}>
            <CardComponent
              label="🏆🏆🏆"
              href="/preguntas"
              numberOfQ={15}
              text="Cuestionario 15 Preguntas"
              subText="¡Rápido y sencillo!"
            />
            <CardComponent
              label="🏆🏆🏆🏆"
              goldenLabel="🏅🏅🏅"
              href="/preguntas"
              numberOfQ={25}
              text="Cuestionario 25 Preguntas"
              subText="Más detalle para mejores opciones"
            />
            <CardComponent
              label="🏆🏆🏆🏆🏆"
              href="/preguntas"
              numberOfQ={35}
              text="Cuestionario 35 Preguntas"
              subText="🎖️ La opción más completa"
            />
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pallete.background,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
  },
  cardContainer: {
    paddingVertical: 30,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
});
