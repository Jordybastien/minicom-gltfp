import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { blue, white } from '../utils/colors';
import { getLanguage } from '../utils/storage';
import { languages, startUpLanguage } from '../utils/language';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const HomeScreen = (props) => {
  const [language, setLanguage] = useState(startUpLanguage);

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });
  const { keywords } = props;

  const handleClick = () => {
    Linking.canOpenURL('https://cbtcomplaints.minicom.gov.rw/login').then((supported) => {
      if (supported) {
        Linking.openURL('https://cbtcomplaints.minicom.gov.rw/login');
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
              {keywords[language].slider_paragraph
                ? keywords[language].slider_paragraph
                : keywords[startUpLanguage].slider_paragraph}
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.btn, { marginRight: 5 }]}
              onPress={() =>
                props.navigation.navigate('NewComplaintScreen', {
                  name: keywords[language].complain_form_title
                    ? keywords[language].complain_form_title
                    : keywords[startUpLanguage].complain_form_title,
                })
              }
            >
              <Text style={styles.btnLabel}>
                {keywords[language].complain_form_title
                  ? keywords[language].complain_form_title
                  : keywords[startUpLanguage].complain_form_title}
              </Text>
              <Ionicons
                name="ios-arrow-round-forward"
                size={40}
                color={white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, styles.customizeBtn]}
              onPress={() =>
                props.navigation.navigate('FeedBackScreen', {
                  name: keywords[language].feed_back_label_button
                    ? keywords[language].feed_back_label_button
                    : keywords[startUpLanguage].feed_back_label_button,
                })
              }
            >
              <Text style={[styles.btnLabel, styles.customizeBtnLabel]}>
                {keywords[language].feed_back_label_button
                  ? keywords[language].feed_back_label_button
                  : keywords[startUpLanguage].feed_back_label_button}
              </Text>
              <MaterialIcons name="feedback" size={24} color={blue} />
            </TouchableOpacity>
          </View>
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity
              style={[styles.btn, { marginRight: 5 }]}
              onPress={handleClick}
            >
              <Text style={styles.btnLabel}>
                {keywords[language].login_menu
                  ? keywords[language].login_menu
                  : keywords[startUpLanguage].login_menu}
              </Text>
              <AntDesign name="login" size={30} color={white} />
            </TouchableOpacity>
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

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontFamily: 'bold',
    color: blue,
    fontSize: 18,
  },
  welcomeContainer: {
    width: width - 100,
    marginBottom: 30,
  },
  btnContainer: {
    width: width - 50,
    flexDirection: 'row',
  },

  btn: {
    backgroundColor: blue,
    borderRadius: 30,
    // width: 220,
    flex: 1,
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
    flexDirection: 'row',
  },
  btnLabel: {
    fontFamily: 'bold',
    color: white,
    fontSize: 16,
    marginRight: 5,
  },
  customizeBtn: {
    backgroundColor: white,
    borderColor: blue,
    borderWidth: 1,
  },
  customizeBtnLabel: {
    color: blue,
  },
  loginBtnContainer: {
    width: width - 50,
    flexDirection: 'row',
  },
});
