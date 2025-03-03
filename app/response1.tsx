import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { DataType } from "./response";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";
import { PieChart } from "react-native-gifted-charts";
import { AntDesign } from "@expo/vector-icons";

export default function Page() {
  const params = useLocalSearchParams();
  let parsedData: DataType = [];
  const router = useRouter();

  try {
    if (Array.isArray(params.data)) {
      // 🔥 Caso 1: Es un array de strings -> parsear cada string a objeto
      parsedData = params.data.map((item) => {
        if (typeof item === "string") {
          return JSON.parse(item);
        }
        return item; // Si ya es un objeto, lo dejamos igual
      });
    } else if (typeof params.data === "string") {
      // 🔥 Caso 2: Es un string JSON normal
      parsedData = [JSON.parse(params.data)];
    } else {
      console.error("❌ params.data tiene un formato inesperado:", params.data);
    }
  } catch (error) {
    console.error("❌ Error al parsear JSON:", error);
  }

  if (!parsedData || parsedData.length === 0) {
    console.warn("⚠️ No hay datos disponibles en parsedData.");
  }
  return (
    <LinearGradient
      colors={["#090124", "#6600ff", "#ff00ff"]}
      start={{ x: 0.2, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      locations={[0.08, 0.7, 1]}
      style={{ flex: 1, width: "100%" }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["left", "right"]}>
          <ScrollView
            contentContainerStyle={styles.scrollView}
            keyboardShouldPersistTaps="handled"
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color={"#fff"}
              style={{ alignSelf: "flex-start", padding: 20 }}
              onPress={() => {
                router.back();
              }}
            />
            {parsedData.length > 0 ? (
              parsedData.map(({ name, description, percent, color }, index) => {
                const percentNumber = Number(percent.replace("%", ""));
                const pieData = [
                  {
                    value: percentNumber,
                    color: color,
                  },
                  { value: 100 - percentNumber, color: "#eaeaea" },
                ];
                return (
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      flex: 1,
                      justifyContent: "center",
                      gap: 40,
                    }}
                    key={index}
                  >
                    <Text style={styles.title}>{name}</Text>
                    <PieChart
                      donut
                      innerRadius={60}
                      radius={80}
                      data={pieData}
                      centerLabelComponent={() => {
                        return (
                          <View
                            style={{
                              width: 130,
                              height: 130,
                              overflow: "hidden",
                              borderRadius: "50%",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <LinearGradient
                              colors={["rgb(13, 18, 122)", "rgb(16, 22, 131)"]}
                              start={{ x: 0.3, y: 0.3 }}
                              end={{ x: 1, y: 1 }}
                              style={{
                                width: 130,
                                height: 130,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 50,
                                  color: Colors.pallete.light,
                                }}
                              >
                                {`${percentNumber}%`}
                              </Text>
                            </LinearGradient>
                          </View>
                        );
                      }}
                    />
                    <Text style={styles.textName}>{description}</Text>
                  </View>
                );
              })
            ) : (
              <Text style={styles.text}>No data available</Text>
            )}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 10,
    width: "100%",
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    color: Colors.pallete.light,
    fontFamily: "Poppins",
    fontSize: 34,
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  textName: {
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontWeight: 600,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 20,
    color: "#fff",
    lineHeight: 25,
  },
  textDescription: {
    color: "black",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  textPercent: {
    color: "black",
    fontSize: 40,
  },
});
