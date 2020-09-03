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
import { languages, startUpLanguage } from '../utils/language';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const AboutUsScreen = (props) => {
  const [language, setLanguage] = useState(startUpLanguage);

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });

  const { keywords } = props;

  return (
    <View>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.mainContainer}>
          <HeaderLogo />
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {keywords[language].footer_menu_title
                  ? keywords[language].footer_menu_title
                  : keywords[startUpLanguage].footer_menu_title}
              </Text>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                {keywords[language].slider_paragraph
                  ? keywords[language].slider_paragraph
                  : keywords[startUpLanguage].slider_paragraph}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = ({ keywords }) => {
  return {
    keywords,
  };
};

export default connect(mapStateToProps)(AboutUsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
});
