import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [gameNumber, setGameNumber] = useState<string>();
  const [gameisOver, setGameIsOver] = useState<boolean>(true);
  const [numRounds, setNumRounds] = useState<number>(0);

  const gameNumberHandler = (enteredNumber: string) => {
    setGameNumber(enteredNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const newGameHandler = () => {
    setGameNumber(undefined);
    setGameIsOver(false);
    setNumRounds(0);
  };

  const numRoundsHandler = (num: number) => {
    setNumRounds(num);
  };

  let screen = <StartGameScreen gameNumberHandler={gameNumberHandler} />;

  if (gameNumber) {
    screen = (
      <GameScreen
        userNumber={gameNumber}
        onGameOver={gameOverHandler}
        numRoundsHandler={numRoundsHandler}
      />
    );
  }

  if (gameisOver && gameNumber) {
    console.debug(
      `Game is Over numRounds- ${numRounds} userNumber- ${gameNumber}`,
    );
    screen = (
      <GameOverScreen
        newGameHandler={newGameHandler}
        numRounds={numRounds}
        userNumber={gameNumber}
      />
    );
  }

  return (
    <LinearGradient colors={['#54beff', '#ffff33']} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}>
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {flex: 1, marginHorizontal: 40},
  imageStyle: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
    // backgroundColor: Colors.accentColor,
  },
});

export default App;
