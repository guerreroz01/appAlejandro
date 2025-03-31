import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export type herfType =
  | RelativePathString
  | ExternalPathString
  | "/greetings1"
  | "/greetings2"
  | "/psorteo"
  | "/(drawer)/home"
  | "/preguntas"
  | "/response1"
  | "/index2";

interface ButtonComponentInt {
  text: string;
  href?: herfType;
  link: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

export default function ButtonComponent({
  text,
  href,
  link,
  onPress,
  disabled,
}: ButtonComponentInt) {
  const safeHref = href ?? "/home";
  if (!link) {
    return (
      <Pressable
        style={{ width: "100%" }}
        onPress={onPress}
        disabled={disabled}
      >
        <LinearGradient
          colors={["#090124", "#6600ff", "#ff00ff"]}
          start={{ x: 0.2, y: 0.2 }}
          end={{ x: 1, y: 1 }}
          locations={[0.08, 0.7, 1]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      </Pressable>
    );
  }

  return (
    <Pressable style={{ width: "100%" }}>
      <LinearGradient
        colors={["#090124", "#6600ff", "#ff00ff"]}
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        locations={[0.08, 0.7, 1]}
        style={styles.button}
      >
        <Link href={safeHref}>
          <Text style={styles.buttonText}>{text}</Text>
        </Link>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderRadius: 40,
    width: "80%",
    height: "auto",
    alignSelf: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#6600ff",
  },
  buttonText: {
    color: Colors.pallete.light,
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Poppins",
  },
});
