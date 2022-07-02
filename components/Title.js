import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const { ACCENT_500 } = Colors;

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: ACCENT_500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: ACCENT_500,
    padding: 12,
  },
});
