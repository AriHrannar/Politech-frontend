/*
 *
 * User actions
 *
 */

import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function signUpSuccess(token) {
  console.log('sign up success called with', token);
  return {
    type: SIGN_UP_SUCCESS,
    token,
  };
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error,
  };
}

export function signUp() {
  return {
    type: SIGN_UP,
  };
}
