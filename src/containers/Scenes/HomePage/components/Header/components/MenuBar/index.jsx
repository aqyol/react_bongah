import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaHome, FaList } from 'react-icons/fa';

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
      console.log(this.state.rlFormStatus);
    }
  };

  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className="userMenuLi">
          <div className="userMenuWrapper">
            <span>UserMenu</span>
          </div>
        </li>
      );
    }
    return [
      (
        <li key="0">
          <a href="#1" onClick={() => this.updateFormStatus('register')}>
            Sign Up
          </a>
        </li>
      ),
      (
        <li key="1">
          <a href="#1" onClick={() => this.updateFormStatus('login')}>
            Sign In
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
        <div className="langSelectorWrapper">
          <span>Language selector</span>
        </div>
        <a href="/">
          <div className="homeLogo osLight">
            <FaHome />
            <span>House</span>
          </div>
        </a>
        <a
          href="#1"
          className={`homeNavHandler visible-xs${(this.state.isHandlerActive ? ' active' : '')}`}
          onClick={this.toggleHandler}
        >
          <FaList />
        </a>
        <div className={`homeNav${(this.state.isHandlerActive ? ' active' : '')}`}>
          <ul>
            <li className="moreOption">
              <Link to="/search?type=sale">Buy</Link>
            </li>
            <li className="moreOption">
              <Link to="/search?type=rent">Rent</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Renovation</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Commercial</Link>
            </li>
            <li className="moreOption">
              <Link to="/projects">Project</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">Find agent</Link>
            </li>
            {this.loginField()}
            <li>
              <Link to="/newproperty/sell">
                <div className="btn btn-green">
                  List a Property
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuBar;
