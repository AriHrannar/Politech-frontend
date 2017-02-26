/**
*
* ProgressBar
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import Percent from './Percent';



class ProgressBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { percent } = { percent: 53 }; //this.state;

    // Hide progress bar if percent is less than 0.
    const isHidden = percent < 0 || percent >= 101;

    // Set `state.percent` as width.
    const style = { width: `${(percent <= 0 ? 0 : percent)}%` };

    return (
      <Wrapper hidden={isHidden}>
        <span style={{ position: 'absolute' }}>{percent}%</span>
        <Percent style={style} />
      </Wrapper>
    );
  }
}

ProgressBar.propTypes = {

};

export default ProgressBar;
