import axios from 'axios';

export const getHelper = async (url, parameters) => {
  return axios
    .get(url, {
      params: parameters,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response)
    .catch(response => response);
};
