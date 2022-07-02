import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";

const { ACCENT_500, PRIMARY_700 } = Colors;

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[PRIMARY_700, ACCENT_500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
          {/* {userNumber == true ? (
          <GameScreen />
        ) : (
          <StartGameScreen onPickNumber={pickedNumberHandler} />
        )} */}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
