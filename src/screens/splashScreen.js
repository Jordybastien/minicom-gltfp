import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Spinner } from 'native-base';
import { useFonts } from '@use-expo/font';
import { white, blue } from '../utils/colors';
import {
  getLanguage,
  setLanguage,
  getOnBoardingStatus,
  changeOnboardingStatus,
} from '../utils/storage';

const { width, height } = Dimensions.get('window');

const SplashScreen = (props) => {
  const [showSpinner, setShowSpinner] = useState(false);

  const [isFontLoaded] = useFonts({
    regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
    bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    semiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    italic: require('../../assets/fonts/Montserrat-Italic.ttf'),
  });

  getLanguage().then((data) => !data && setLanguage('english'));

  getOnBoardingStatus().then((data) => !data && changeOnboardingStatus(false));

  setTimeout(() => {
    setShowSpinner(true);
  }, 3000);

  setTimeout(() => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'LanguageScreen' }],
    });
    // TODO: Check if onboarding was done and go to Home Screen
  }, 6000);

  return (
    <View>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/emblem.png')}
            style={styles.logo}
          />
          <View>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 45,
                  fontFamily: isFontLoaded ? 'regular' : null,
                },
              ]}
            >
              GLTFP
            </Text>
          </View>
          <Image
            source={require('../../assets/worldgroup.png')}
            style={styles.bottomLogo}
          />
          {showSpinner && <Spinner color={blue} />}
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 100,
    width: 150,
    height: 150,
  },
  bottomLogo: {
    marginBottom: 50,
  },
  text: {
    color: white,
    fontWeight: 'bold',
    textAlign: 'center',
    color: blue,
    marginBottom: 100,
  },
});
