import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { blue, white, lowGray, gray } from '../utils/colors';
import Button from '../components/button';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import { searchComplaint } from '../services/complaint';
import { fetchCountries } from '../services/countries';

const { width, height } = Dimensions.get('window');

class ComplaintsScreen extends Component {
  state = {
    phoneNumber: '',
    language: 'english',
    complaintNo: '',
  };

  componentDidMount() {
    getLanguage().then((data) => data && this.setState({ language: data }));
  }

  handleSearch = () => {
    const { language } = this.state;
    this.props.navigation.navigate('ComplaintDetailsScreen', {
      name: languages[language].complaintDetailsScreen.title,
    });
  };

  handleSubmit = () => {
    const { response, data } = this.validateData();
    const { language } = this.state;
    if (response) {
      this.setState({ spinner: true });
      searchComplaint(data)
        .then((res) => {
          if (res.response_status === true) {
            fetchCountries().then((countries) => {
              this.setState({ spinner: false });
              this.props.navigation.navigate('ComplaintDetailsScreen', {
                name: languages[language].complaintDetailsScreen.title,
                data: res.response_datas[0],
                countries,
              });
            });
          } else {
            console.log()
            this.setState({ spinner: false });
            Toast.show(languages[language].errorMessage.notFound, Toast.LONG);
          }
        })
        .catch(() => {
          this.setState({ spinner: false });
          Toast.show(languages[language].errorMessage.notFound, Toast.LONG);
        });
    }
  };

  validateData = () => {
    const { phoneNumber, complaintNo, language } = this.state;

    let response = true;
    let errorMessage = '';

    if (!complaintNo) {
      response = false;
      errorMessage = languages[language].errorMessage.complaintNo;
    }

    if (!phoneNumber) {
      response = false;
      errorMessage = languages[language].errorMessage.phoneNumber;
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      response = false;
      errorMessage = languages[language].errorMessage.wrongPhoneNumber;
    }

    const data = {};

    data.phone_number = phoneNumber;
    data.complaint_code = complaintNo;

    errorMessage && Toast.show(errorMessage, Toast.LONG);
    return { response, data };
  };

  render() {
    const { phoneNumber, language, complaintNo, spinner } = this.state;
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/bg_lines.png')}
          style={{ width, height }}
        >
          {spinner ? (
            <View style={styles.container}>
              <Spinner
                visible={this.state.spinner}
                textContent={'Searching...'}
                textStyle={styles.spinnerTextStyle}
              />
            </View>
          ) : (
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
                    onChangeText={(phoneNumber) =>
                      !isNaN(phoneNumber) && this.setState({ phoneNumber })
                    }
                    value={phoneNumber}
                    maxLength={10}
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
                    onChangeText={(complaintNo) =>
                      this.setState({ complaintNo })
                    }
                    value={complaintNo}
                  />
                </View>
              </View>
              <View>
                <Button
                  label={languages[language].complaintsScreen.buttonLabel}
                  handleClick={this.handleSubmit}
                />
              </View>
            </View>
          )}
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
  spinnerTextStyle: {
    fontFamily: 'regular',
    color: gray,
  },
});
