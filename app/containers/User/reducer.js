/*
 *
 * User reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_UP,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state
        .set('loading', true)
        .set('error', false)
        .set('token', false);
    case SIGN_UP_SUCCESS:
      return state
        .set('loading', false)
        .set('token', action.token);
    case SIGN_UP_ERROR:
      return state
        .set('error', action.error.message)
        .set('loading', false);
    case CHANGE_USERNAME:
      return state
        .set('username', action.username);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    default:
      return state;
  }
}

export default userReducer;
