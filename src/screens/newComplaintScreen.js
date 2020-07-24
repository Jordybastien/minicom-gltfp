import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  TextInput,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { blue, lowGray, white, gray, yellow } from '../utils/colors';
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../components/button';
import { CheckBox } from 'react-native-elements';
import { getLanguage } from '../utils/storage';
import { languages } from '../utils/language';
import DocumentPicker from 'react-native-document-picker';
import { connect } from 'react-redux';
import { fetchCategories } from '../services/categories';
import { Picker, Item } from 'native-base';

const { width, height } = Dimensions.get('window');

const genders = [
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'male' },
];

const categories = [
  {
    label: 'Category 1',
    value: 'cat-1',
  },
  {
    label: 'Category 2',
    value: 'cat-2',
  },
];

class NewComplaintScreen extends Component {
  state = {
    phoneNumber: '',
    gender: '',
    category: '',
    selNotification: '',
    sms: false,
    email: false,
    emailAddress: '',
    language: 'english',
    usedCategories: null,
  };

  componentDidMount() {
    getLanguage().then((data) => data && this.setState({ language: data }));
    fetchCategories().then((data) =>
      this.setState({
        usedCategories: data.map(({ id, complain_name }) => ({
          label: complain_name,
          value: id,
        })),
      })
    );
  }

  handleSubmit = () => {
    this.props.navigation.navigate('SuccessScreen');
  };

  handleUpload = async () => {
    console.log('======>Triggered');
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  handleCategory = (data) => {
    console.log('======>data', data);
  };

  render() {
    const {
      phoneNumber,
      category,
      sms,
      email,
      emailAddress,
      language,
      usedCategories,
      gender,
    } = this.state;
    genders[0].label = languages[language].newComplaintScreen.male;
    genders[1].label = languages[language].newComplaintScreen.female;
    console.log('==========>categories', usedCategories);
    return (
      <ScrollView
        style={styles.scrollView}
        ref={(scrollView) => (this.scrollView = scrollView)}
      >
        <View style={styles.mainContainer}>
          <ImageBackground
            source={require('../../assets/bg_lines.png')}
            style={{
              width,
              height: Platform.OS === 'ios' ? height + 250 : height + 280,
            }}
          >
            <View style={styles.container}>
              {usedCategories ? (
                <>
                  <View style={styles.txtBoxContainer}>
                    <View style={styles.txtBoxLabelContainer}>
                      <Text style={styles.txtBoxLabel}>
                        {languages[language].newComplaintScreen.phoneLabel}
                      </Text>
                    </View>
                    <View style={styles.txtBoxInputContainer}>
                      <TextInput
                        style={styles.txtBoxInput}
                        placeholder={
                          languages[language].newComplaintScreen
                            .phonePlaceholder
                        }
                        onChangeText={(phoneNumber) =>
                          this.setState({ phoneNumber })
                        }
                        value={phoneNumber}
                      />
                    </View>
                  </View>
                  {/* <View style={styles.txtBoxContainer}>
                <View style={styles.txtBoxLabelContainer}>
                  <Text style={styles.txtBoxLabel}>
                    {languages[language].newComplaintScreen.genderLabel}
                  </Text>
                </View>
                <RadioForm
                  radio_props={genders}
                  animation={true}
                  formHorizontal={true}
                  onPress={(value) => this.setState({ gender: value })}
                  style={styles.radionBtn}
                />
              </View> */}
                  <View style={[styles.txtBoxContainer, { marginBottom: 0 }]}>
                    <View style={styles.txtBoxLabelContainer}>
                      <Text style={styles.txtBoxLabel}>
                        {
                          languages[language].newComplaintScreen
                            .notificationLabel
                        }
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.notificationsContainer,
                        Platform.OS === 'android' && {
                          flex: 1,
                          marginBottom: 40,
                        },
                      ]}
                    >
                      <CheckBox
                        title={languages[language].newComplaintScreen.male}
                        checked={gender === 'male'}
                        onPress={() => this.setState({ gender: 'male' })}
                        containerStyle={styles.singleCheck}
                      />

                      <CheckBox
                        title={languages[language].newComplaintScreen.female}
                        checked={gender === 'female'}
                        onPress={() => this.setState({ gender: 'female' })}
                        containerStyle={styles.singleCheck}
                      />
                    </View>
                  </View>
                  <View style={[styles.txtBoxContainer, { marginBottom: 75 }]}>
                    <View style={styles.txtBoxLabelContainer}>
                      <Text style={styles.txtBoxLabel}>
                        {languages[language].newComplaintScreen.categoryLabel}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      {/* <DropDownPicker
                    items={usedCategories}
                    defaultValue={category}
                    containerStyle={{ height: 50 }}
                    style={styles.picker}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    dropDownStyle={{ backgroundColor: lowGray }}
                    onChangeItem={(item) =>
                      this.setState({
                        category: item.value,
                      })
                    }
                    searchable={true}
                    placeholder={
                      languages[language].newComplaintScreen.selectLabel
                    }
                    searchablePlaceholder={
                      languages[language].newComplaintScreen.searchLabel
                    }
                  /> */}
                      <Item picker style={[styles.txtBox]}>
                        <Picker
                          mode="dropdown"
                          style={{ width: 100, color: '#C7C7CD' }}
                          onValueChange={(value) => this.handleCategory(value)}
                          placeholder={languages[language].newComplaintScreen.selectLabel}
                          style={{ width: undefined }}
                        >
                          <Picker.Item
                            label={
                              languages[language].newComplaintScreen.selectLabel
                            }
                            value={null}
                          />
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
                        {languages[language].newComplaintScreen.messageLabel}
                      </Text>
                    </View>
                    <View style={styles.txtBoxInputContainer}>
                      <TextInput
                        style={[styles.txtBoxInput, { height: 80 }]}
                        placeholder={
                          languages[language].newComplaintScreen
                            .messagePlaceholder
                        }
                        onChangeText={(phoneNumber) =>
                          this.setState({ phoneNumber })
                        }
                        value={phoneNumber}
                        multiline={true}
                        numberOfLines={4}
                      />
                    </View>
                  </View>
                  <View style={[styles.txtBoxContainer, { marginBottom: 0 }]}>
                    <View style={styles.txtBoxLabelContainer}>
                      <Text style={styles.txtBoxLabel}>
                        {
                          languages[language].newComplaintScreen
                            .notificationLabel
                        }
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.notificationsContainer,
                        Platform.OS === 'android' && {
                          flex: 1,
                          marginBottom: 40,
                        },
                      ]}
                    >
                      <CheckBox
                        title="SMS"
                        checked={sms}
                        onPress={() => this.setState({ sms: !sms })}
                        containerStyle={styles.singleCheck}
                      />

                      <CheckBox
                        title="Email"
                        checked={email}
                        onPress={() => {
                          this.setState({ email: !email });
                          !email && this.scrollView.scrollToEnd();
                        }}
                        containerStyle={styles.singleCheck}
                      />
                    </View>
                  </View>
                  {email && (
                    <View style={styles.txtBoxContainer}>
                      <View style={styles.txtBoxLabelContainer}>
                        <Text style={styles.txtBoxLabel}>
                          What is your email?
                        </Text>
                      </View>
                      <View style={styles.txtBoxInputContainer}>
                        <TextInput
                          style={styles.txtBoxInput}
                          placeholder="Email"
                          onChangeText={(emailAddress) =>
                            this.setState({ emailAddress })
                          }
                          value={emailAddress}
                        />
                      </View>
                    </View>
                  )}
                  <View style={styles.txtBoxContainer}>
                    <View style={styles.txtBoxLabelContainer}>
                      <Text style={styles.txtBoxLabel}>
                        Do you want to upload supporting documents?
                      </Text>
                      <Text style={styles.optional}>Optional</Text>
                    </View>
                    {/* Button here */}
                    <View style={styles.uploadContainer}>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={this.handleUpload}
                      >
                        <Text style={styles.btnLabel}>Upload</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={Platform.OS === 'android' && styles.androidResp}>
                    <Button
                      label={languages[language].newComplaintScreen.button}
                      handleClick={this.handleSubmit}
                    />
                  </View>
                </>
              ) : (
                <View>
                  <ActivityIndicator size="small" color={blue} />
                </View>
              )}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (categories) => {
  return {
    categories,
  };
};

export default connect(mapStateToProps)(NewComplaintScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    // paddingTop: 50,
    paddingBottom: 50,
    height,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
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
  radionBtn: {
    paddingRight: 100,
    width: width - 100,
    // flex: 1,
    justifyContent: 'space-between',
  },
  picker: {
    backgroundColor: lowGray,
    borderRadius: 10,
    height: 50,
  },
  androidResp: {
    marginBottom: 50,
  },
  notificationsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: width - 200,
  },
  singleCheck: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    fontFamily: 'regular',
    color: gray,
  },
  optional: {
    color: yellow,
    fontFamily: 'italic',
  },
  btn: {
    backgroundColor: yellow,
    borderRadius: 30,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 20,
  },
  uploadContainer: {
    width: width - 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  txtBox: {
    backgroundColor: lowGray,
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
