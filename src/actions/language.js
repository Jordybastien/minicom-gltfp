import { CHANGE_LANGUAGE } from './actionTypes';
import { setLanguage } from '../utils/storage';

const changeLanguage = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language,
  };
};

const fetchLanguages = (languages) => {
  return {
    type: FETCH_LANGUAGES,
    languages,
  };
};

export const handleLanguage = (language) => {
  return async (dispatch) => {
    setLanguage(language);
    return dispatch(changeLanguage(language));
  };
};
