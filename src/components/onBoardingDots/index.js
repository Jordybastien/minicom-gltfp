import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { blue, white } from '../../utils/colors';

const Dots = ({
  count,
  handleClickZ,
  handleClickO,
  handleClickT,
  handleClickTh,
  handleClickF,
  handleClickFi,
  handleClickS,
}) => {
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
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
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
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
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
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
          />
        </>
      )}
      {count === 3 && (
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
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
          />
        </>
      )}
      {count === 4 && (
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
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
          />
        </>
      )}
      {count === 5 && (
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
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickS}
          />
        </>
      )}
      {count === 6 && (
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
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickT}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickTh}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickF}
          />
          <TouchableOpacity
            style={[styles.dot, styles.halfOpacity]}
            onPress={handleClickFi}
          />
          <TouchableOpacity
            style={[styles.dot, styles.fullOpacity]}
            onPress={handleClickS}
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
    marginRight: 15,
  },
  dot: {
    backgroundColor: white,
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
