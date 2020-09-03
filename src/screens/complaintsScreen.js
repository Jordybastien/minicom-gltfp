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
import { languages, startUpLanguage } from '../utils/language';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import { searchComplaint } from '../services/complaint';
import { fetchCountries } from '../services/countries';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

class ComplaintsScreen extends Component {
  state = {
    phoneNumber: '',
    language: startUpLanguage,
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
    const { keywords, countries } = this.props;
    if (response) {
      this.setState({ spinner: true });
      searchComplaint(data)
        .then((res) => {
          if (res.response_status === true) {
            this.setState({ spinner: false });
            this.props.navigation.navigate('ComplaintDetailsScreen', {
              name: keywords[language].complaint_details_form_title
                ? keywords[language].complaint_details_form_title
                : keywords[startUpLanguage].complaint_details_form_title,
              data: res.response_datas[0],
              countries,
            });
          } else {
            Toast.show(
              keywords[language].notFound
                ? keywords[language].notFound
                : keywords[startUpLanguage].notFound,
              Toast.LONG
            );
            setTimeout(() => {
              this.setState({ spinner: false });
            }, 1000);
          }
        })
        .catch(() => {
          this.setState({ spinner: false });
          Toast.show(
            keywords[language].notFound
              ? keywords[language].notFound
              : keywords[startUpLanguage].notFound,
            Toast.LONG
          );
        });
    }
  };

  validateData = () => {
    const { phoneNumber, complaintNo, language } = this.state;
    const { keywords } = this.props;

    let response = true;
    let errorMessage = '';

    if (!complaintNo) {
      response = false;
      errorMessage = keywords[language].complaintNo
        ? keywords[language].complaintNo
        : keywords[startUpLanguage].complaintNo;
    }

    if (!phoneNumber) {
      response = false;
      errorMessage = keywords[language].phoneNumber
        ? keywords[language].phoneNumber
        : keywords[startUpLanguage].phoneNumber;
    } else if (phoneNumber.length < 10 || phoneNumber.length > 10) {
      response = false;
      errorMessage = keywords[language].wrongPhoneNumber
        ? keywords[language].wrongPhoneNumber
        : keywords[startUpLanguage].wrongPhoneNumber;
    }

    const data = {};

    data.phone_number = phoneNumber;
    data.complaint_code = complaintNo;

    errorMessage && Toast.show(errorMessage, Toast.LONG);
    return { response, data };
  };

  render() {
    const { phoneNumber, language, complaintNo, spinner } = this.state;
    const { keywords } = this.props;

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
                textContent={
                  keywords[language].searching_label_mobile
                    ? keywords[language].searching_label_mobile
                    : keywords[startUpLanguage].searching_label_mobile
                }
                textStyle={styles.spinnerTextStyle}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                  {keywords[language].follow_complaint
                    ? keywords[language].follow_complaint
                    : keywords[startUpLanguage].follow_complaint}
                </Text>
              </View>
              <View style={styles.txtBoxContainer}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {keywords[language].phone_form_input_title
                      ? keywords[language].phone_form_input_title
                      : keywords[startUpLanguage].phone_form_input_title}
                  </Text>
                </View>
                <View style={styles.txtBoxInputContainer}>
                  <TextInput
                    style={styles.txtBoxInput}
                    placeholder="0700000000"
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
                    {keywords[language].complain_code_form
                      ? keywords[language].complain_code_form
                      : keywords[startUpLanguage].complain_code_form}
                  </Text>
                </View>
                <View style={styles.txtBoxInputContainer}>
                  <TextInput
                    style={styles.txtBoxInput}
                    placeholder="000000"
                    onChangeText={(complaintNo) =>
                      this.setState({ complaintNo })
                    }
                    value={complaintNo}
                  />
                </View>
              </View>
              <View>
                <Button
                  label={
                    keywords[language].complaint_submit
                      ? keywords[language].complaint_submit
                      : keywords[startUpLanguage].complaint_submit
                  }
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

const mapStateToProps = ({ keywords, countries }) => {
  return {
    keywords,
    countries: Object.values(countries),
  };
};

export default connect(mapStateToProps)(ComplaintsScreen);

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
