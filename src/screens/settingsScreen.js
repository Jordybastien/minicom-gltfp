import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { blue, white, gray, lowGray } from '../utils/colors';
import { getLanguage } from '../utils/storage';
import { languages, startUpLanguage } from '../utils/language';
import { MaterialIcons, Foundation } from '@expo/vector-icons';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

const SettingsScreen = (props) => {
  const [language, setLanguage] = useState(startUpLanguage);

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });

  const { keywords } = props;

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
              {' '}
              {keywords[language].setting
                ? keywords[language].setting
                : keywords[startUpLanguage].setting}
            </Text>
          </View>
          <View style={styles.settingsContainer}>
            <View>
              <TouchableOpacity
                style={styles.settingsItem}
                onPress={() =>
                  props.navigation.navigate('SettingsLanguageScreen', {
                    name: keywords[language].change_language
                      ? keywords[language].change_language
                      : keywords[startUpLanguage].change_language,
                  })
                }
              >
                <View style={styles.itemIcon}>
                  <MaterialIcons name="language" size={35} color={blue} />
                </View>
                <View style={styles.itemLabelContainer}>
                  <Text style={styles.itemLabel}>
                    {keywords[language].change_language
                      ? keywords[language].change_language
                      : keywords[startUpLanguage].change_language}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.settingsItem}
                onPress={() =>
                  props.navigation.navigate('AboutUsScreen', {
                    name: keywords[language].footer_menu_title
                      ? keywords[language].footer_menu_title
                      : keywords[startUpLanguage].footer_menu_title,
                  })
                }
              >
                <View style={[styles.itemIcon, { paddingLeft: 10 }]}>
                  <Foundation name="clipboard-notes" size={35} color={blue} />
                </View>
                <View style={styles.itemLabelContainer}>
                  <Text style={styles.itemLabel}>
                    {keywords[language].footer_menu_title
                      ? keywords[language].footer_menu_title
                      : keywords[startUpLanguage].footer_menu_title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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

export default connect(mapStateToProps)(SettingsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  headerContainer: {
    paddingTop: 80,
    paddingLeft: 30,
  },
  headerTitle: {
    color: blue,
    fontFamily: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  settingsContainer: {
    backgroundColor: white,
    paddingTop: 20,
    paddingBottom: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomColor: lowGray,
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  itemLabelContainer: {
    paddingLeft: 10,
  },
  itemLabel: {
    fontFamily: 'regular',
    color: gray,
    fontSize: 18,
  },
});
