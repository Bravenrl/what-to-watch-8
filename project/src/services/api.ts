import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AuthStatus } from '../const';
import { API_URL, HttpCode, REQEST_TIMEOUT } from './const';
import { getToken } from './token';

export type UnauthorisedCb = () => {
  payload: AuthStatus;
  type: string;
};


export const createApi = (cb:UnauthorisedCb): AxiosInstance => {
  const api = axios.create(
    {
      baseURL: API_URL,
      timeout: REQEST_TIMEOUT,
    });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        config.headers['X-Token'] = token;
      }
      return config;
    });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (err:AxiosError) => {
      const {response} = err;
      if(response?.status===HttpCode.Unauthorised) {
        cb();
      }
      return Promise.reject(err);
    },
  );

  return api;
};


