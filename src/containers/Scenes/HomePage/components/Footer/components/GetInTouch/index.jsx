import React from 'react';
import PropTypes from 'prop-types';
import {
  FaGooglePlusG,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';


const GetInTouch = props => (
  <div className="getInTouch col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <div className="touchTitle osLight">
      {props.children}
    </div>
    <ul className="mainList">
      <li className="footer-phone"><span className="fa fa-phone" /> 0962 573 550</li>
      <li className="footer-address osLight">
        <p>تهران، خیابان ولیعصر، خیابان ارمغان شرقی، پلاک ۱۸ جنوبی</p>
      </li>
      <li>
        <a href="#1" className="btn btn-sm btn-icon btn-round btn-o btn-white">
          <FaFacebookF />
        </a>
        <a href="#1" className="btn btn-sm btn-icon btn-round btn-o btn-white">
          <FaTwitter />
        </a>
        <a href="#1" className="btn btn-sm btn-icon btn-round btn-o btn-white">
          <FaGooglePlusG />
        </a>
        <a href="#1" className="btn btn-sm btn-icon btn-round btn-o btn-white">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  </div>
);

GetInTouch.propTypes = {
  children: PropTypes.string.isRequired,
};

export default GetInTouch;
