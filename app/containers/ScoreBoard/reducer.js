/*
 *
 * ScoreBoard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  politicians: [
    {
      id: 43,
      name: 'Nafn McNafn',
      party: 'some party',
      score: '58',
    }, {
      id: 86,
      name: 'Joe Truthful',
      party: 'best party',
      score: '34',
    },
  ],
});

function scoreBoardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default scoreBoardReducer;
