import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { makeSelectUser } from 'containers/User/selectors';
import { SIGN_UP } from 'containers/User/constants';
import { signUpSuccess, signUpError } from './actions';


export function* postSignUp() {
  // Select user from store
  const user = yield select(makeSelectUser());
  const requestURL = 'http://localhost:8000/rest-auth/registration/';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user.username,
      email: user.username,
      password1: user.password,
      password2: user.password,
    }),
  };
  try {
    // Call our request helper (see 'utils/request')
    const token = yield call(request, requestURL, requestOptions);
    yield put(signUpSuccess(token));
  } catch (err) {
    yield put(signUpError(err));
  }
}


// Individual exports for testing
export function* signupSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(SIGN_UP, postSignUp);
}

// All sagas to be loaded
export default [
  signupSaga,
];
