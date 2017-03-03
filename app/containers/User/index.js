/*
 *
 * User
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { signUp, changePassword, changeUsername } from './actions';
import { makeSelectUser } from './selectors';
import messages from './messages';

export class User extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { username, password, error } = this.props.User;
    return (
      <div>
        <Helmet
          title="User"
          meta={[
            { name: 'description', content: 'Description of User' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <form>
          <TextField
            hintText="awesome@email.com"
            floatingLabelText="Email"
            value={username}
            onChange={this.props.onChangeUsername}
          />
          <br />
          <TextField
            hintText="passw0rd"
            name="password"
            floatingLabelText="Password"
            type="password"
            value={password}
            onChange={this.props.onChangePassword}
          />
          <br />
          <RaisedButton
            label="Sign Up"
            primary
            onClick={this.props.onSignUp}
          />
          <br />
          <br />
          {!error ? '' : `Error >  ${error}`}
        </form>
      </div>
    );
  }
}

User.propTypes = {
  onSignUp: React.PropTypes.func,
  onChangeUsername: React.PropTypes.func,
  onChangePassword: React.PropTypes.func,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  User: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  User: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSignUp: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signUp());
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
