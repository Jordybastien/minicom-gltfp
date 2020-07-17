import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { blue } from '../../utils/colors';

const Dots = ({ count, handleClickZ, handleClickO, handleClickT }) => {
  return (
    <View style={styles.dotsContainer}>
      {count === 0 && (
        <>
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickZ}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickO}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
        </>
      )}
      {count === 1 && (
        <>
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickZ}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickO}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
        </>
      )}
      {count === 2 && (
        <>
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickZ}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickO}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickT}
          />
        </>
      )}
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 30,
  },
  dot: {
    backgroundColor: blue,
    borderRadius: 50,
    width: 10,
    height: 10,
    marginLeft: 5,
    opacity: 0.3,
  },
  halfOpacity: {
    opacity: 0.3,
  },
  fullOpacity: {
    opacity: 1,
  },
});
