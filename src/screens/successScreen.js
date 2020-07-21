import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import HeaderLogo from '../components/headerLogo';
import { white, blue, gray } from '../utils/colors';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Button from '../components/button';

const { width, height } = Dimensions.get('window');

const SuccessScreen = (props) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });
  return (
    <View>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.mainContainer}>
          <HeaderLogo />
          <View style={styles.container}>
            <AntDesign name="checkcircle" size={200} color={blue} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {languages[language].successScreen.text}
              </Text>
            </View>
            <Button
              label={languages[language].successScreen.button}
              handleClick={() =>
                props.navigation.reset({
                  index: 0,
                  routes: [{ name: 'HomeScreen' }],
                })
              }
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 30,
  },
  descriptionContainer: {
    width: width - 100,
  },
  description: {
    textAlign: 'center',
    color: gray,
    fontFamily: 'regular',
    fontSize: 18,
  },
  circle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: width - 100,
    marginTop: 30,
  },
  text: {
    color: blue,
    fontFamily: 'regular',
    fontSize: 20,
    textAlign: 'center',
  },
});
