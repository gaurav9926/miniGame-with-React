import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

const Title = ({children}: {children: React.ReactNode}) => {
  return <Text style={styles.title}>{children} </Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    margin: 10,
  },
});

export default Title;
