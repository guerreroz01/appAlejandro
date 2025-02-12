import * as React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Colors } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  let hideTimeout: ReturnType<typeof setTimeout>;
  const [barVisibility, setBarVisibility] = React.useState<
    "visible" | "hidden"
  >();
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    Spectral: require("@/assets/fonts/SpectralSC-SemiBold.ttf"),
  });

  NavigationBar.addVisibilityListener(({ visibility }) => {
    if (visibility === "visible") {
      setBarVisibility(visibility);

      // Limpiar cualquier temporizador previo antes de establecer uno nuevo
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      hideTimeout = setTimeout(() => {
        hideNavigationBar();
      }, 5000); // Ocultar después de 5 segundos
    }
  });

  useEffect(() => {
    navigationConfig();

    return () => {
      // Limpiar el temporizador cuando el componente se desmonte
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);
  const navigationConfig = async () => {
    await NavigationBar.setBehaviorAsync("overlay-swipe");
    await NavigationBar.setBackgroundColorAsync(Colors.pallete.background);
    hideNavigationBar();
  };

  const hideNavigationBar = async () => {
    await NavigationBar.setVisibilityAsync("hidden");
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    navigationConfig();
  }, [loaded, barVisibility]);

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
        name="psorteo"
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
      <Stack.Screen
        name="response"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="+not-found" options={{}} />
    </Stack>
  );
}
