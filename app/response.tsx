import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PieChart } from "react-native-gifted-charts";

type DataType = {
  name: string;
  description: string;
  percent: string;
}[];

export default function ResponseScreen() {
  const params = useLocalSearchParams();
  let parsedData: DataType = [];

  try {
    parsedData = typeof params.data === "string" ? JSON.parse(params.data) : [];
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  const data = [
    {
      value: Number(parsedData[0].percent.replace("%", "")),
      text: parsedData[0].name.substring(0, 2),
    },
    {
      value: Number(parsedData[1].percent.replace("%", "")),
      text: parsedData[1].name.substring(0, 2),
    },
    {
      value: Number(parsedData[2].percent.replace("%", "")),
      text: parsedData[2].name.substring(0, 2),
    },
    {
      value: Number(parsedData[3].percent.replace("%", "")),
      text: parsedData[3].name.substring(0, 2),
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <PieChart
            data={data}
            donut
            extraRadius={30}
            showText
            textColor={"#333"}
            fontWeight="600"
            showTextBackground
          />
          {parsedData.length > 0 ? (
            parsedData.map(({ name, description, percent }, index) => {
              const percentNumber = Number(percent.replace("%", ""));
              return (
                <View key={index} style={styles.item}>
                  <Text style={styles.textPercent}>
                    {percentNumber.toString()}
                  </Text>
                  <Text style={styles.textName}>{name}</Text>
                  <Text style={styles.textDescription}>{description}</Text>
                </View>
              );
            })
          ) : (
            <Text style={styles.text}>No data available</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    flexGrow: 1,
    borderWidth: 1,
  },
  container: {
    flex: 1,
  },
  item: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  textName: {
    color: "black",
    fontSize: 24,
    fontWeight: 600,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  textDescription: {
    color: "black",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  textPercent: {
    color: "black",
    fontSize: 40,
  },
});
