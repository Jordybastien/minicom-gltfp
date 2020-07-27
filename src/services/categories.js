import api from './api';

export const fetchCategories = async () => {
  const res = await api.get('/auth/ShowComplainCategory');
  return res.data;
};
