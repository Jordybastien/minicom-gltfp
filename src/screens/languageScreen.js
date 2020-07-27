import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { white, blue, yellow, gray } from '../utils/colors';
import HeaderLogo from '../components/headerLogo';
import RadioForm from 'react-native-simple-radio-button';
import Button from '../components/button';
import { handleLanguage } from '../actions/language';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const languages = [
  { label: 'English', value: 'english' },
  { label: 'Kinyarwanda', value: 'kinyarwanda' },
];

class LanguageScreen extends Component {
  state = {
    language: '',
  };

  handleLanguageSubmit = () => {
    const { language } = this.state;
    this.props.dispatch(handleLanguage(language)).then(() => {
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'OnBoardingScreen' }],
      });
    });
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, height }}
        >
          <View style={styles.mainContainer}>
            <HeaderLogo />
            <View style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.label}>Choose Language</Text>
                <Text style={styles.description}>
                  Select in which Language you would like to use the
                  Application.
                </Text>
              </View>
              <View>
                <RadioForm
                  radio_props={languages}
                  initial={0}
                  animation={true}
                  onPress={(value) => this.setState({ language: value })}
                  style={styles.radionBtn}
                />
              </View>
              <Button
                label="Continue"
                handleClick={this.handleLanguageSubmit}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default connect()(LanguageScreen);

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
