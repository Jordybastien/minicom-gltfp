import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import LanguageScreen from '../screens/languageScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import ComplaintDetailsScreen from '../screens/complaintDetails';
import TabNavigator from './tabNavigator';
import { blue, white } from '../utils/colors';

const StackNavigatorConfig = {
  headerMode: 'screen',
};
const StackConfig = {
  SplashScreen: {
    name: 'SplashScreen',
    component: SplashScreen,
    options: { headerShown: false },
  },
  HomeScreen: {
    name: 'HomeScreen',
    component: TabNavigator,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      title: 'GLTFP',
    },
  },
  LanguageScreen: {
    name: 'LanguageScreen',
    component: LanguageScreen,
    options: { headerShown: false },
  },
  OnBoardingScreen: {
    name: 'OnBoardingScreen',
    component: OnBoardingScreen,
    options: { headerShown: false },
  },
  ComplaintDetailsScreen: {
    name: 'ComplaintDetailsScreen',
    component: ComplaintDetailsScreen,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      title: 'Complaint Details',
    },
  },
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['SplashScreen']} />
      <Stack.Screen {...StackConfig['HomeScreen']} />
      <Stack.Screen {...StackConfig['LanguageScreen']} />
      <Stack.Screen {...StackConfig['OnBoardingScreen']} />
      <Stack.Screen {...StackConfig['ComplaintDetailsScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
