import api from './api';

export const fetchBorderLocations = async () => {
  const res = await api.get('/auth/ShowBorderLocation');
  return res.data;
};
