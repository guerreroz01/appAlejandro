import React, { useState, useCallback, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Colors } from "@/constants/Colors";
import ButtonComponent from "./ButtonComponent";

type Question = {
  pregunta: string;
  respuestas: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
  };
};

type FormComponentProps = {
  data: Question;
  selectedAnswers: { pregunta: string; respuesta: string }[];
  setSelectedAnswers: React.Dispatch<
    React.SetStateAction<{ pregunta: string; respuesta: string }[]>
  >;
  onSubmit: (newData: { pregunta: string; respuesta: string }) => void;
  getNewRandom: () => void;
};

export default function FormComponent({
  data,
  selectedAnswers,
  setSelectedAnswers,
  onSubmit,
  getNewRandom,
}: FormComponentProps) {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const respuestas = data.respuestas ? data.respuestas : {};

  useEffect(() => {
    setSelectedAnswers([]);
    setIsButtonEnabled(false);
  }, [data, setSelectedAnswers]);

  const handleCheckboxChange = useCallback(
    (isChecked: boolean, pregunta: string, respuesta: string) => {
      if (isChecked) {
        setSelectedAnswers([{ pregunta, respuesta }]);
        setIsButtonEnabled(true);
      } else {
        setSelectedAnswers([]);
        setIsButtonEnabled(false);
      }
    },
    [setSelectedAnswers]
  );

  const handleSubmit = () => {
    if (selectedAnswers.length > 0) {
      onSubmit(selectedAnswers[0]);
      setIsButtonEnabled(false);
      setSelectedAnswers([]);
      getNewRandom();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.question}>{data.pregunta}</Text>
      <View style={styles.formContainer}>
        <View>
          {Object.entries(respuestas).length > 0 ? (
            Object.entries(data?.respuestas).map(([key, value]) => (
              <View style={styles.checkboxContainer} key={key}>
                <BouncyCheckbox
                  text={value}
                  fillColor={Colors.pallete.primary}
                  textStyle={styles.label}
                  iconImageStyle={{ tintColor: Colors.pallete.light }}
                  style={styles.checkBox}
                  isChecked={selectedAnswers.some(
                    (answer) =>
                      answer.pregunta === data.pregunta &&
                      answer.respuesta === value
                  )}
                  onPress={(isChecked: boolean) => {
                    handleCheckboxChange(isChecked, data.pregunta, value);
                  }}
                />
              </View>
            ))
          ) : (
            <Text style={styles.noAnswers}>No hay respuestas disponibles.</Text>
          )}
        </View>
        <ButtonComponent
          onPress={handleSubmit}
          disabled={!isButtonEnabled}
          text={"Siguiente"}
          link={false}
        ></ButtonComponent>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  question: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 16,
    textAlign: "center",
    color: "#fff",
    paddingVertical: 10,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 1,
    gap: 48,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkBox: {
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 16,
    textDecorationLine: "none",
    fontWeight: "500",
    color: "#fff",
  },
  noAnswers: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
});
