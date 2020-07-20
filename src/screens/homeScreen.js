import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { blue, white } from '../utils/colors';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => console.log('===>clicked')}
            >
              <Text style={styles.btnLabel}>
                {languages[language].homeScreen.button}
              </Text>
              <Ionicons
                name="ios-arrow-round-forward"
                size={40}
                color={white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontFamily: 'bold',
    color: blue,
    fontSize: 25,
  },
  welcomeContainer: {
    width: width - 100,
    marginBottom: 30,
  },
  btnContainer: {
    width: width - 100,
  },
  btn: {
    backgroundColor: blue,
    borderRadius: 30,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'row',
  },
  btnLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 20,
    marginRight: 10,
  },
});
