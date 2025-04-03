import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import updateDocumentById from "@/scripts/updateDocById";
import { useGoogleOauth } from "@/hooks/useGoogleFirebaseOauth";
import addData from "@/scripts/addData";
import { Colors } from "@/constants/Colors";

interface ModalSorteoInt {
  montoSorteo: string;
  canParticipate: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  setAnimation: Dispatch<SetStateAction<boolean>>;
}

export default function ModalSorteo({
  canParticipate,
  setClose,
  setAnimation,
  montoSorteo,
}: ModalSorteoInt) {
  const [termCheck, setTermCheck] = useState(false);
  const [pdatosCheck, setPdatosCheck] = useState(false);
  const { getStoredUser } = useGoogleOauth();

  async function handlePress() {
    setClose(false);
    setAnimation(true);
    const user = await getStoredUser();
    if (user) {
      await addData("participantes_sorteo", {
        email: user?.email,
        codigo: user?.codigo,
      });
      await updateDocumentById("usuarios", user?.uid, {
        ...user,
        isSorteo: true,
      });

      const response = await fetch("/sendEmailSorteo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user }),
      });
    }
  }

  if (!canParticipate) {
    return (
      <TouchableOpacity
        style={{ flex: 1, position: "relative" }}
        onPress={() => setClose(false)}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>REQUISITOS PARA EL SORTEO!</Text>
          <View style={{ height: 10, marginBottom: "auto" }}>
            <View style={styles.line} />
          </View>
          <Text style={styles.text}>
            Para poder participar debes realizar 2 cuestionarios
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{ flex: 1, position: "relative" }}
      onPress={() => setClose(false)}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>{montoSorteo}</Text>
        <View style={{ height: 5, marginBottom: "auto" }}>
          <View style={styles.line} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Checkbox
            status={termCheck ? "checked" : "unchecked"}
            onPress={() => setTermCheck(!termCheck)}
          />
          <Text style={{ color: "white" }}>Términos y condiciones...</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Checkbox
            status={pdatosCheck ? "checked" : "unchecked"}
            onPress={() => setPdatosCheck(!pdatosCheck)}
          />
          <Text style={{ color: "white" }}>Protección de datos...</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <Icon name="web" size={24} color={"lightblue"} />
          <Link style={{ color: "lightblue" }} href="https://univia.app">
            Más información del sorteo...
          </Link>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: !pdatosCheck || !termCheck ? "#999" : "blue",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}
            disabled={!pdatosCheck || !termCheck}
            onPress={handlePress}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
              Aceptar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    gap: 20,
    flex: 1,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6600ff",
    backgroundColor: Colors.pallete.background,
    justifyContent: "space-around",
    paddingVertical: 30,
    paddingHorizontal: 26,
    position: "absolute",
    top: "30%",
  },
  heading: {
    fontSize: 30,
    color: "#ff00ff",
    textAlign: "center",
    fontWeight: "bold",
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "#ff00ff",
    width: "60%",
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 26,
    paddingHorizontal: 20,
  },
});
