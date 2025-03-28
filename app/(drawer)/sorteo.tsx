import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import ButtonComponent from "@/components/ButtonComponent";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserInfo } from "@/hooks/useGoogleFirebaseOauth";
import getDocumentById, { getDate } from "@/scripts/getData";

export default function App() {
  const [targetDate, setTargetDate] = useState("");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (isNaN(target)) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return difference > 0
      ? timeLeft
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [canParticipate, setCanParticipate] = useState<boolean>(false);

  useEffect(() => {
    async function getTargetDate() {
      const data = await getDate("sorteo");
      if (data.data) setTargetDate(data.data[0].fecha_sorteo);
    }
    getTargetDate();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  async function getUserData() {
    const storedUser = await AsyncStorage.getItem("user");
    if (storedUser) {
      const userParsed: UserInfo = JSON.parse(storedUser);
      const data = await getDocumentById("usuarios", userParsed.uid || "");
      if (data.data?.testMade >= 2) {
        setCanParticipate(true);
      } else {
        setCanParticipate(false);
      }
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

  async function handlePress() {
    await getUserData();
    //TODO! La función que hace que participe en el sorteo
    if (canParticipate) {
      alert("puedes participar");
    } else {
      alert("No puedes participar hasta que hayas completado 2 Tests");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LottieView
          source={require("@/assets/looties/ruleta.json")}
          autoPlay
          loop
          style={{
            flex: 1,
            width: "100%",
          }}
        />
      </View>
      <Text style={styles.text}>CUENTA ATRÁS</Text>
      <View style={{ flex: 1, paddingTop: 20, width: "100%" }}>
        <View style={styles.counterContainer}>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>{timeLeft.days}</Text>
            <Text style={styles.counterDate}>DÍAS</Text>
          </View>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>{timeLeft.hours}</Text>
            <Text style={styles.counterDate}>HORAS</Text>
          </View>
          <View style={styles.counterElement}>
            <Text style={styles.counterNumber}>{timeLeft.minutes}</Text>
            <Text style={styles.counterDate}>MINUTOS</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textLabel}>GANA 200€</Text>
        <ButtonComponent
          text="Participar"
          link={false}
          disabled={false}
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.pallete.background,
    paddingVertical: 10,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 46,
    color: "#6600ff",
    fontFamily: "Poppins",
  },
  textLabel: {
    fontSize: 36,
    color: "#2aff00",
    fontFamily: "Poppins",
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  counterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  counterElement: {
    borderWidth: 2,
    borderColor: "#6600ff",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 200,
    textAlign: "center",
    justifyContent: "center",
  },
  counterNumber: {
    fontSize: 46,
    color: "#6600ff",
    borderBottomWidth: 2,
    borderColor: "#6600ff",
    textAlign: "center",
    paddingBottom: 2,
    fontFamily: "Poppins",
  },
  counterDate: {
    paddingTop: 20,
    fontSize: 14,
    color: "#6600ff",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
