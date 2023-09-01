import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({valueNumber}: {valueNumber: number}) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textContainer}>{valueNumber}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  viewContainer: {
    borderWidth: 4,
    borderColor: Colors.accentColor,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 36,
    color: Colors.accentColor,
    fontWeight: 'bold',
  },
});
