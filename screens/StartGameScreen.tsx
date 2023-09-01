import React, {useState} from 'react';
import {Alert} from 'react-native';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

const StartGameScreen = ({
  gameNumberHandler,
}: {
  gameNumberHandler: (arg: string) => void;
}) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetFunctionHandler = () => {
    console.debug('Reset Pressed.');
    setEnteredNumber('');
  };

  const textChangeHandler = value => {
    setEnteredNumber(value);
  };

  const inputFunctionHandler = () => {
    const intNumber = parseInt(enteredNumber);

    if (isNaN(intNumber) || intNumber <= 0 || intNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be between 0 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetFunctionHandler,
        },
      ]);
    } else {
      console.debug('Valid Number.');
      gameNumberHandler(enteredNumber);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Title> Guess my Number! </Title>
      <View style={styles.outerContainer}>
        <Text style={styles.intructionText}> Enter a Number: </Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={textChangeHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressFunction={resetFunctionHandler}
              children="Reset"
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPressFunction={inputFunctionHandler}
              children="Confirm"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intructionText: {
    fontSize: 20,
    color: Colors.primary700,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
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
  textInput: {
    height: 50,
    width: 50,
    padding: 0.2,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    marginVertical: 3,
    marginBottom: 10,
    fontSize: 30,
    color: '#043d6e',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
