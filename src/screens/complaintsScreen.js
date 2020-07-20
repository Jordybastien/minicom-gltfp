import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { blue, white, lowGray } from '../utils/colors';
import Button from '../components/button';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';

const { width, height } = Dimensions.get('window');

class ComplaintsScreen extends Component {
  state = {
    phoneNumber: '',
    language: 'english',
  };

  componentDidMount() {
    getLanguage().then((data) => data && this.setState({ language: data }));
  }

  handleSearch = () => {
    this.props.navigation.navigate('ComplaintDetailsScreen');
  };

  render() {
    const { phoneNumber, language } = this.state;
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, height }}
        >
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>
                {languages[language].complaintsScreen.title}
              </Text>
            </View>
            <View style={styles.txtBoxContainer}>
              <View style={styles.txtBoxLabelContainer}>
                <Text style={styles.txtBoxLabel}>
                  {languages[language].complaintsScreen.phoneTitle}
                </Text>
              </View>
              <View style={styles.txtBoxInputContainer}>
                <TextInput
                  style={styles.txtBoxInput}
                  placeholder={
                    languages[language].complaintsScreen.phonePlaceholder
                  }
                  onChangeText={(lastName) => this.setState({ lastName })}
                  value={phoneNumber}
                />
              </View>
            </View>
            <View style={styles.txtBoxContainer}>
              <View style={styles.txtBoxLabelContainer}>
                <Text style={styles.txtBoxLabel}>
                  {languages[language].complaintsScreen.complaintTitle}
                </Text>
              </View>
              <View style={styles.txtBoxInputContainer}>
                <TextInput
                  style={styles.txtBoxInput}
                  placeholder={
                    languages[language].complaintsScreen.complaintPlaceholder
                  }
                  onChangeText={(lastName) => this.setState({ lastName })}
                  value={phoneNumber}
                />
              </View>
            </View>
            <View>
              <Button
                label={languages[language].complaintsScreen.buttonLabel}
                handleClick={this.handleSearch}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ComplaintsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: 60,
  },
  headerTitle: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 30,
  },
  txtBoxContainer: {
    marginBottom: 30,
    width: width - 80,
  },
  txtBoxLabelContainer: {
    marginBottom: 10,
  },
  txtBoxLabel: {
    color: blue,
    fontSize: 18,
    fontFamily: 'bold',
  },
  txtBoxInput: {
    backgroundColor: lowGray,
    height: 50,
    paddingLeft: 10,
    borderRadius: 10,
  },
});
