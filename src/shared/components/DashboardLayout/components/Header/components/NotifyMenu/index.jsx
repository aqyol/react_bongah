import React, { PureComponent } from 'react';
import {
  FaBell,
  FaCog,
  FaEnvelope,
} from 'react-icons/fa';

class NotifyMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      infoHover: false,
      mailHover: false,
    };
  }

  showMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
    document.addEventListener('click', this.hideMenu);
  };

  hideMenu = () => {
    this.setState({
      showMenu: false,
    });
    document.removeEventListener('click', this.hideMenu);
  };

  infoHover = () => {
    this.setState({
      infoHover: true,
    });
    document.addEventListener('mouseout', this.endInfoHover);
  };

  mailHover = () => {
    this.setState({
      mailHover: true,
    });
    document.addEventListener('mouseout', this.endMailHover);
  };

  endInfoHover = () => {
    this.setState({
      infoHover: false,
    });
    document.removeEventListener('mouseout', this.endInfoHover);
  };

  endMailHover = () => {
    this.setState({
      mailHover: false,
    });
    document.removeEventListener('mouseout', this.endMailHover);
  };

  render() {
    return (
      <div
        role="none"
        className={`headerNotifyWraper ${this.state.showMenu ? 'open' : ''}`}
        onClick={this.showMenu}
      >
        <a href="#1" className="headerNotify dropdown-toggle" data-toggle="dropdown">
          <FaBell />
          <span className="counter">5</span>
        </a>
        <div className="dropdown-menu pull-right notifyMenu" role="menu">
          <div className="notifyHeader">
            <span>Notifications</span>
            <a href="#1" className="notifySettings"><FaCog /></a>
            <div className="clearfix" />
          </div>
          <ul className="notifyList">
            <li onMouseOver={this.infoHover} onFocus={this.infoHover}>
              <a href="#1">
                <img
                  alt="avatar"
                  className="avatar pull-left"
                  src="http://mariusn.com/themes/reales/images/avatar-1.png"
                />
                <div className={`pulse border-grey ${this.state.infoHover ? 'pulsate' : ''}`} />
                <div className="notify pull-left">
                  <div className="notifyName">Sed ut perspiciatis unde</div>
                  <div className="notifyTime">5 minutes ago</div>
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li onMouseOver={this.mailHover} onFocus={this.mailHover}>
              <a href="#1">
                <div className="notifyRound notifyRound-red">
                  <FaEnvelope />
                </div>
                <div className={`pulse border-red ${this.state.mailHover ? 'pulsate' : ''}`} />
                <div className="notify pull-left">
                  <div className="notifyName">Lorem Ipsum is simply dummy text</div>
                  <div className="notifyTime">20 minutes ago</div>
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="notifyRound notifyRound-yellow heart-o" />
                <div className="pulse border-yellow" />
                <div className="notify pull-left">
                  <div className="notifyName">It is a long established fact</div>
                  <div className="notifyTime">2 hours ago</div>
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li>
              <a href="#1">
                <div className="notifyRound notifyRound-magenta paper-plane-o" />
                <div className="pulse border-magenta" />
                <div className="notify pull-left">
                  <div className="notifyName">There are many variations</div>
                  <div className="notifyTime">1 day ago</div>
                </div>
                <div className="clearfix" />
              </a>
            </li>
          </ul>
          <a href="#1" className="notifyAll">See All</a>
        </div>
      </div>
    );
  }
}

export default NotifyMenu;
