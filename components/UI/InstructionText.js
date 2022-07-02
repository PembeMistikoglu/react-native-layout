import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const { ACCENT_500 } = Colors;

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: ACCENT_500,
    fontSize: 24,
  },
});
