import { View, Image, Text, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

import Colors from "../constants/colors";

const { PRIMARY_800, PRIMARY_500 } = Colors;

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highLight}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: PRIMARY_800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 26,
  },
  highLight: {
    fontFamily: "open-sans-bold",
    color: PRIMARY_500,
  },
});
