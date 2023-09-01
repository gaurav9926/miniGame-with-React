// Output Opponent (Computer's) guess
// Two Buttons for user to select if the guess was low of higher than actual number

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Colors from '../constants/colors';
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minValue = 1,
  maxValue = 100;

let numRounds = 0;

const GameScreen = ({
  userNumber,
  onGameOver,
  numRoundsHandler,
}: {
  userNumber: string;
  onGameOver: () => void;
  numRoundsHandler: (arg: number) => void;
}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  console.debug('userNumber: ', userNumber);
  console.debug('currentGuess: ', currentGuess);

  useEffect(() => {
    const userValue = parseInt(userNumber);
    if (userValue === currentGuess) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    // UseEffect for start of new Game after game Over
    minValue = 1;
    maxValue = 100;
    numRounds = 0;
  }, []);

  const ButtonPressHandler = (str: string) => {
    const userValue = parseInt(userNumber);

    if (
      (str === 'lower' && currentGuess < userValue) ||
      (str === 'higher' && currentGuess > userValue)
    ) {
      Alert.alert("Don't lie", 'Please select correct button...', [
        {style: 'cancel', text: 'Okay'},
      ]);
      return;
    }

    numRounds = numRounds + 1;
    numRoundsHandler(numRounds);

    if (str === 'lower') {
      maxValue = currentGuess;
    } else {
      minValue = currentGuess + 1;
    }
    const newValue = generateRandomBetween(minValue, maxValue, currentGuess);

    setCurrentGuess(newValue);
  };
  return (
    <View style={styles.rootContainer}>
      <View>
        <Title> Opponent's Guess </Title>
        <NumberContainer valueNumber={currentGuess}></NumberContainer>
      </View>

      <View>
        <Text> Higher or Lower</Text>
      </View>
      <View style={styles.outerContainer}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressFunction={ButtonPressHandler.bind(this, 'higher')}
              children="+"
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressFunction={ButtonPressHandler.bind(this, 'lower')}
              children="-"
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.buttonContainer}>
        <PrimaryButton
          onPressFunction={ButtonPressHandler.bind(this, 'higher')}>
          +
        </PrimaryButton>
        <PrimaryButton onPressFunction={ButtonPressHandler.bind(this, 'lower')}>
          -
        </PrimaryButton>
      </View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    padding: 24,
  },
  outerContainer: {
    // flex: 1,
    padding: 15,
    marginTop: 30,
    marginHorizontal: 24,
    backgroundColor: Colors.primary600,
    borderRadius: 10,
    elevation: 5, // only for Android
    alignItems: 'center',
  },

  buttonsContainer: {
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
