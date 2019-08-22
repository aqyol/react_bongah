import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { register, active } from '../../../../../containers/util/APIUtils';


class RegisterForm extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    openLoginForm: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      verifyCode: '',
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      isActiveForm: false,
      isLoading: false,
    };
    console.log(this.state.isLoading);
  }

  submitRegister = (e) => {
    e.preventDefault();
    const registerData = {
      name: {
        familyName: this.state.lastName,
        givenName: this.state.name,
      },
      userName: this.state.username,
      password: this.state.password,
      address: [{
        number: '15/48',
        street: 'Đoàn Như Hài',
        district: '4',
        country: 'Viet Nam',
        countryCode: '+84',
      }],
      emails: [{
        value: this.state.email,
        active: true,
      }],
      groups: [{
        id: 12344556,
        name: 'test',
      }],
    };

    register(registerData).then((responseData) => {
      console.log(responseData);
      this.setState({
        isActiveForm: true,
      });
    });
  }

  submitActive = () => {
    const activeData = {
      email: this.state.email,
      verifycode: this.state.verifyCode,
    };
    active(activeData).then((resolveData) => {
      if (resolveData) {
        // todo
      }
    });
  }

  changeFormData = (key, value) => {
    const changeObject = {};
    changeObject[key] = value;
    this.setState(changeObject);
  }

  registerForm() {
    return (
      <form onSubmit={this.submitRegister}>
        <div className="form-group">
          <div className="btn-group-justified">
            <a href="explore.html" className="btn btn-lg btn-facebook">
              <span className="pull-left"><FaFacebookF /></span>
              <span>Sign In with Facebook</span>
            </a>
          </div>
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <a href="explore.html" className="btn btn-lg btn-google">
              <span className="pull-left"><FaGoogle /></span>
              <span>Sign In with Google</span>
            </a>
          </div>
        </div>
        <div className="signOr">OR</div>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            className="form-control"
            value={this.state.name}
            onChange={(e) => { this.changeFormData('name', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            className="form-control"
            value={this.state.lastName}
            onChange={(e) => { this.changeFormData('lastName', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            value={this.state.email}
            onChange={(e) => { this.changeFormData('email', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="User Name"
            className="form-control"
            value={this.state.username}
            onChange={(e) => { this.changeFormData('username', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={this.state.password}
            onChange={(e) => { this.changeFormData('password', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            value={this.state.confirmPassword}
            onChange={(e) => { this.changeFormData('confirmPassword', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <button type="submit" className="btn btn-lg btn-green isThemeBtn">Sign Up</button>
          </div>
        </div>
        <p className="help-block">
          <span>Already a Reales member? </span>
          <a
            href="#1"
            className="modal-su text-green isThemeText text-red"
            onClick={this.props.openLoginForm}
          >
            Sign In
          </a>
        </p>
      </form>
    );
  }

  activeForm() {
    return (
      <form onSubmit={this.submitActive}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Verify Code"
            className="form-control"
            value={this.state.verifyCode}
            onChange={(e) => { this.changeFormData('verifyCode', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <button type="submit" className="btn btn-lg btn-green isThemeBtn">Verify</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div
        className={`registerForm slimScroll modal fade${(this.props.active ? ' in' : '')}`}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {this.state.isActiveForm ? 'Verify your account' : 'Sign up'}
              </h4>
            </div>
            <div className="modal-body">
              {this.state.isActiveForm ? this.activeForm() : this.registerForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
