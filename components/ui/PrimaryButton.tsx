import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const PrimaryButton = ({
  children,
  onPressFunction,
}: {
  children: string;
  onPressFunction: () => void;
}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressFunction}
        style={styles.buttonInnerContainer}
        android_ripple={{color: Colors.buttonRipple}}>
        <Text style={styles.buttonText}> {children} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    // flex: 1,
    borderRadius: 28,
    overflow: 'hidden',
    margin: 4,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: Colors.buttonColor,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default PrimaryButton;
