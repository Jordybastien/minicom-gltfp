import { FETCH_LANGUAGES } from '../actions/actionTypes';

export default function languages(state = {}, action) {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return {
        ...state,
        ...action.languages,
      };
    default:
      return state;
  }
}
