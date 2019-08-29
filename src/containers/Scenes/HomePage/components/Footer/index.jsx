import React from 'react';
import PropTypes from 'prop-types';
import ListComp from './components/ListComp';
import GetInTouch from './components/GetInTouch';
import Subscribe from './components/Subscribe';


const listCompany = [
  'درباره ما',
  'مجله',
  'قوانین و مقررات',
  'حریم شخصی',
  'دفاتر ما',
];
const listDiscover = [
  'عضویت بنگاه',
  'لیست خدمات',
  'ورود',
  'عضویت',
];

const Footer = props => (
  <div className="footerContainer">
    <div className="row">
      <ListComp list={listCompany}>املاکیست</ListComp>
      <ListComp list={listDiscover}>خدمات</ListComp>
      <GetInTouch>ارتباط با ما</GetInTouch>
      <Subscribe onSubscribe={(e) => { props.onSubscribe(e); }}>از جدیدترین آگهی های ما مطلع شوید</Subscribe>
    </div>
    <div className="footerCopyRight">
      تمامی حقوق استفاده از مطالب و محتوا مربوط به شرکت آق یول می باشد.
    </div>
  </div>
);

Footer.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default Footer;
