/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Navbar from 'components/Navbar';
// Needed for onTouchTap - Remove when possible
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar />
        <AppWrapper>
          <Helmet
            titleTemplate="%s - React.js Boilerplate"
            defaultTitle="React.js Boilerplate"
            meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
            ]}
          />
          {React.Children.toArray(this.props.children)}
        </AppWrapper>
      </div>
    );
  }
}
