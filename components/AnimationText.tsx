import { Colors } from "@/constants/Colors";
import { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

interface AnimatedTypingProps {
  text: string[];
  onComplete?: () => void;
}

interface Timeouts {
  cursorTimeout?: NodeJS.Timeout;
  typingTimeout?: NodeJS.Timeout;
  firstNewLineTimeout?: NodeJS.Timeout;
  secondNewLineTimeout?: NodeJS.Timeout;
}

export default function AnimatedText({
  text,
  onComplete,
}: AnimatedTypingProps) {
  const [displayText, setDisplayText] = useState<string>("");
  const [cursorColor, setCursorColor] = useState<string>("transparent");
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [timeouts, setTimeouts] = useState<Timeouts>({});

  const textRef = useRef(displayText);
  textRef.current = displayText;

  const cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  const messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  const textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  const timeoutsRef = useRef(timeouts);
  timeoutsRef.current = timeouts;

  const typingAnimation = () => {
    if (textIndexRef.current < text[messageIndexRef.current].length) {
      setDisplayText(
        textRef.current +
          text[messageIndexRef.current].charAt(textIndexRef.current)
      );
      setTextIndex(textIndexRef.current + 1);

      const updatedTimeouts: Timeouts = { ...timeoutsRef.current };
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 30);
      setTimeouts(updatedTimeouts);
    } else if (messageIndexRef.current + 1 < text.length) {
      setMessageIndex(messageIndexRef.current + 1);
      setTextIndex(0);

      const updatedTimeouts: Timeouts = { ...timeoutsRef.current };
      updatedTimeouts.firstNewLineTimeout = setTimeout(newLineAnimation, 110);
      updatedTimeouts.secondNewLineTimeout = setTimeout(newLineAnimation, 190);
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 280);
      setTimeouts(updatedTimeouts);
    } else {
      clearInterval(timeoutsRef.current.cursorTimeout);
      setCursorColor("transparent");
      onComplete?.();
    }
  };

  const newLineAnimation = () => {
    setDisplayText(textRef.current + "\n");
  };

  const cursorAnimation = () => {
    setCursorColor(
      cursorColorRef.current === "transparent"
        ? Colors.pallete.secondary
        : "transparent"
    );
  };

  useEffect(() => {
    const updatedTimeouts: Timeouts = { ...timeoutsRef.current };
    updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 500);
    updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 250);
    setTimeouts(updatedTimeouts);

    return () => {
      clearTimeout(timeoutsRef.current.typingTimeout);
      clearTimeout(timeoutsRef.current.firstNewLineTimeout);
      clearTimeout(timeoutsRef.current.secondNewLineTimeout);
      clearInterval(timeoutsRef.current.cursorTimeout);
    };
  }, []);

  return (
    <View
      style={{
        height: 160,
        justifyContent: "center",
      }}
    >
      <Text style={styles.text}>
        {displayText}
        <Text style={{ color: cursorColor, fontSize: 35 }}>|</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    height: "100%",
    color: Colors.pallete.light,
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Poppins",
    lineHeight: 24,
    paddingTop: 20,
  },
});
