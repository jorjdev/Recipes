import Axios, { } from 'axios';
import { API_BASE_URL } from '../config/endpoints';

const instance = Axios.create({
  baseURL: API_BASE_URL,
});

instance.defaults.headers.common.Authorization = process.env.SPOONACULAR_API_KEY;
Axios.defaults.headers.post['Content-Type'] = 'application/json';
