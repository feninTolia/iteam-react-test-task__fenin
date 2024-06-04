import axios from 'axios';

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['X-RapidAPI-Key'] = process.env.NEXT_PUBLIC_RAPID_API_KEY;
    config.headers['X-RapidAPI-Host'] = process.env.NEXT_PUBLIC_RAPID_API_HOST;
  }

  return config;
});
