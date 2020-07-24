import { fetchCategories } from '../services/categories';
import { getCategories } from './categories';

export const handleInitialData = () => {
  return async (dispatch) => {
    return getInitialData().then(({ categories }) => {
      dispatch(getCategories(categories));
    });
  };
};

const getInitialData = async () => {
  const [categories] = await Promise.all([fetchCategories()]);

  return {
    categories,
  };
};
