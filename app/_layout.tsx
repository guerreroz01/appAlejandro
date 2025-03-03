import * as React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Platform, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

export default function RootLayout() {
  let hideTimeout: ReturnType<typeof setTimeout>;
  const [barVisibility, setBarVisibility] = React.useState<
    "visible" | "hidden"
  >();
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    Spectral: require("@/assets/fonts/SpectralSC-SemiBold.ttf"),
  });

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.addVisibilityListener(({ visibility }) => {
        if (visibility === "visible") {
          setBarVisibility(visibility);

          if (hideTimeout) {
            clearTimeout(hideTimeout);
          }

          hideTimeout = setTimeout(() => {
            hideNavigationBar();
          }, 5000);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    if (Platform.OS === "android") {
      navigationConfig();
    }
  }, [loaded, barVisibility]);

  const navigationConfig = async () => {
    await NavigationBar.setBehaviorAsync("overlay-swipe");
    await NavigationBar.setBackgroundColorAsync(Colors.pallete.background);
    hideNavigationBar();
  };

  const hideNavigationBar = async () => {
    await NavigationBar.setVisibilityAsync("hidden");
  };

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="greetings1" options={{ headerShown: false }} />
      <Stack.Screen name="psorteo" options={{ headerShown: false }} />
      <Stack.Screen name="greetings2" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="preguntas" options={{ headerShown: false }} />
      <Stack.Screen name="response" options={{ headerShown: false }} />
      <Stack.Screen name="response1" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{}} />
      <Stack.Screen name="oauthredirect" options={{}} />
    </Stack>
  );
}
