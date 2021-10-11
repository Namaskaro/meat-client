import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1';

const API_URL_2 = 'http://localhost:3000';

export const request = async ({ url, method, params, data }) => {
  const response = await axios[method](`${API_URL}/${url}`, { params }, data);
  return response.data.data;
};

export const requestUser = async ({ url, method, data }) => {
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
