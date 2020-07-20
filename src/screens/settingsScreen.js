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
import { languages } from '../utils/language';
import { MaterialIcons, Foundation } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const SettingsScreen = (props) => {
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/bg_lines.png')}
        style={{ width, height }}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Account</Text>
          </View>
          <View style={styles.settingsContainer}>
            <View>
              <TouchableOpacity
                style={styles.settingsItem}
                onPress={() =>
                  props.navigation.navigate('SettingsLanguageScreen', {
                    name: languages[language].settingsLanguageScreen.title,
                  })
                }
              >
                <View style={styles.itemIcon}>
                  <MaterialIcons name="language" size={35} color={blue} />
                </View>
                <View style={styles.itemLabelContainer}>
                  <Text style={styles.itemLabel}>
                    {languages[language].settingsScreen.language}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.settingsItem}
                onPress={() =>
                  props.navigation.navigate('AboutUsScreen', {
                    name: languages[language].aboutUsScreen.title,
                  })
                }
              >
                <View style={[styles.itemIcon, { paddingLeft: 10 }]}>
                  <Foundation name="clipboard-notes" size={35} color={blue} />
                </View>
                <View style={styles.itemLabelContainer}>
                  <Text style={styles.itemLabel}>
                    {languages[language].settingsScreen.aboutUs}
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

export default SettingsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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
