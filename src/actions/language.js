import {
  CHANGE_LANGUAGE,
  FETCH_LANGUAGES,
  FETCH_KEYWORDS,
} from './actionTypes';
import { setLanguage } from '../utils/storage';

const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};

export const getLanguages = (languages) => {
  return {
    type: FETCH_LANGUAGES,
    languages,
  };
};

export const getKeywords = (keywords) => {
  return {
    type: FETCH_KEYWORDS,
    keywords,
  };
};

export const handleLanguage = (language) => {
  return async (dispatch) => {
    setLanguage(language);
    return dispatch(changeLanguage(language));
  };
};
