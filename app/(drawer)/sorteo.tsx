import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import ButtonComponent from "@/components/ButtonComponent";
import { useState } from "react";

export default function App() {
  const [canParticipate, setCanParticipate] = useState<boolean>(false);

  function handlePress() {
    //TODO! La función que hace que participe en el sorteo
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("@/assets/images/greetings2.png")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <Text style={styles.text}>CUENTA ATRÁS</Text>
      <View style={{ flex: 1, paddingTop: 40, width: "100%" }}>
        <View style={styles.counterContainer}>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>5</Text>
            <Text style={styles.counterDate}>DÍAS</Text>
          </View>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>11</Text>
            <Text style={styles.counterDate}>HORAS</Text>
          </View>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>46</Text>
            <Text style={styles.counterDate}>MINUTOS</Text>
          </View>
        </View>
      </View>
      <Text style={styles.textLabel}>GANA 200€</Text>
      <ButtonComponent
        text="Participar"
        link={false}
        disabled={canParticipate}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.pallete.background,
    paddingVertical: 50,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 50,
    color: "#6600ff",
    fontFamily: "Poppins",
  },
  textLabel: {
    fontSize: 46,
    color: "#2aff00",
    fontFamily: "Poppins",
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  counterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  counterElement: {
    borderWidth: 2,
    borderColor: "#6600ff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    height: 200,
    textAlign: "center",
    justifyContent: "center",
  },
  counterNumber: {
    fontSize: 50,
    color: "#6600ff",
    borderBottomWidth: 2,
    borderColor: "#6600ff",
    textAlign: "center",
    paddingBottom: 2,
    fontFamily: "Poppins",
  },
  counterDate: {
    paddingTop: 20,
    fontSize: 16,
    color: "#6600ff",
    textAlign: "center",
    fontFamily: "Poppins",
  },
});
