import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import HeaderLogo from '../components/headerLogo';
import { white, blue, gray, yellow } from '../utils/colors';
import { getLanguage } from '../utils/storage';
import { languages, startUpLanguage } from '../utils/language';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Button from '../components/button';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const FeedBackSuccessScreen = (props) => {
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
            <AntDesign name="checkcircle" size={200} color={blue} />
            <View style={styles.textContainer}>
              <Text style={styles.headerText}>
                {keywords[language].feedback_success_title
                  ? keywords[language].feedback_success_title
                  : keywords[startUpLanguage].feedback_success_title}
              </Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {keywords[language].feedback_success_body
                  ? keywords[language].feedback_success_body
                  : keywords[startUpLanguage].feedback_success_body}
              </Text>
            </View>
            <Button
              label={
                keywords[language].back_home
                  ? keywords[language].back_home
                  : keywords[startUpLanguage].back_home
              }
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

const mapStateToProps = ({ keywords }) => {
  return {
    keywords,
  };
};

export default connect(mapStateToProps)(FeedBackSuccessScreen);

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
    color: gray,
    fontFamily: 'regular',
    fontSize: 20,
    textAlign: 'center',
  },
  headerText: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
});
