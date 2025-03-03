import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PieChart } from "react-native-gifted-charts";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export type DataType = {
  name: string;
  description: string;
  percent: string;
  color?: string;
}[];

export default function ResponseScreen() {
  const params = useLocalSearchParams();
  const [parsedData, setParsedData] = useState<DataType>([]);

  const router = useRouter();
  useEffect(() => {
    function parseData() {
      try {
        if (Array.isArray(params.data)) {
          // 🔥 Caso 1: Es un array de strings -> parsear cada string a objeto
          setParsedData(
            params.data.map((item) => {
              if (typeof item === "string") {
                return JSON.parse(item);
              }
              return item; // Si ya es un objeto, lo dejamos igual
            })
          );
        } else {
          // 🔥 Caso 2: Es un string JSON normal
          setParsedData(JSON.parse(params.data));
        }
      } catch (error) {
        console.error("❌ Error al parsear JSON:", error);
      }
    }

    parseData();
  }, [params.data]);

  if (!parsedData.length) {
    console.warn("⚠️ No hay datos disponibles en parsedData.");
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>No data available</Text>
      </SafeAreaView>
    );
  }

  const data = [
    {
      value: Number(parsedData[0].percent.replace("%", "")),
      text: parsedData[0].name.substring(0, 2),
      color: Colors.pallete.lightBlue,
    },
    {
      value: Number(parsedData[1].percent.replace("%", "")),
      text: parsedData[1].name.substring(0, 2),
      color: Colors.pallete.primary,
    },
    {
      value: Number(parsedData[2].percent.replace("%", "")),
      text: parsedData[2].name.substring(0, 2),

      color: Colors.pallete.secondary,
    },
    {
      value: Number(parsedData[3].percent.replace("%", "")),
      text: parsedData[3].name.substring(0, 2),

      color: "#d6c800",
    },
  ];

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
            <FontAwesome
              name="home"
              color="#fff"
              size={24}
              style={{ alignSelf: "flex-start", padding: 20 }}
              onPress={() => {
                router.back();
              }}
            />
            <Text style={styles.title}>TUS RESULTADOS</Text>
            <PieChart
              data={data}
              donut
              extraRadius={30}
              showText
              textColor={"#fff"}
              fontWeight="600"
              showTextBackground
              textBackgroundColor={Colors.pallete.background}
              centerLabelComponent={() => {
                return (
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      overflow: "hidden",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LinearGradient
                      colors={["#090124", "#090124"]}
                      start={{ x: 0.3, y: 0.3 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        width: 100,
                        height: 100,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></LinearGradient>
                  </View>
                );
              }}
            />
            {parsedData.length > 0 ? (
              parsedData.map(({ name, description, percent }, index) => {
                const percentNumber = Number(percent.replace("%", ""));
                const pieData = [
                  {
                    value: percentNumber,
                    color:
                      index === 0
                        ? Colors.pallete.lightBlue
                        : index === 1
                        ? Colors.pallete.primary
                        : index === 2
                        ? Colors.pallete.secondary
                        : "#d6c800",
                  },
                  { value: 100 - percentNumber, color: "#eaeaea" },
                ];
                return (
                  <Link
                    href={{
                      pathname: "/response1",
                      params: {
                        data: JSON.stringify({
                          name,
                          description,
                          percent,
                          color: pieData[0].color,
                        }),
                      },
                    }}
                    key={index}
                    style={{ marginBottom: 10 }}
                  >
                    <View style={styles.item}>
                      <PieChart
                        donut
                        innerRadius={35}
                        radius={50}
                        data={pieData}
                        centerLabelComponent={() => {
                          return (
                            <View
                              style={{
                                width: 70,
                                height: 70,
                                overflow: "hidden",
                                borderRadius: "50%",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <LinearGradient
                                colors={[
                                  "rgb(13, 18, 122)",
                                  "rgb(16, 22, 131)",
                                ]}
                                start={{ x: 0.3, y: 0.3 }}
                                end={{ x: 1, y: 1 }}
                                style={{
                                  width: 100,
                                  height: 100,
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Text
                                  style={{
                                    fontSize: 30,
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
                      <Text style={styles.textName}>{name}</Text>
                    </View>
                  </Link>
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
    borderWidth: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    color: Colors.pallete.light,
    fontFamily: "Poppins",
    fontSize: 42,
  },
  item: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "rgba(30, 37, 158, 0.33)",
    borderRadius: 16,
    borderColor: "rgba(46, 55, 249, 0.3)",
    borderWidth: 1,
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
    flex: 1,
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
