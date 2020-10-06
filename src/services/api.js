import axios from 'axios';

export const baseURL = 'https://cbtcomplaints.minicom.gov.rw/api/';

const apiCall = axios.create({
  baseURL,
});

export default {
  get: apiCall.get,
  post: apiCall.post,
  put: apiCall.put,
  patch: apiCall.patch,
  delete: apiCall.delete,
};
