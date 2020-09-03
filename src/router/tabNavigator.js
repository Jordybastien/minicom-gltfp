import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { white, blue, gray } from '../utils/colors';
import HomeScreen from '../screens/homeScreen';
import ComplaintsScreen from '../screens/complaintsScreen';
import SettingsScreen from '../screens/settingsScreen';
import { languages, startUpLanguage } from '../utils/language';
import { getLanguage } from '../utils/storage';
import { connect } from 'react-redux';

const RouteConfigs = {
  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
  },
  ComplaintsScreen: {
    name: 'ComplaintsScreen',
    component: ComplaintsScreen,
  },
  SettingsScreen: {
    name: 'SettingsScreen',
    component: SettingsScreen,
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: blue,
    style: {
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  const [language, setLanguage] = useState(startUpLanguage);
  useEffect(() => {
    getLanguage().then((data) => data && setLanguage(data));
  });

  const { keywords } = props;
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen
        {...RouteConfigs['HomeScreen']}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign name="home" size={30} color={focused ? blue : gray} />
          ),
          title: keywords[language].home_menu
            ? keywords[language].home_menu
            : keywords[startUpLanguage].home_menu,
        }}
      />
      <Tab.Screen
        {...RouteConfigs['ComplaintsScreen']}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name="layers-triple"
              size={30}
              color={focused ? blue : gray}
            />
          ),
          title: keywords[language].follow_complaint
            ? keywords[language].follow_complaint
            : keywords[startUpLanguage].follow_complaint,
        }}
      />
      <Tab.Screen
        {...RouteConfigs['SettingsScreen']}
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Feather name="settings" size={30} color={focused ? blue : gray} />
          ),
          title: keywords[language].setting
            ? keywords[language].setting
            : keywords[startUpLanguage].setting,
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = ({ keywords }) => {
  return {
    keywords,
  };
};

export default connect(mapStateToProps)(TabNavigator);
