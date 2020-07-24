import { FETCH_CATEGORIES } from './actionTypes';

export const getCategories = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    categories,
  };
};
