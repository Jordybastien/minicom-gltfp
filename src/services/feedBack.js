import api from './api';

export const sendFeedBack = async (data) => {
  const res = await api.post('/auth/MobileAddFeedBack', data);
  return res.data;
};
