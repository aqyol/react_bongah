import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


class RLForm extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    openLoginForm: PropTypes.func.isRequired,
    openRegisterForm: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  }

  clickOutside = (e) => {
    const { target } = e;
    if (target.className.indexOf(`${this.props.type}Form`) !== -1) {
      this.props.close();
    }
  }

  render() {
    return (
      <div
        className={`RLForm${(this.props.type ? ' modal-open' : '')}`}
        onClick={(e) => { this.clickOutside(e); }}
        role="presentation"
      >
        <RegisterForm active={this.props.type === 'register'} openLoginForm={this.props.openLoginForm} />
        <LoginForm active={this.props.type === 'login'} openRegisterForm={this.props.openRegisterForm} />
        <div className={`modal-backdrop fade${(this.props.type ? ' in' : '')}`} />
      </div>
    );
  }
}

export default RLForm;
