import api from './api';

export const sendComplaint = async (data) => {
  const res = await api.post('/auth/MobileSubmitComplain', data);
  return res.data;
};

export const searchComplaint = async (data) => {
  const res = await api.post('/auth/FollowComplainMobile', data);
  return res.data;
};
