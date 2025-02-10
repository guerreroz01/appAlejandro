import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { herfType } from "./ButtonComponent";

interface CardComponentInt {
  href: herfType;
  numberOfQ: number;
  label: string;
  text: string;
  subText: string;
  goldenLabel?: string | undefined;
}

export default function CardComponent({
  href,
  label,
  numberOfQ,
  subText,
  text,
  goldenLabel,
}: CardComponentInt) {
  return (
    <Link
      href={{
        pathname: href,
        params: { numberOfQ },
      }}
      style={styles.link}
    >
      <View style={styles.card}>
        {goldenLabel && <Text style={styles.goldenLabel}>{goldenLabel}</Text>}
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.text, { fontSize: 18 }]}>{subText}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    width: "100%",
    paddingRight: 20,
  },
  goldenLabel: {
    position: "absolute",
    top: 10,
    left: 10,
    color: "#fff",
    fontFamily: "Poppins",
  },
  text: {
    color: Colors.pallete.light,
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    padding: 20,
  },
  link: {
    flex: 1,
    width: "100%",
    height: 200,
    position: "relative",
  },
  card: {
    width: "100%",
    height: 200,
    paddingVertical: 20,
    paddingHorizontal: 4,
    flexDirection: "column",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#6600ff",
  },
});
