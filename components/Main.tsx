import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import FormComponent from "@/components/FormComponent";
import { Pregunta } from "@/constants/preguntas";

type Answer = {
  pregunta: string;
  respuesta: string;
};

export default function Main({
  data,
  numberOfAnswers,
}: {
  data: Pregunta[];
  numberOfAnswers: number;
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const [randomIndex, setRandomIndex] = useState<number>(-1);
  const [counter, setCounter] = useState<number>(0);
  const [isGtpResponse, setIsGtpResponse] = useState(false);
  const [gtpResponse, setGtpResponse] = useState<any>();

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * data.length));
  }, [data]);

  const handleNewData = (newData: { pregunta: string; respuesta: string }) => {
    setAllAnswers((prev) => [...prev, newData]);
    setCounter((prev) => prev + 1);
  };

  async function handleClickSubmit() {
    const response = await fetch("/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: allAnswers }),
    });
    const responseParsed = await response.json();
    setGtpResponse(responseParsed.content);
    setIsGtpResponse(true);
  }

  if (randomIndex === -1 || !data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("@/assets/images/logo.png")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          {isGtpResponse ? (
            <ScrollView style={styles.responseContainer}>
              <Text style={styles.responseText}>{gtpResponse}</Text>
            </ScrollView>
          ) : counter !== numberOfAnswers ? (
            <FormComponent
              data={data[randomIndex]}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
              onSubmit={handleNewData}
              getNewRandom={() =>
                setRandomIndex(Math.floor(Math.random() * data.length))
              }
            />
          ) : (
            <Button title="Enviar encuesta" onPress={handleClickSubmit} />
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  content: {
    width: "100%",
    maxWidth: 900,
    padding: 16,
    borderRadius: 16, // Rounded corners
    backgroundColor: "rgba(39, 49, 154, 0.29)", // Semi-transparent background
    borderColor: "rgba(39, 49, 154, 0.23)", // Border color
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#555",
  },
  responseContainer: {
    padding: 16,
    backgroundColor: "#eef",
    borderRadius: 8,
  },
  responseText: {
    fontSize: 16,
    color: "#333",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    top: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 120,
    height: 120,
    objectFit: "contain",
  },
});
