import { FETCH_KEYWORDS } from '../actions/actionTypes';

export default function keywords(state = {}, action) {
  switch (action.type) {
    case FETCH_KEYWORDS:
      return {
        ...state,
        ...action.keywords,
      };
    default:
      return state;
  }
}
