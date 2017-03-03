/**
*
* Navbar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <AppBar
          title={<Link to="/">Politech </Link>}
          iconElementRight={<Link to="/login">Login </Link>}
        />
      </div>
    );
  }
}

Navbar.propTypes = {

};

export default Navbar;
