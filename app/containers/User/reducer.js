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
} from './constants';

const initialState = fromJS({
  username: '',
  password: '',
});

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state;
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
