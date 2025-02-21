import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function oauthredirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/(drawer)/home");
  }, []);
  return <></>;
}
