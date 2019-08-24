import React from 'react';
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

const Footer = () => (
  <div className="footerContainer">
    <div className="row">
      <Subscribe>از جدیدترین آگهی های ما مطلع شوید</Subscribe>
      <GetInTouch>ارتباط با ما</GetInTouch>
      <ListComp list={listDiscover}>خدمات</ListComp>
      <ListComp list={listCompany}>املاکیست</ListComp>
    </div>
    <div className="footerCopyRight">
      تمامی حقوق استفاده از مطالب و محتوا مربوط به شرکت آق یول می باشد.
    </div>
  </div>
);

export default Footer;
