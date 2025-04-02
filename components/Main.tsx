import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import FormComponent from "@/components/FormComponent";
import { Pregunta } from "@/constants/preguntas";
import { useRouter } from "expo-router";
import ButtonComponent from "./ButtonComponent";
import LottieView from "lottie-react-native";
import { ActivityIndicator } from "react-native-paper";
import ProgressBarCounter from "./ProgressBarCounter";

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
  const [sandClock, setSandClock] = useState(false);
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const [randomIndex, setRandomIndex] = useState<number>(-1);
  const [counter, setCounter] = useState<number>(0);
  const [isGtpResponse, setIsGtpResponse] = useState(false);
  const [gtpResponse, setGtpResponse] = useState<any>();

  const router = useRouter();

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * data.length));
  }, [data]);

  const handleNewData = (newData: { pregunta: string; respuesta: string }) => {
    setAllAnswers((prev) => [...prev, newData]);
    setCounter((prev) => prev + 1);
  };

  function extractArray(obj: any) {
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        return obj[key]; // Retorna el primer array encontrado
      }
    }
    return null; // Si no encuentra un array, devuelve null
  }

  async function handleClickSubmit() {
    setSandClock(true);
    const response = await fetch("/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: allAnswers }),
    });
    const responseParsed = await response.json();
    let extractedArray = [];
    if (Array.isArray(responseParsed)) {
      extractedArray = responseParsed;
    } else if (
      typeof responseParsed === "object" &&
      responseParsed !== null &&
      "content" in responseParsed
    ) {
      router.replace({
        pathname: "/response",
        params: { data: JSON.stringify(responseParsed.content) },
      });
    } else {
      console.error("Formato inesperado de responseParsed:", responseParsed);
    }

    setIsGtpResponse(true);
  }

  if (randomIndex === -1 || !data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff00ff" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <>
      <View
        style={[styles.imageContainer, sandClock && { height: 400, top: 100 }]}
      >
        {sandClock ? (
          <ImageBackground
            source={require("@/assets/images/gif.gif")}
            style={{ width: "100%", height: 100 }}
          />
        ) : (
          <LottieView
            source={require("@/assets/looties/logolupa.json")}
            autoPlay
            loop
            style={{
              flex: 1,
              width: "100%",
            }}
          />
        )}
      </View>
      {counter !== numberOfAnswers ? (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.content}>
            <FormComponent
              data={data[randomIndex]}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
              onSubmit={handleNewData}
              getNewRandom={() =>
                setRandomIndex(Math.floor(Math.random() * data.length))
              }
            />
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 60,
          }}
        >
          <ButtonComponent
            text="Ver Resultados"
            onPress={handleClickSubmit}
            link={false}
          />
        </View>
      )}
      {counter !== numberOfAnswers && (
        <ProgressBarCounter count={counter} maxCount={numberOfAnswers} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  content: {
    width: "100%",
    maxWidth: 900,
    paddingVertical: 4,
    backgroundColor: "rgba(46, 55, 249, 0.08)",
    borderRadius: 16,
    borderColor: "rgba(46, 55, 249, 0.3)",
    borderWidth: 1,
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
    height: 170,
    top: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
