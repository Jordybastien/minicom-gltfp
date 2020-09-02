import { FETCH_CATEGORIES } from '../actions/actionTypes';

export default function categories(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        ...action.categories,
      };
    default:
      return state;
  }
}
