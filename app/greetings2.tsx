import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import VideoContainer from "@/components/VideoComponent";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useVideoPlayer } from "expo-video";

const videoSource = require("@/assets/videos/video_2.mp4");

export default function Index() {
  const videoRef = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  if (!videoRef) {
    return <></>;
  }

  return (
    <VideoContainer videoRef={videoRef}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["left", "right"]}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("@/assets/images/logo.png")}
              resizeMode="cover"
              style={styles.image}
            ></ImageBackground>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? Colors.pallete.active
                  : Colors.pallete.dark,
              },
            ]}
          >
            <Link href={"/(drawer)/home"}>
              <Text style={styles.text}>Comenzar</Text>
            </Link>
          </Pressable>
          <StatusBar style="light" />
        </SafeAreaView>
      </SafeAreaProvider>
    </VideoContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginTop: 400,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.pallete.dark,
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Poppins",
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
