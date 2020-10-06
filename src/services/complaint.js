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
    'https://cbtcomplaints.minicom.gov.rw/api/auth/MobileSubmitComplain',
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
