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
  FaUser,
  FaHandshake,
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
            <li className="hasSub hasSubActive">
              <Link to="/newproperty">
                <span className="navIcon"><FaPlusCircle /></span>
                <span className="navLabel">افزودن آگهی</span>
              </Link>
            </li>
            <li>
              <Link to="/search">
                <span className="navIcon"><FaCompass className="navIcon" /></span>
                <span className="navLabel">جستجو</span>
              </Link>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/property/mylisting" onClick={this.toggleActive}>
                <span className="navIcon icon-home"><FaHome /></span>
                <span className="navLabel">تاریخچه</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/property/mylisting">
                    <span className="span-right">آگهی های من</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/property/mywishlist">
                    <span className="span-right">آگهی های مورد علاقه</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/request">
                    <span className="span-right">سوابق درخواست ها</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/agent/myagents" onClick={this.toggleActive}>
                <span className="navIcon"><FaUser /></span>
                <span className="navLabel">همکاران</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/agent/list">
                    <span className="span-right">لیست مشاوران</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agent/myagents">
                    <span className="span-right">لیست املاک</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agency/create">
                    <span className="span-right">همکاری</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/promise">
                <span className="navIcon"><FaHandshake style={{ width: '22px', height: '22px' }} /></span>
                <span className="navLabel">قول نامه</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSide;
