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
  BadRequest = 400,
  NotFound = 404,
  OK = 200,
}

export enum ToastMessage {
  Unauthorised = 'Don\'t forget to log in',
  BadRequest = 'Check the entered data',
  NetworkError = 'NetworkError',
}

export enum RequestStatus {
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}
