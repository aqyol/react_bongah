import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ModalHeader,
  ModalBody,
  Modal,
} from 'reactstrap';
import {
  FaCheck,
  FaRegWindowClose,
} from 'react-icons/fa';
import { login } from '../../../../../containers/util/APIUtils';

class LoginForm extends PureComponent {
  static propTypes = {
    openRegisterForm: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      remember: false,
      phone: '',
      password: '',
    };
    this.signIn = this.signIn.bind(this);
    this.toggleRemember = this.toggleRemember.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  signIn(e) {
    e.preventDefault();
    const loginData = {
      userName: this.state.phone,
      password: this.state.password,
    };

    login(loginData).then((responseData) => {
      // tslint:disable-next-line:no-console
      console.log(responseData);
    });
  }

  toggleRemember(e) {
    this.setState({
      remember: e.currentTarget.checked,
    });
  }

  updatePhone(e) {
    this.setState({
      phone: e.currentTarget.value,
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.currentTarget.value,
    });
  }

  handleClose() {
    this.props.handleClose();
  }

  render() {
    return (
      <Container>
        <Modal
          fade={false}
          isOpen={this.props.active}
        >
          <ModalHeader className="rtl-direction modal-head">
            <div className="modal-head">
              <span>ورود</span>
              <FaRegWindowClose onClick={this.handleClose} />
            </div>
          </ModalHeader>
          <ModalBody className="rtl-direction">
            <form onSubmit={this.signIn}>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="شماره موبایل"
                  className="form-control"
                  onChange={this.updatePhone}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="رمز عبور"
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
                        من را بخاطر بسپار
                      </label>
                    </div>
                  </div>
                  <div className="col-xs-6 align-right">
                    <p className="help-block">
                      <a href="#1" className="text-green isThemeText text-red">
                        فراموشی رمز عبور
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="btn-group-justified">
                  <button type="submit" className="btn btn-lg btn-green isThemeBtn btn-red">
                    ورود
                  </button>
                </div>
              </div>
              <p className="help-block text-right">
                <span>تاکنون عضو نشده اید؟</span>
                <a
                  href="#1"
                  className="modal-su text-green isThemeText text-red"
                  onClick={this.props.openRegisterForm}
                >
                  ثبت نام
                </a>
              </p>
            </form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default LoginForm;
