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
import CardContainer from 'components/CardContainer';
import ProfilePictureIcon from 'components/ProfilePictureIcon';
import ProgressBar from 'components/ProgressBar';
import makeSelectScoreBoard from './selectors';
import messages from './messages';

export class ScoreBoard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const politicians = this.props.ScoreBoard;
    return (
      <CardContainer>
        <Helmet
          title="ScoreBoard"
          meta={[
            { name: 'description', content: 'Description of ScoreBoard' },
          ]}
        />
        <ProfilePictureIcon />
        <FormattedMessage {...messages.header} />
        <ProgressBar percent={23} updateProgress={this.updateProgress} />
        {politicians[0].name}
      </CardContainer>
    );
  }
}

ScoreBoard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ScoreBoard: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
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
