import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Modulo1 } from "./src/components/modulo1";

export default function App() {
  return (
    <View style={styles.container}>
      <Modulo1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
