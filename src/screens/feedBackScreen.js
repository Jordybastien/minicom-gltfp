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
import { Picker, Item } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get('window');

class FeedBackScreen extends Component {
  state = {
    names: '',
    language: startUpLanguage,
    complaintNo: '',
    usedCategories: this.props.categories,
    selCategory: '',
    message: '',
    rating: null,
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

  handleCategory = (data) => this.setState({ selCategory: data });

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
    const { names, selCategory, rating, message } = this.state;
    const { keywords } = this.props;

    let response = true;
    let errorMessage = '';

    if (!rating) {
      response = false;
      errorMessage = 'Rating Required';
    }

    if (!message) {
      response = false;
      errorMessage = 'Message Required';
    }

    if (!selCategory) {
      response = false;
      errorMessage = 'Category Required';
    }
    if (!names) {
      response = false;
      errorMessage = 'Names Required';
    }

    const data = {};
    // TODO: Add Rating values
    // data.phone_number = phoneNumber;
    // data.complaint_code = complaintNo;

    errorMessage && Toast.show(errorMessage, Toast.LONG);
    return { response, data };
  };

  ratingCompleted = (rating) => this.setState({ rating });

  render() {
    const {
      names,
      language,
      complaintNo,
      spinner,
      usedCategories,
      selCategory,
      message,
    } = this.state;
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
              {/* <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                  {keywords[language].feed_back_label_button
                    ? keywords[language].feed_back_label_button
                    : keywords[startUpLanguage].feed_back_label_button}
                </Text>
              </View> */}
              <View style={styles.txtBoxContainer}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {keywords[language].names
                      ? keywords[language].names
                      : keywords[startUpLanguage].names}
                  </Text>
                </View>
                <View style={styles.txtBoxInputContainer}>
                  <TextInput
                    style={styles.txtBoxInput}
                    placeholder={
                      keywords[language].names
                        ? keywords[language].names
                        : keywords[startUpLanguage].names
                    }
                    onChangeText={(names) => this.setState({ names })}
                    value={names}
                  />
                </View>
              </View>

              <View style={[styles.txtBoxContainer, { marginBottom: 70 }]}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {keywords[language].select_category_title
                      ? keywords[language].select_category_title
                      : keywords[startUpLanguage].select_category_title}
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Item picker style={[styles.txtBox]}>
                    <Picker
                      mode="dropdown"
                      style={{ width: 100, color: '#C7C7CD' }}
                      onValueChange={(value) => this.handleCategory(value)}
                      placeholder={
                        keywords[language].select_category_title
                          ? keywords[language].select_category_title
                          : keywords[startUpLanguage].select_category_title
                      }
                      style={{ width: undefined }}
                      selectedValue={selCategory}
                    >
                      {/* {Platform.OS === 'android' && ( */}
                      <Picker.Item
                        label={
                          languages[language].newComplaintScreen.selectLabel
                        }
                        value={null}
                      />
                      {/* )} */}
                      {usedCategories &&
                        usedCategories.map(({ value, label }, index) => (
                          <Picker.Item
                            key={index}
                            label={label}
                            value={value}
                          />
                        ))}
                    </Picker>
                  </Item>
                </View>
              </View>
              <View style={styles.txtBoxContainer}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {keywords[language].message_form_title
                      ? keywords[language].message_form_title
                      : keywords[startUpLanguage].message_form_title}
                  </Text>
                </View>
                <View style={styles.txtBoxInputContainer}>
                  <TextInput
                    style={[styles.txtBoxInput, { height: 80 }]}
                    placeholder={
                      keywords[language].message_form_title
                        ? keywords[language].message_form_title
                        : keywords[startUpLanguage].message_form_title
                    }
                    onChangeText={(message) => this.setState({ message })}
                    value={message}
                    multiline={true}
                    numberOfLines={4}
                  />
                </View>
              </View>
              <View style={styles.txtBoxContainer}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {keywords[language].rate_stakeholder
                      ? keywords[language].rate_stakeholder
                      : keywords[startUpLanguage].rate_stakeholder}
                  </Text>
                </View>
                <View style={styles.txtBoxInputContainer}>
                  <AirbnbRating
                    count={5}
                    onFinishRating={this.ratingCompleted}
                    selectedColor={blue}
                    showRating={false}
                    defaultRating={0}
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

const mapStateToProps = ({ keywords, countries, categories }) => {
  return {
    keywords,
    countries: Object.values(countries),
    categories:
      categories &&
      Object.values(categories).map(({ id, complain_name }) => ({
        label: complain_name,
        value: id,
      })),
  };
};

export default connect(mapStateToProps)(FeedBackScreen);

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
  txtBox: {
    backgroundColor: lowGray,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
