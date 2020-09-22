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
import { startUpLanguage } from '../utils/language';

const { width, height } = Dimensions.get('window');

class LanguageScreen extends Component {
  state = {
    language: startUpLanguage,
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
    const { languages: fetchedLanguages, keywords } = this.props;
    const { language } = this.state;

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
                <Text style={styles.label}>
                  {keywords[language].choose_language_label
                    ? keywords[language].choose_language_label
                    : keywords[startUpLanguage].choose_language_label}
                </Text>
                <Text style={styles.description}>
                  {keywords[language].select_language_label
                    ? keywords[language].select_language_label
                    : keywords[startUpLanguage].select_language_label}
                </Text>
              </View>
              <View>
                <RadioForm
                  radio_props={fetchedLanguages}
                  initial={0}
                  animation={true}
                  onPress={(value) => this.setState({ language: value })}
                  style={styles.radioBtn}
                  buttonColor={yellow}
                  selectedButtonColor={yellow}
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

const mapStateToProps = ({ languages, keywords }) => {
  return {
    languages: Object.values(languages).map(
      ({ language_name: label, language_abbreviation: value }) => ({
        label,
        value,
      })
    ),
    keywords,
  };
};

export default connect(mapStateToProps)(LanguageScreen);

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
