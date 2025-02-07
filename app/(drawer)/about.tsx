import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { PieChart } from "react-native-gifted-charts";
import Accordion from "@/components/Accordion";
import { ScrollView } from "react-native-gesture-handler";
import BrandName from "@/components/BrandName";
import { LinearGradient } from "expo-linear-gradient";

const uri =
  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8";

export default function ProfileScreen() {
  const pieData1 = [
    { value: 30, color: Colors.pallete.lightBlue },
    { value: 70, color: "#eaeaea" },
  ];
  return (
    <View style={{ backgroundColor: "#090124", flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.tag}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <PieChart
              donut
              innerRadius={35}
              innerCircleColor={Colors.pallete.secondary}
              radius={60}
              data={pieData1}
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
                      colors={["#090124", "#6600ff", "#ff00ff"]}
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
                        style={{ fontSize: 30, color: Colors.pallete.light }}
                      >
                        30%
                      </Text>
                    </LinearGradient>
                  </View>
                );
              }}
            />
            <Text style={styles.text}>
              Un{" "}
              <Text style={{ color: Colors.pallete.primary }}>
                30% de la población española
              </Text>{" "}
              abandona o cambia de carrera universitaria
            </Text>
          </View>
        </View>
        <View style={styles.tag}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <ImageBackground
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktPrj_SOuJXb8uCr0TZsN0-hqRhVaYYZ40w&s",
                }}
                resizeMode="cover"
                style={{ width: 130, height: 130 }}
              />
            </View>
            <Text style={styles.text}>
              Entre{" "}
              <Text style={{ color: Colors.pallete.primary }}>
                44k y 50k euros las familias pierden{" "}
              </Text>
              de media en España
            </Text>
          </View>
        </View>
        <View style={styles.tag}>
          <View style={{ alignItems: "center" }}>
            <ImageBackground
              source={require("@/assets/images/logo.png")}
              resizeMode="cover"
              style={{ width: 120, height: 120 }}
            />
            <BrandName />
          </View>
        </View>
        <View style={styles.tag}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Accordion title="Tecnología Única & Precisión Avanzada">
              <Text
                style={{ color: "#fff", fontSize: 18, fontFamily: "Poppins" }}
              >
                Nuestra app usa algoritmos de{" "}
                <Text
                  style={{
                    fontFamily: "Poppins",
                    color: Colors.pallete.primary,
                  }}
                >
                  {" "}
                  inteligencia artificial
                </Text>{" "}
                de vanguardia que analizan tus intereses, habilidades y valores,
                ofreciendo recomendaciones de carreras personalizadas con una
                precisión inigualable. ¡Nunca más estarás a ciegas en tu
                elección de carrera!
              </Text>
            </Accordion>
            <Accordion title="Respaldo de Expertos en Orientación Vocacional">
              <Text
                style={{ color: "#fff", fontSize: 18, fontFamily: "Poppins" }}
              >
                Desarrollada junto a{" "}
                <Text
                  style={{
                    color: Colors.pallete.primary,
                    fontFamily: "Poppins",
                  }}
                >
                  {" "}
                  psicólogos, educadores y expertos en orientación vocacional,
                </Text>{" "}
                nuestra app tiene el respaldo de autoridad profesional en el
                campo de la educación. Con el mejor conocimiento disponible, tu
                elección estará basada en análisis expertos.
              </Text>
            </Accordion>
            <Accordion title="Optimiza tu Futuro con Decisiones Inteligentes">
              <Text
                style={{ color: "#fff", fontSize: 18, fontFamily: "Poppins" }}
              >
                Escoge una carrera que no solo te apasione, sino que también se
                alinee con tu potencial y proyecciones laborales. Gracias a la
                <Text
                  style={{
                    fontFamily: "Poppins",
                    color: Colors.pallete.primary,
                  }}
                >
                  {" "}
                  inteligencia artificial, ofrecemos una visión clara
                </Text>{" "}
                de las mejores oportunidades para tu desarrollo personal y
                profesional. ¡Da el primer paso hacia un futuro brillante y bien
                fundamentado!
              </Text>
            </Accordion>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 20,
  },
  text: {
    color: Colors.pallete.light,
    fontSize: 18,
    paddingHorizontal: 20,
    flexShrink: 1,
    fontFamily: "Poppins",
  },

  brandTitle: {},
  brandIAtitle: {},
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#f4f4f4",
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    padding: 15,
    backgroundColor: "#fff",
  },
});
