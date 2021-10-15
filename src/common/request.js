import axios from 'axios';

const requestMethod = (method, url) => {
  switch (method) {
    case 'GET': 
      return axios.get(url)
      .then((response) => {
          return response;
      })
      .catch((error) => {
          return error;
      });
    case 'DELETE':
      return axios.delete(url)
      .then((response) => {
          return response;
      })
      .catch((error) => {
          return error;
      });
    default:
      break;
  }
};

export default requestMethod;
