import api from './api';

export const fetchCategories = async () => {
  const res = await api.get('/auth/ShowComplainCategory');
  console.log('=======>data', res.data)
  return res.data;
};
