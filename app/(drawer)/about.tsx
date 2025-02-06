import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { PieChart } from "react-native-gifted-charts";
import Accordion from "@/components/Accordion";
import { ScrollView } from "react-native-gesture-handler";

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
                  <Text style={{ fontSize: 30, color: Colors.pallete.light }}>
                    30%
                  </Text>
                );
              }}
            />
            <Text style={styles.text}>
              Un 30% de la población española abandona o cambia de carrera
              universitaria
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
              Entre 44k y 50k euros una familia pierde de media en España
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
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={styles.brandTitle}>UNIV</Text>
              <Text style={styles.brandIAtitle}>IA</Text>
            </View>
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
            <Accordion title="Acordión 1">
              <Text style={{ color: "#fff", fontSize: 18 }}>
                Este es el contenido del acordeón. Este es el contenido del
                acordeón. Este es el contenido del acordeón.
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
  },

  brandTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    fontFamily: "Spectral",
  },
  brandIAtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#75d8fc",
    fontFamily: "Spectral",
  },
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
