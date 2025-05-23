import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Calculator: React.FC = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [total, setTotal] = useState("");

  const handleAddNumbers = (): void => {
    if (firstNumber && secondNumber) {
      const sum: number = parseFloat(firstNumber) + parseFloat(secondNumber);
      setTotal(sum.toString());
    } else {
      setTotal("Please enter both numbers");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.calculatorContainer}>
        <Text style={styles.title}>Adding Two Numbers</Text>

        <TextInput
          style={styles.input}
          placeholder="First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNumbers}>
          <Text style={styles.buttonText}>Add Two Numbers</Text>
        </TouchableOpacity>

        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Total: </Text>
          <Text style={styles.resultValue}>{total ? total : ""}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  calculatorContainer: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultContainer: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultValue: {
    fontSize: 18,
  },
});

export default Calculator;
