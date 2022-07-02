import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const { ACCENT_500 } = Colors;

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: ACCENT_500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: ACCENT_500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
