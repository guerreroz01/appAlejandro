import * as React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    Spectral: require("@/assets/fonts/SpectralSC-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="greetings1"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="greetings2"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(drawer)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="preguntas"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="response" />
      <Stack.Screen name="+not-found" options={{}} />
    </Stack>
  );
}
