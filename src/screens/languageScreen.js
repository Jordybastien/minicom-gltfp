import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { white, blue, yellow, gray } from '../utils/colors';
import HeaderLogo from '../components/headerLogo';
import RadioForm from 'react-native-simple-radio-button';
import Button from '../components/button';

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
    console.log('====> Handle CLicked');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderLogo />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Choose Language</Text>
            <Text style={styles.description}>
              Select in which Language you would like to use the Application.
            </Text>
          </View>
          <View>
            <RadioForm
              radio_props={languages}
              initial={0}
              animation={true}
              onPress={(value) => console.log('======>Choosen', value)}
              style={styles.radionBtn}
            />
          </View>
          <Button label="Continue" handleClick={this.handleLanguageSubmit} />
        </View>
      </View>
    );
  }
}

export default LanguageScreen;

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
