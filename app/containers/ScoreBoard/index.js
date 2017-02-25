/*
 *
 * ScoreBoard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectScoreBoard from './selectors';
import CardContainer from '../../components/CardContainer';
import messages from './messages';

export class ScoreBoard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CardContainer>
        <Helmet
          title="ScoreBoard"
          meta={[
            { name: 'description', content: 'Description of ScoreBoard' },
          ]}
        />
        <FormattedMessage {...messages.header} />     
      </CardContainer>
    );
  }
}

ScoreBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ScoreBoard: makeSelectScoreBoard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
