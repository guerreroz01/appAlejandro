import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import VideoContainer from "@/components/VideoComponent";
import { useVideoPlayer, VideoPlayerStatus } from "expo-video";
import ButtonComponent from "@/components/ButtonComponent";
import { useEvent } from "expo";
import { useGoogleOauth, UserInfo } from "@/hooks/useGoogleFirebaseOauth";
import LogInWithGoogleButton from "@/components/LogInWithGoogleButton";
import LogInWithIOSButton from "@/components/LogInWithIOSButton";
import { Platform } from "react-native";

const videoSource = require("@/assets/videos/video_2.mp4");

export default function Index() {
  const [user, setUser] = React.useState<UserInfo | null>(null);
  const { getStoredUser } = useGoogleOauth();
  const [playerStatus, setPlayerStatus] =
    React.useState<VideoPlayerStatus | null>(null);
  const videoRef = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });
  const { status } = useEvent(videoRef, "statusChange", {
    status: videoRef.status,
  });

  React.useEffect(() => {
    if (status === "readyToPlay") {
      setPlayerStatus("readyToPlay");
    }
    async function getUserFromAsyncData() {
      const userData = await getStoredUser();
      setUser(userData);
    }
    getUserFromAsyncData();
  }, []);

  return (
    <VideoContainer videoRef={videoRef}>
      <SafeAreaProvider style={{ width: "100%", flex: 1 }}>
        <SafeAreaView style={styles.container} edges={["left", "right"]}>
          <View
            style={{
              width: "100%",
            }}
          >
            {playerStatus === "loading" ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : user ? (
              <ButtonComponent link href="/(drawer)/home" text="Comenzar" />
            ) : (
              <>
                <LogInWithGoogleButton />
                {/* La opción de logear con Apple solo se activa cuando se usa un iphone  */}
                {Platform.OS === "ios" && <LogInWithIOSButton />}
              </>
            )}
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </SafeAreaProvider>
    </VideoContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingVertical: 80,
  },
  imageContainer: {
    width: "100%",
    height: 100,
    top: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
