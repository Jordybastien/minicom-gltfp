import { combineReducers } from 'redux';
import loading from './loading';
import error from './error';
import categories from './categories';

export default combineReducers({
  loading,
  error,
  categories,
});
