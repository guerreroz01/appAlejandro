import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {  StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import BrandName from "@/components/BrandName";
import { useRouter } from "expo-router";
import { useRef } from "react";

export default function Index() {
 const router = useRouter();
  const animation = useRef<LottieView>(null)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/index2");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaProvider style={{ backgroundColor: "#000" }}>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <View style={styles.imageContainer}>
          <LottieView
            source={require("@/assets/looties/splash.json")}
            autoPlay
            ref={animation}
            loop={false}
            style={{ flex: 1, width: "100%" }}
          />
        </View>
        <View style={{flex: 1}} />
        <BrandName fontSize={40} fontBigSize={50} />
        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    paddingVertical: 80,
  },
  textContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
