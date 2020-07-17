import { AsyncStorage } from 'react-native';

const LANGUAGE_KEY = 'GLTFP:LANGUAGE';
const ONBOARDING_KEY = 'GLTFP:ONBOARDING';

export const changeOnboardingStatus = (status) => {
  AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(status));
};

export const getOnBoardingStatus = async () => {
  const status = await AsyncStorage.getItem(ONBOARDING_KEY);
  return JSON.parse(status);
};

export const setLanguage = (language) => {
  AsyncStorage.setItem(LANGUAGE_KEY, language);
};

export const getLanguage = async () => {
  const language = await AsyncStorage.getItem(LANGUAGE_KEY);
  return language;
};
