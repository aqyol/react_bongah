import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FaRegWindowClose,
} from 'react-icons/fa';
import {
  Container,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { register, active } from '../../../../../containers/util/APIUtils';


class RegisterForm extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    openLoginForm: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      verifyCode: '',
      name: '',
      lastName: '',
      phone: '',
      password: '',
      confirmPassword: '',
      username: '',
      isActiveForm: false,
      isLoading: false,
    };
    console.log(this.state.isLoading);
    this.submitRegister = this.submitRegister.bind(this);
    this.submitActive = this.submitActive.bind(this);
    this.changeFormData = this.changeFormData.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  submitRegister(e) {
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
      phones: [{
        value: this.state.phone,
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

  submitActive() {
    const activeData = {
      phone: this.state.phone,
      verifycode: this.state.verifyCode,
    };
    active(activeData).then((resolveData) => {
      if (resolveData) {
        // todo
      }
    });
  }

  changeFormData(key, value) {
    const changeObject = {};
    changeObject[key] = value;
    this.setState(changeObject);
  }

  handleClose() {
    this.props.handleClose();
  }

  registerForm() {
    return (
      <form onSubmit={this.submitRegister}>
        <div className="form-group">
          <input
            type="text"
            placeholder="نام"
            className="form-control"
            value={this.state.name}
            onChange={(e) => { this.changeFormData('name', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="form-control"
            value={this.state.lastName}
            onChange={(e) => { this.changeFormData('lastName', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="شماره موبایل"
            className="form-control"
            value={this.state.phone}
            onChange={(e) => { this.changeFormData('phone', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="نام کاربری"
            className="form-control"
            value={this.state.username}
            onChange={(e) => { this.changeFormData('username', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="رمز عبور"
            className="form-control"
            value={this.state.password}
            onChange={(e) => { this.changeFormData('password', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="تکرار رمز عبور"
            className="form-control"
            value={this.state.confirmPassword}
            onChange={(e) => { this.changeFormData('confirmPassword', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <button type="submit" className="btn btn-lg btn-green isThemeBtn">ثبت نام</button>
          </div>
        </div>
        <p className="help-block">
          <span>قبلا ثبت نام کرده اید؟</span>
          <a
            href="#1"
            className="modal-su text-green isThemeText text-red"
            onClick={this.props.openLoginForm}
          >
            ورود
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
            placeholder="کد فعال سازی"
            className="form-control"
            value={this.state.verifyCode}
            onChange={(e) => { this.changeFormData('verifyCode', e.currentTarget.value); }}
          />
        </div>
        <div className="form-group">
          <div className="btn-group-justified">
            <button type="submit" className="btn btn-lg btn-green isThemeBtn">تایید</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Container>
        <Modal
          isOpen={this.props.active}
          fade={false}
        >
          <ModalHeader className="rtl-direction modal-head">
            <div className="modal-head">
              <span>ثبت نام</span>
              <FaRegWindowClose onClick={this.handleClose} />
            </div>
          </ModalHeader>
          <ModalBody className="rtl-direction text-right">
            {this.state.isActiveForm ? this.activeForm() : this.registerForm()}
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default RegisterForm;
