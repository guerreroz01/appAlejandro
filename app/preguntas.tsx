import * as React from "react";
import { StatusBar } from "expo-status-bar";
import Main from "@/components/Main";
import { data } from "@/constants/preguntas";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import VideoContainer from "@/components/VideoComponent";
import { useLocalSearchParams } from "expo-router";
import { useVideoPlayer } from "expo-video";

const videoSource = require("@/assets/videos/video_0.mp4");

export default function Preguntas() {
  const { numberOfQ } = useLocalSearchParams();

  const videoRef = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  if (!videoRef) {
    return <></>;
  }
  return (
    <VideoContainer videoRef={videoRef}>
      <SafeAreaProvider style={{ width: "100%" }}>
        <SafeAreaView style={styles.container} edges={["left", "right"]}>
          <Main data={data} numberOfAnswers={Number(numberOfQ)} />
          <StatusBar style="light" />
        </SafeAreaView>
      </SafeAreaProvider>
    </VideoContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
