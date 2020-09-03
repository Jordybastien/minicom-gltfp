import { AsyncStorage } from 'react-native';

const LANGUAGE_KEY = 'GLTFP:LANGUAGE';
const ONBOARDING_KEY = 'GLTFP:ONBOARDING';
const KEYWORDS_KEY = 'GLTFP:KEYWORDS_KEY';

export const changeOnboardingStatus = (status) => {
  AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(status));
};

export const setKeywords = (keywords) => {
  AsyncStorage.setItem(KEYWORDS_KEY, JSON.stringify(keywords));
};

export const getKeywords = async () => {
  const keywords = await AsyncStorage.getItem(KEYWORDS_KEY);
  return JSON.parse(keywords);
};

export const findReplaceKeywords = async (newKeywords) => {
  const keywords = await getKeywords();
  keywords &&
    AsyncStorage.removeItem(KEYWORDS_KEY).then(() => setKeywords(newKeywords));
  return true;
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
