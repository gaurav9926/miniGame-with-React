import {View, StyleSheet, Text} from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const GameOverScreen = ({
  newGameHandler,
  numRounds,
  userNumber,
}: {
  newGameHandler: () => void;
  numRounds: number;
  userNumber: string;
}) => {
  return (
    <View style={styles.root}>
      <Title> Game Over </Title>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPressFunction={newGameHandler}>
          Start New Game
        </PrimaryButton>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          The Computer guessed the number {userNumber} in {numRounds} rounds.
        </Text>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 100,
  },
  buttonContainer: {
    // flex: 1,
    height: 100,
    marginHorizontal: 32,
    marginTop: 50,
  },
  textContainer: {
    marginTop: 50,
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 24,
    marginHorizontal: 50,
    borderColor: Colors.primary700
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary700,
  },
});
