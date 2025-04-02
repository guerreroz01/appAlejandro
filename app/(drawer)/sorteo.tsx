import React, { useEffect, useState } from "react";
import CuentaAtras from "@/components/CuentaAtras";
import { getDate } from "@/scripts/getData";
import Winner from "@/components/Winner";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Sorteo() {
  const [montoSorteo, setMontoSorteo] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [contactEmail, setContactEmail] = useState("")
  const [winner, setWinner] = useState({1: "", 2: "", 3: ""})
  const [isExpired, setIsExpired] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  const calculateTimeLeft = (targetDate: string) => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (isNaN(target)) {
      return {
        timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
        isExpired: true,
      };
    }

    const isExpired = difference <= 0;

    return { isExpired };
  };

  useEffect(() => {
    const { isExpired } = calculateTimeLeft(targetDate);
    setIsExpired(isExpired);
  }, [targetDate]);

  useEffect(() => {
    async function getTargetDate() {
      const data = await getDate("sorteo");
      if (data.data) {
        const {fecha_sorteo, monto_sorteo, primer_premio, segundo_premio, tercer_premio, contact_email} = data.data[0]
        setTargetDate(fecha_sorteo);
        setMontoSorteo(monto_sorteo);
        setWinner({1: primer_premio, 2: segundo_premio, 3: tercer_premio})
        setContactEmail(contact_email)
      }
      setLoading(false);
    }
    getTargetDate();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.pallete.background }}>
        <ActivityIndicator size="large" color="#ff00ff" />
      </View>
    );
  }

  if (!isExpired)
    return <CuentaAtras montoSorteo={montoSorteo} targetDate={targetDate} />;

  return <Winner contactEmail={contactEmail} winner={winner} />;
}
