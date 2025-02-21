import { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import { useRouter } from "expo-router";

export type UserInfo = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
  verified_email: boolean;
};

WebBrowser.maybeCompleteAuthSession();

const ANDROID_CLIENT_ID = process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID;
const IOS_CLIENT_ID = process.env.EXPO_PUBLIC_IOS_CLIENT_ID;
const WEB_CLIENT_ID = process.env.EXPO_PUBLIC_WEB_CLIENT_ID;

export function useGoogleOauth() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const router = useRouter();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      getUserInfo(authentication?.accessToken);
    }
  }, [response]);

  const getUserInfo = async (token: string | undefined) => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      setUserInfo(user);
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleRedirect = () => {
    WebBrowser.maybeCompleteAuthSession();
  };

  const getStoredUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const userParsed: UserInfo = await JSON.parse(userData); // Parse the stored JSON string
        return userParsed;
      }
      return null; // Return null if no user is found
    } catch (error) {
      console.error("Failed to retrieve user data:", error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUserInfo(null);
      router.replace("/greetings2");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { userInfo, promptAsync, handleRedirect, getStoredUser, logout };
}
