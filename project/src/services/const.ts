export const API_URL = 'https://8.react.pages.academy/wtw';
export const REQEST_TIMEOUT = 5000;
export const AUTN_TOKEN_NAME = 'wtw-token';

export enum ApiRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Promo = '/promo',
  Comments = '/comments',
  Favorite = '/favorite',
}

export const enum HttpCode {
  Unauthorised = 401,
  NotFound = 404,
  BadRequest = 400,
  OK = 200,
}

export const enum ToastMessage {
  Unauthorised = 'log in, please',
  ВadRequest = 'request error, check the entered data',
  NotFound = 'data not available',
  NetworkErr = 'network error',
  LoadFiail = 'failed data loading'
}
