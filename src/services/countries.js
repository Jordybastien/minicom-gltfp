import api from './api';

export const fetchCountries = async () => {
  const res = await api.get('/auth/MobileCountries');
  return res.data;
};
