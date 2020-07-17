import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HeaderLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/emblem.png')}
        style={styles.emblem}
      />
      <Image
        source={require('../../../assets/worldgroup.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width - 100,
  },
  emblem: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginRight: 10,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
});
