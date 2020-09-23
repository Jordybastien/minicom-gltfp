import { FETCH_BORDER_LOCATIONS } from '../actions/actionTypes';

export default function borderLocations(state = {}, action) {
  switch (action.type) {
    case FETCH_BORDER_LOCATIONS:
      return {
        ...state,
        ...action.borderLocations,
      };
    default:
      return state;
  }
}
