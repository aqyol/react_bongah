import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaGoogle, FaCheck } from 'react-icons/fa';
import { login } from '../../../../../containers/util/APIUtils';

class LoginForm extends PureComponent {
  static propTypes = {
    openRegisterForm: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      remember: false,
      email: '',
      password: '',
    };
  }

  signIn = (e) => {
    e.preventDefault();
    const loginData = {
      userName: this.state.email,
      password: this.state.password,
    };

    login(loginData).then((responseData) => {
      // tslint:disable-next-line:no-console
      console.log(responseData);
    });
  }

  toggleRemember = (e) => {
    this.setState({
      remember: e.currentTarget.checked,
    });
  }

  updateEmail = (e) => {
    this.setState({
      email: e.currentTarget.value,
    });
  }

  updatePassword = (e) => {
    this.setState({
      password: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div
        className={`loginForm modal slimScroll fade${(this.props.active ? ' in' : '')}`}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sign In</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.signIn}>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <div className="btn btn-lg btn-facebook">
                      <span className="pull-left"><FaFacebookF /></span>
                      <span>Sign In with Facebook</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <div className="btn btn-lg btn-google">
                      <span className="pull-left"><FaGoogle /></span>
                      <span>Sign In with Google</span>
                    </div>
                  </div>
                </div>
                <div className="signOr">OR</div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control"
                    onChange={this.updateEmail}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={this.updatePassword}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="checkbox custom-checkbox">
                        <label htmlFor="remember">
                          <input
                            id="remember"
                            type="checkbox"
                            checked={this.state.remember}
                            onChange={this.toggleRemember}
                          />
                          <span><FaCheck /></span>
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-6 align-right">
                      <p className="help-block">
                        <a href="#1" className="text-green isThemeText text-red">
                          Forgot password?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <button type="submit" className="btn btn-lg btn-green isThemeBtn btn-red">
                      Sign In
                    </button>
                  </div>
                </div>
                <p className="help-block">
                  <span>Do not have an account? </span>
                  <a
                    href="#1"
                    className="modal-su text-green isThemeText text-red"
                    onClick={this.props.openRegisterForm}
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
