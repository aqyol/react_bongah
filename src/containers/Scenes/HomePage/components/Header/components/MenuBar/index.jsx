import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome, FaList } from 'react-icons/fa';
import UserMenu from '../../../../../../../shared/components/UserMenu';
import RLForm from '../../../../../../../shared/components/RegisterLoginForm';

class MenuBar extends PureComponent {
  static propTypes = {
    isPersist: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isHandlerActive: false,
      isLogin: props.isLogin,
    };
  }

  toggleHandler = () => {
    this.setState(prevState => ({
      isHandlerActive: !prevState.isHandlerActive,
    }));
  };

  updateFormStatus = (status) => {
    if (status === 'login' || status === 'register') {
      this.setState({
        rlFormStatus: status,
      });
    } else {
      this.setState({
        rlFormStatus: false,
      });
    }
  };

  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className="userMenuLi">
          <div className="userMenuWrapper">
            <UserMenu />
          </div>
        </li>
      );
    }
    return [
      (
        <li key="0">
          <a href="#1" onClick={() => this.updateFormStatus('register')}>
            ثبت نام
          </a>
        </li>
      ),
      (
        <li key="1">
          <a href="#1" onClick={() => this.updateFormStatus('login')}>
            ورود
          </a>
        </li>
      ),
    ];
  };

  render() {
    if (!this.props.isPersist) {
      return (null);
    }
    return (
      <div className="menuBar">
        <a href="/">
          <div className="homeLogo">
            <FaHome />
            <span>املاکیست</span>
          </div>
        </a>
        <a
          href="#1"
          className={`homeNavHandler visible-xs${(this.state.isHandlerActive ? ' active' : '')}`}
          onClick={this.toggleHandler}
        >
          <FaList />
        </a>
        <div className={`rtl-direction homeNav${(this.state.isHandlerActive ? ' active' : '')}`}>
          <ul>
            <li>
              <Link to="/newproperty/sell">
                <div className="btn btn-success">
                  افزودن آگهی جدید
                </div>
              </Link>
            </li>
            {this.loginField()}
            <li className="moreOption">
              <Link
                to={{
                  pathname: '/search',
                  state: {
                    type: 'sell',
                  },
                }}
              >
                خرید
              </Link>
            </li>
            <li className="moreOption">
              <Link
                to={{
                  pathname: '/search',
                  state: {
                    type: 'rent',
                  },
                }}
              >
                رهن و اجاره
              </Link>
            </li>
            <li className="moreOption">
              <Link
                to={{
                  pathname: '/search',
                  state: {
                    type: 'preSell',
                  },
                }}
              >
                پیش فروش
              </Link>
            </li>
            <li className="moreOption">
              <Link
                to={{
                  pathname: '/search',
                  state: {
                    type: 'partnership',
                  },
                }}
              >
                مشارکت
              </Link>
            </li>
            <li className="moreOption">
              <Link to="/promise">قول نامه</Link>
            </li>
            <li className="moreOption">
              <Link to="/commission">کمیسیون</Link>
            </li>
          </ul>
        </div>
        <RLForm
          type={this.state.rlFormStatus}
          openRegisterForm={() => this.updateFormStatus('register')}
          openLoginForm={() => this.updateFormStatus('login')}
          close={() => this.updateFormStatus()}
        />
      </div>
    );
  }
}

export default MenuBar;
