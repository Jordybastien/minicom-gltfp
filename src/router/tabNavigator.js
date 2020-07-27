import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { white, blue, gray } from '../utils/colors';
import HomeScreen from '../screens/homeScreen';
import ComplaintsScreen from '../screens/complaintsScreen';
import SettingsScreen from '../screens/settingsScreen';

const RouteConfigs = {
  HomeScreen: {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <AntDesign name="home" size={30} color={focused ? blue : gray} />
      ),
      title: 'Home',
    },
  },
  ComplaintsScreen: {
    name: 'ComplaintsScreen',
    component: ComplaintsScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name="layers-triple"
          size={30}
          color={focused ? blue : gray}
        />
      ),
      title: 'Complaints',
    },
  },
  SettingsScreen: {
    name: 'SettingsScreen',
    component: SettingsScreen,
    options: {
      tabBarIcon: ({ tintColor, focused }) => (
        <Feather name="settings" size={30} color={focused ? blue : gray} />
      ),
      title: 'Settings',
    },
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: blue,
    style: {
      // height: 56,
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

const TabNavigator = () => {
  return (
    <Tab.Navigator {...TabNavigatorConfig}>
      <Tab.Screen {...RouteConfigs['HomeScreen']} />
      <Tab.Screen {...RouteConfigs['ComplaintsScreen']} />
      <Tab.Screen {...RouteConfigs['SettingsScreen']} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
