import { Drawer } from "expo-router/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import BrandName from "@/components/BrandName";
import LogOutButton from "@/components/LogOutButton";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: Colors.pallete.background }, // Color del Drawer
        drawerActiveTintColor: Colors.drawer.activeTintColor, // Texto activo
        drawerInactiveTintColor: Colors.drawer.inactiveTintColor, // Texto inactivo
        drawerType: "front",
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "#fff",
          drawerIcon: () => <Entypo name="home" color={"#fff"} size={24} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerTitle: "",
          headerTransparent: true,
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Entypo name="user" color={Colors.pallete.light} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "Sobre Nosotros",
          headerTitle: "",
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Entypo name="slideshare" color={Colors.pallete.light} size={24} />
          ),
          headerBackground: () => (
            <LinearGradient
              colors={["#090124", "#6600ff", "#ff00ff"]}
              start={{ x: 0.2, y: 0.2 }}
              end={{ x: 1, y: 1 }}
              locations={[0.08, 0.7, 1]}
              style={styles.button}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="sorteo"
        options={{
          title: "Sorteo",
          headerTitle: "",
          headerBackground: () => (
            <LinearGradient
              colors={["#090124", "#6600ff", "#ff00ff"]}
              start={{ x: 0.2, y: 0.2 }}
              end={{ x: 1, y: 1 }}
              locations={[0.08, 0.7, 1]}
              style={styles.button}
            />
          ),
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Entypo name="trophy" color={Colors.pallete.light} size={24} />
          ),
        }}
      />
    </Drawer>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{
          width: "100%",
          height: 100,
          alignSelf: "center",
          marginBottom: 10,
          resizeMode: "contain",
        }}
      />
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <BrandName />
      </View>
      <DrawerItemList {...props} />
      <View style={{ flex: 1 }} />
      <View style={styles.footer}>
        <LogOutButton />
        <Text style={styles.footerText}>www.univia.app</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "center",
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    fontFamily: "Spectral",
  },
  button: {
    padding: 15,
    alignItems: "center",
    flex: 1,
  },
  drawerIAtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#75d8fc",
    fontFamily: "Spectral",
  },
  footer: {
    paddingVertical: 40,
    width: "100%",
    gap: 10,
  },
  footerText: {
    color: Colors.pallete.light,
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
    fontFamily: "Spectral",
  },
});
