import { View, StyleSheet, ImageBackground } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";

export default function VideoContainer({
  children,
  videoRef,
}: {
  children: React.ReactNode;
  videoRef: any;
}) {
  return (
    <ImageBackground
      source={require("@/assets/images/appbackground-25-lighting-light.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <VideoView
        nativeControls={false}
        style={styles.video}
        player={videoRef}
        allowsFullscreen
        allowsPictureInPicture
        contentFit="fill"
      />
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
});
