import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { white, blue } from '../../utils/colors';

const Button = ({ label, handleClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        <Text style={styles.btnLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {},
  btn: {
    backgroundColor: blue,
    borderRadius: 30,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    marginTop: 40,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 20,
  },
});
