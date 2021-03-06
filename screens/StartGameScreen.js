import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import React from "react";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/UI/InstructionText";

const { PRIMARY_800, ACCENT_500, PRIMARY_500 } = Colors;

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText> Enter a number </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
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
  buttonsContainer: {
    flexDirection: "row",
  },
  rootContainer: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  numberInput: {
    fontSize: 32,
    height: 50,
    borderBottomColor: ACCENT_500,
    borderBottomWidth: 2,
    color: ACCENT_500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
