import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/splashScreen';
import LanguageScreen from '../screens/languageScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import ComplaintDetailsScreen from '../screens/complaintDetails';
import SettingsLanguageScreen from '../screens/settingsLanguagesScreen';
import AboutUsScreen from '../screens/aboutUsScreen';
import NewComplaintScreen from '../screens/newComplaintScreen';
import SuccessScreen from '../screens/successScreen';
import FeedBackScreen from '../screens/feedBackScreen';
import TabNavigator from './tabNavigator';
import FeedBackSuccessScreen from '../screens/feedSuccessScreen';
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
      title: 'Minicom-GLTFP',
      headerLeft: null,
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
    },
  },
  SettingsLanguageScreen: {
    name: 'SettingsLanguageScreen',
    component: SettingsLanguageScreen,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      // title: 'Change Language',
    },
  },
  AboutUsScreen: {
    name: 'AboutUsScreen',
    component: AboutUsScreen,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
      // title: 'About Us',
    },
  },
  NewComplaintScreen: {
    name: 'NewComplaintScreen',
    component: NewComplaintScreen,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
    },
  },
  SuccessScreen: {
    name: 'SuccessScreen',
    component: SuccessScreen,
    options: { headerShown: false },
  },
  FeedBackSuccessScreen: {
    name: 'FeedBackSuccessScreen',
    component: FeedBackSuccessScreen,
    options: { headerShown: false },
  },
  FeedBackScreen: {
    name: 'FeedBackScreen',
    component: FeedBackScreen,
    options: {
      headerShown: true,
      headerStyle: {
        backgroundColor: blue,
      },
      headerTintColor: white,
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
      <Stack.Screen
        {...StackConfig['ComplaintDetailsScreen']}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: white,
        })}
      />
      <Stack.Screen
        {...StackConfig['FeedBackScreen']}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: white,
        })}
      />
      <Stack.Screen
        {...StackConfig['SettingsLanguageScreen']}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: white,
        })}
      />
      <Stack.Screen
        {...StackConfig['AboutUsScreen']}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: white,
        })}
      />
      <Stack.Screen
        {...StackConfig['NewComplaintScreen']}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: blue,
          },
          headerTintColor: white,
        })}
      />
      <Stack.Screen {...StackConfig['SuccessScreen']} />
      <Stack.Screen {...StackConfig['FeedBackSuccessScreen']} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
