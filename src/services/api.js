import axios from 'axios';

export const baseURL = 'http://197.243.20.94:13000/api/';

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
