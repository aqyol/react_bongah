import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSignOutAlt,
  FaAngleDown,
  FaRegCreditCard,
  FaRegEnvelope,
} from 'react-icons/fa';
import { IoIosSettings, IoIosPerson } from 'react-icons/io';
// import PropTypes from 'prop-types';

class UserMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  showToggle = () => {
    if (this.state.showMenu) {
      document.removeEventListener('click', this.handleClickOutside);
    } else {
      document.addEventListener('click', this.handleClickOutside);
    }
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  };

  handleClickOutside = (e) => {
    if (
      this.wrapperRef
      && !this.wrapperRef.contains(e.target)
      && this.state.showMenu
    ) {
      this.showToggle();
    }
  }

  logout = () => {
    /* Test code */
    localStorage.setItem('loginStatus', 'false');
    window.location.href = '/';
    /* End test code */
  }

  wrapperRef;

  render() {
    return (
      <div
        className={`userMenuContainer${this.state.showMenu ? ' open' : ''}`}
        onClick={() => { this.showToggle(); }}
        ref={(div) => { this.wrapperRef = div; }}
        role="presentation"
      >
        <a href="#1" className="userHandler dropdown-toggle" data-toggle="dropdown">
          <FaSignOutAlt /><span className="counter">5</span>
        </a>
        <a href="#1" className="headerUser dropdown-toggle" data-toggle="dropdown">
          <img
            className="avatar headerAvatar pull-left"
            alt="avatar"
            src="http://mariusn.com/themes/reales/images/avatar-1.png"
          />
          <div className="userTop pull-left">
            <span className="headerUserName">علی کریمی</span>
            <FaAngleDown />
          </div>
          <div className="clearfix" />
        </a>
        <div className="dropdown-menu pull-left userMenu" role="menu">
          <div className="mobAvatar">
            <img
              className="avatar mobAvatarImg"
              src="http://mariusn.com/themes/reales/images/avatar-1.png"
              alt="avatar"
            />
            <div className="mobAvatarName">علی کریمی</div>
          </div>
          <ul>
            <li>
              <Link to="/wallet">
                <span className="walletIcon fa pull-right">
                  <FaRegCreditCard />
                </span>کیف پول
              </Link>
            </li>
            <li>
              <Link to="#1">
                <span className="walletIcon fa pull-right">
                  <IoIosSettings />
                </span>تنظیمات
              </Link>
            </li>
            <li>
              <Link to="/myprofile">
                <span className="walletIcon fa pull-right">
                  <IoIosPerson />
                </span>پروفایل
              </Link>
            </li>
            <li>
              <Link to="#1">
                <span className="walletIcon fa pull-right">
                  <FaRegEnvelope />
                </span>پیام ها
                <span className="badge pull-left bg-red">5</span>
              </Link>
            </li>
            <li className="divider" />
            <li>
              <a href="#1" onClick={this.logout}>
                <span className="pull-right"><FaSignOutAlt /></span>خروج
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserMenu;
