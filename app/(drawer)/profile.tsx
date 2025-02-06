import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";

const uri =
  "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8";

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/appbackground-25-lighting-light.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Jessica</Text>
          <View style={styles.imageProfile}>
            <ImageBackground source={{ uri: uri }} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="user" color={Colors.pallete.light} size={24} />
          </View>
          <Text style={styles.text}>Jessica</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="phone" color={Colors.pallete.light} size={24} />
          </View>
          <Text style={styles.text}>555 555 555</Text>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="mail" color={Colors.pallete.light} size={24} />
          </View>
          <Text style={styles.text}>jessica@gmail.com</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerContainer: {
    backgroundColor: Colors.pallete.lightBlue,
    width: "120%",
    height: 250,
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    alignItems: "center",
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
    marginTop: 60,
    overflow: "hidden",
  },
  image: {
    objectFit: "cover",
    width: 150,
    height: 150,
  },
  body: {
    flex: 1,
    marginTop: -50,
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
    borderColor: Colors.pallete.lightBlue,
    marginTop: 10,
  },
  text: {
    color: Colors.pallete.light,
    fontSize: 24,
  },
});
