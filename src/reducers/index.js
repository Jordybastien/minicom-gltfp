import { combineReducers } from 'redux';
import loading from './loading';
import error from './error';
import categories from './categories';
import languages from './languages';
import keywords from './keywords';
import countries from './countries';

export default combineReducers({
  loading,
  error,
  categories,
  languages,
  keywords,
  countries,
});
