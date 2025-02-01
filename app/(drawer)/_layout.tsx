import { Drawer } from "expo-router/drawer";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";

export default function Layout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: Colors.drawer.backgroundColor }, // Color del Drawer
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
          headerStyle: { backgroundColor: Colors.drawer.backgroundColor },
          headerTintColor: "#fff",
          drawerIcon: () => (
            <Entypo name="home" color={Colors.pallete.light} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: () => (
            <Entypo name="user" color={Colors.pallete.light} size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "Sobre Nosotros",
          drawerIcon: () => (
            <Entypo name="slideshare" color={Colors.pallete.light} size={24} />
          ),
        }}
      />
    </Drawer>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80, alignSelf: "center", marginBottom: 10 }}
      />
      <View style={styles.header}>
        <Text style={styles.drawerTitle}>UNIV</Text>
        <Text style={styles.drawerIAtitle}>IA</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.footer}>
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
  drawerIAtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#75d8fc",
    fontFamily: "Spectral",
  },
  footer: {
    alignSelf: "center",
    height: "100%",
    justifyContent: "flex-end",
  },
  footerText: {
    color: Colors.pallete.light,
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Poppins",
  },
});
