import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const { PRIMARY_800, ACCENT_500, PRIMARY_500 } = Colors;

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    padding: 16,
    marginTop: 50,
    backgroundColor: PRIMARY_800,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    // Android Shadow
    elevation: 4,

    // IOS Shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
