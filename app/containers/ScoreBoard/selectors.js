import { createSelector } from 'reselect';

/**
 * Direct selector to the scoreBoard state domain
 */
const selectScoreBoardDomain = () => (state) => state.get('scoreBoard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ScoreBoard
 */

const makeSelectScoreBoard = () => createSelector(
  selectScoreBoardDomain(),
  (substate) => substate.toJS()
);

export default makeSelectScoreBoard;
export {
  selectScoreBoardDomain,
};
