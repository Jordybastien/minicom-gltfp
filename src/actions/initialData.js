import { fetchCategories } from '../services/categories';
import { getCategories } from './categories';
import { fetchLanguages, fetchKeywords } from '../services/language';
import { getLanguages, getKeywords } from './language';
import { showLoading, hideLoading } from './loading';
import { getCountries } from './countries';
import { fetchCountries } from '../services/countries';
import { fetchBorderLocations } from '../services/borderLocations';
import { getBorderLocations } from './borderLocations';

export const handleInitialData = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(
        ({ categories, languages, keywords, countries, borderLocations }) => {
          dispatch(getCategories(categories));
          dispatch(getLanguages(languages));
          dispatch(getKeywords(keywords));
          dispatch(getCountries(countries));
          dispatch(getBorderLocations(borderLocations));
          dispatch(hideLoading());
        }
      )
      .catch(() => dispatch(hideLoading()));
  };
};

const getInitialData = async () => {
  const [
    categories,
    languages,
    keywords,
    countries,
    borderLocations,
  ] = await Promise.all([
    fetchCategories(),
    fetchLanguages(),
    fetchKeywords(),
    fetchCountries(),
    fetchBorderLocations(),
  ]);

  return {
    categories,
    languages,
    keywords,
    countries,
    borderLocations,
  };
};
