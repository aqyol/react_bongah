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
  FaBell,
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
                <span className="navLabel">جستجو</span>
              </Link>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/newproperty/sell" onClick={this.toggleActive}>
                <span className="navIcon"><FaPlusCircle /></span>
                <span className="navLabel">افزودن آگهی</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/newproperty/sell">
                    <span className="span-right">فروش</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/newproperty/rent">
                    <span className="span-right">رهن و اجاره</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/newproperty/renovation">
                    <span className="span-right">نوسازی</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/request" onClick={this.toggleActive}>
                <span className="navIcon icon-home"><FaBell /></span>
                <span className="navLabel">درخواست ها</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
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
                    <span className="span-right">لیست من</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/property/mywishlist">
                    <span className="span-right">مورد علاقه</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/property/myviewing">
                    <span className="span-right">بازدید شده</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/agent/myagents" onClick={this.toggleActive}>
                <span className="navIcon"><FaUser /></span>
                <span className="navLabel">بنگاه املاک</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/agency/create">
                    <span className="span-right">همکاری</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agency/info">
                    <span className="span-right">بنگاه من</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agent/myagents">
                    <span className="span-right">بنگاه های من</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/agent/search">
                    <span className="span-right">جستجوی بنگاه</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/advice/buying" onClick={this.toggleActive}>
                <span className="navIcon"><FaComments /></span>
                <span className="navLabel">توصیه ها</span>
                <span className="closeIcon arrowRight"><FaAngleLeft /></span>
                <span className="openIcon arrowRight"><FaAngleDown /></span>
              </Link>
              <ul className="colors secondUl">
                <li>
                  <Link to="/advice/buying">
                    <span className="span-right">خرید</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/selling">
                    <span className="span-right">فروش</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/design">
                    <span className="span-right">طراحی</span>
                    <span className="icon-right"><FaCircleNotch /></span>
                  </Link>
                </li>
                <li>
                  <Link to="/advice/renovations">
                    <span className="span-right">نوسازی</span>
                    <span className="icon-right"><FaCircleNotch /></span>
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
