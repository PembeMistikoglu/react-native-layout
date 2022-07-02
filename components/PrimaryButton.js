import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("I am pressed!");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // style prop can take callBack function which have 'pressed' argument which is boolean true if we press!
        // when we give multiple styles in array, all are applied!
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    // any effect or any styling from inside container to outside contaier will be clipped
    // The overflow is clipped, and the rest of the content will be invisible
    // I can use it for like when I have borderRadius in the outer container and do not want inner containers overflow!
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonInnerContainer: {
    backgroundColor: "#971154",
    paddingVertical: 8,
    paddingHorizontal: 16,

    // IOS shadow

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  //
  pressed: {
    opacity: 0.75,
  },
});
