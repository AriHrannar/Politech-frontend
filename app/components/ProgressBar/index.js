/**
*
* ProgressBar
*
*/

import React from 'react';
import { Motion, spring } from 'react-motion';
import Wrapper from './Wrapper';
import Percent from './Percent';

const ANIMATION_OPTIONS = { stiffness: 60, damping: 15 };

const getStyles = (percent) => ({
  width: spring(percent, ANIMATION_OPTIONS),
});

class ProgressBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { percent } = { percent: 73 }; //this.state;

    // Hide progress bar if percent is less than 0.
    const isHidden = percent < 0 || percent >= 101;

    // Set `state.percent` as width.
    //const style = { width: `${(percent <= 0 ? 0 : percent)}%` };

    return (
      <Motion
        defaultStyle={{ width: 0 }}
        style={getStyles(percent)}
      >
        {({ width }) =>
          <Wrapper hidden={isHidden}>
            <span style={{ position: 'absolute' }}>{percent}%</span>
            <Percent style={{ width: `${(width <= 0 ? 0 : width)}%` }} />
          </Wrapper>
        }
      </Motion>
    );
  }
}

ProgressBar.propTypes = {

};

export default ProgressBar;
