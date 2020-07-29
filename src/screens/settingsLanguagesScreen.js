import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { white, blue, yellow, gray } from '../utils/colors';
import RadioForm from 'react-native-simple-radio-button';
import Button from '../components/button';
import { handleLanguage } from '../actions/language';
import { connect } from 'react-redux';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';

const { width, height } = Dimensions.get('window');

const languagesProps = [
  { label: 'English', value: 'english' },
  { label: 'Kinyarwanda', value: 'kinyarwanda' },
];

class SettingsLanguageScreen extends Component {
  state = {
    language: 'english',
    setLanguage: '',
  };

  componentDidMount() {
    getLanguage().then((data) => data && this.setState({ language: data }));
  }

  handleLanguageSubmit = () => {
    const { setLanguage } = this.state;
    this.props.dispatch(handleLanguage(setLanguage));
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'SplashScreen' }],
    });
  };

  render() {
    const { language } = this.state;
    return (
      <View>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, height }}
        >
          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.label}>
                  {languages[language].settingsLanguageScreen.title}
                </Text>
                <Text style={styles.description}>
                  {languages[language].settingsLanguageScreen.description}
                </Text>
              </View>
              <View>
                <RadioForm
                  radio_props={languagesProps}
                  initial={0}
                  animation={true}
                  onPress={(value) => this.setState({ setLanguage: value })}
                  style={styles.radionBtn}
                />
              </View>
              <Button
                label={languages[language].settingsLanguageScreen.buttonLabel}
                handleClick={this.handleLanguageSubmit}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default connect()(SettingsLanguageScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
    height,
    paddingTop: 100,
    paddingBottom: 100,
  },
  label: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  description: {
    color: yellow,
    fontFamily: 'regular',
    textAlign: 'center',
    fontSize: 18,
  },
  textContainer: {
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  radioBtn: {
    fontFamily: 'regular',
    color: gray,
    fontSize: 20,
  },
});
