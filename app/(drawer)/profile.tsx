import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useGoogleOauth, UserInfo } from "@/hooks/useGoogleOauth";

const userInfoData = {
  email: "",
  family_name: "",
  given_name: "",
  id: "",
  name: "",
  picture: "",
  verified_email: false,
};

const uri =
  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8";

export default function ProfileScreen() {
  const { getStoredUser } = useGoogleOauth();
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    async function getUserFromAsyncData() {
      const userData = await getStoredUser();
      if (!userData) setUser(userInfoData);
      setUser(userData);
    }
    getUserFromAsyncData();
  }, []);

  return (
    <View style={{ backgroundColor: Colors.pallete.background, flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            height: 350,
            width: "120%",
            overflow: "hidden",
            borderBottomLeftRadius: "50%",
            borderBottomRightRadius: "50%",
            alignItems: "center",
          }}
        >
          <LinearGradient
            colors={["#090124", "#6600ff", "#ff00ff"]}
            start={{ x: 0.2, y: 0.2 }}
            end={{ x: 0.7, y: 0.8 }}
            locations={[0.08, 0.7, 1]}
            style={styles.headerContainer}
          ></LinearGradient>
        </View>
        <View style={{ marginTop: -290, alignItems: "center" }}>
          <Text style={styles.headerTitle}>{user?.given_name}</Text>
          <View style={styles.imageProfile}>
            <ImageBackground
              source={{ uri: user?.picture }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="user" color={Colors.pallete.light} size={24} />
          </View>
          <Text style={styles.text}>{user?.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="mail" color={Colors.pallete.light} size={24} />
          </View>
          <Text style={styles.text}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: "120%",
    height: 500,
    alignItems: "center",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 600,
    color: Colors.pallete.light,
    marginTop: 60,
  },
  imageProfile: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    marginTop: 100,
    overflow: "hidden",
  },
  image: {
    objectFit: "cover",
    width: 150,
    height: 150,
  },
  body: {
    flex: 1,
    marginTop: 0,
  },
  iconContainer: {
    width: 100,
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: "#6600ff",
    marginTop: 10,
  },
  text: {
    color: Colors.pallete.light,
    fontSize: 24,
  },
});
