import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaCompass,
  FaPlusCircle,
  FaAngleLeft,
  FaAngleDown,
  FaCircleNotch,
  FaHome,
  FaComments,
  FaUser,
} from 'react-icons/fa';


class LeftSide extends PureComponent {
  static propTypes = {
    isExpand: PropTypes.bool.isRequired,
  };

  toggleActive = (e) => {
    if (this.props.isExpand) {
      e.preventDefault();
    }
    const target = e.currentTarget;
    if (this.props.isExpand && target.parentElement) {
      target.parentElement.classList.toggle('active');
    }
  };

  render() {
    return (
      <div className={`leftSide slimScroll${this.props.isExpand ? ' expanded' : ' minimized'}`}>
        <nav className="leftNav scrollable bigNav">
          <ul>
            <li>
              <Link to="/search">
                <span className="navIcon"><FaCompass className="navIcon" /></span>
                <span className="navLabel">Search</span>
              </Link>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/newproperty/sell" onClick={this.toggleActive}>
                <span className="navIcon"><FaPlusCircle /></span>
                <span className="navLabel">Add Property</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/newproperty/sell">
                    Sell<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/newproperty/rent">
                    Rent<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/newproperty/renovation">
                    Renovation<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/property/mylisting" onClick={this.toggleActive}>
                <span className="navIcon icon-home"><FaHome /></span>
                <span className="navLabel">Properties</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/property/mylisting">
                    My listing<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/property/mywishlist">
                    My wishlist<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/property/myviewing">
                    My viewing<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/agent/myagents" onClick={this.toggleActive}>
                <span className="navIcon"><FaUser /></span>
                <span className="navLabel">Agents</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/agent/myagents">
                    My Agents<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agent/search">
                    Find Agents<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/advice/buying" onClick={this.toggleActive}>
                <span className="navIcon"><FaComments /></span>
                <span className="navLabel">Advice</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/advice/buying">
                    Buying<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/selling">
                    Selling<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/design">
                    Design<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/renovations">
                    Renovations<span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSide;
