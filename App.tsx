import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./pages/answers/calculator";
import Navbar from "./pages/answers/navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calculator />
      {/* <Navbar /> */}
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
