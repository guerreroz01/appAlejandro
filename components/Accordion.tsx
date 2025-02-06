import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  LinearTransition,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

interface AccordionInt {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionInt) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#090124", "#6600ff", "#ff00ff"]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <TouchableOpacity
          onPress={() => setExpanded(!expanded)}
          style={styles.header}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </LinearGradient>
      {expanded && (
        <Animated.View
          style={styles.content}
          entering={FadeIn}
          exiting={FadeOut}
          layout={LinearTransition}
        >
          {children}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#aaa",
  },
  header: {
    padding: 15,
    width: "100%",
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    padding: 15,
    backgroundColor: "transparent",
  },
});

export default Accordion;
