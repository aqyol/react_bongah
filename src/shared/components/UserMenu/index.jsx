import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaAngleDown } from 'react-icons/fa';
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
            <span className="headerUserName">John Smith</span>
            <FaAngleDown />
          </div>
          <div className="clearfix" />
        </a>
        <div className="dropdown-menu pull-right userMenu" role="menu">
          <div className="mobAvatar">
            <img
              className="avatar mobAvatarImg"
              src="http://mariusn.com/themes/reales/images/avatar-1.png"
              alt="avatar"
            />
            <div className="mobAvatarName">John Smith</div>
          </div>
          <ul>
            <li><Link to="/wallet"><span className="walletIcon fa" />Wallet</Link></li>
            <li><a href="#1"><IoIosSettings />Settings</a></li>
            <li><Link to="/myprofile"><IoIosPerson />Profile</Link></li>
            <li>
              <a href="#1">
                <FaSignOutAlt />
                Notifications
                <span className="badge pull-right bg-red">5</span>
              </a>
            </li>
            <li className="divider" />
            <li><a href="#1" onClick={this.logout}><FaSignOutAlt />Logout</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserMenu;
