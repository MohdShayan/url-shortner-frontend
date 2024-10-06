import axios from 'axios';

const API_URL= 'http://localhost:3003/api/url'

export const createURL = async (urlData) => {
  return axios.post(API_URL, urlData);
};

export const getAllUrls = async () => {
  return axios.get(API_URL);
};

export const getUrlById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const deleteUrlById = async (id) =>{
  return axios.delete(`${API_URL}/${id}`)
}






