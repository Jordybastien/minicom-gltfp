import api from './api';

export const sendComplaint = async (complaint) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(complaint);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch(
    'http://46.101.182.152:9001/api/auth/MobileSubmitComplain',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error', error));
};

export const searchComplaint = async (data) => {
  const res = await api.post('/auth/FollowComplainMobile', data);
  return res.data;
};
