import api from './api';

export const fetchLanguages = async () => {
  const res = await api.get('/auth/ShowAllLanguages');
  return res.data;
};

export const fetchKeywords = async () => {
  const res = await api.get('/auth/ShowAllKeywords');
  return res.data;
};
