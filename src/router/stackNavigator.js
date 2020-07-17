import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import LanguageScreen from '../screens/languageScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import TabNavigator from './tabNavigator';

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
    options: { headerShown: false },
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
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator {...StackNavigatorConfig}>
      <Stack.Screen {...StackConfig['SplashScreen']} />
      <Stack.Screen {...StackConfig['HomeScreen']} />
      <Stack.Screen {...StackConfig['LanguageScreen']} />
      <Stack.Screen {...StackConfig['OnBoardingScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
