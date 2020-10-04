import api from './api';

export const sendComplaint = async (complaint, isUpload) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify(complaint);

  const requestOptions = isUpload
    ? {
        method: 'POST',
        body: complaint,
        redirect: 'follow',
      }
    : {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

  fetch(
    'http://197.243.20.94:13000/api/auth/MobileSubmitComplain',
    requestOptions
  )
    .then((result) => {
      return result;
    })
    .catch((error) => console.log('error', error));
};

export const searchComplaint = async (data) => {
  const res = await api.post('/auth/FollowComplainMobile', data);
  return res.data;
};
