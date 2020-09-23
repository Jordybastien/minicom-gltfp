import { FETCH_BORDER_LOCATIONS } from './actionTypes';

export const getBorderLocations = (borderLocations) => {
  return {
    type: FETCH_BORDER_LOCATIONS,
    borderLocations,
  };
};
