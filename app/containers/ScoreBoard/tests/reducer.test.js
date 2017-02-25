
import { fromJS } from 'immutable';
import scoreBoardReducer from '../reducer';

describe('scoreBoardReducer', () => {
  it('returns the initial state', () => {
    expect(scoreBoardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
