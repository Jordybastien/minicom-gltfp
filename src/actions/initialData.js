import { fetchCategories } from '../services/categories';
import { getCategories } from './categories';
import { fetchLanguages, fetchKeywords } from '../services/language';
import { getLanguages, getKeywords } from './language';
import { showLoading, hideLoading } from './loading';
import { getCountries } from './countries';
import { fetchCountries } from '../services/countries';

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ categories, languages, keywords, countries }) => {
        dispatch(getCategories(categories));
        dispatch(getLanguages(languages));
        dispatch(getKeywords(keywords));
        dispatch(getCountries(countries));
        dispatch(hideLoading());
      })
      .catch(() => dispatch(hideLoading()));
  };
};

const getInitialData = async () => {
  const [categories, languages, keywords, countries] = await Promise.all([
    fetchCategories(),
    fetchLanguages(),
    fetchKeywords(),
    fetchCountries(),
  ]);

  return {
    categories,
    languages,
    keywords,
    countries,
  };
};
