import React from 'react';
import ListComp from './components/ListComp';
import GetInTouch from './components/GetInTouch';
import Subscribe from './components/Subscribe';


const listCompany = [
  'About',
  'Jobs',
  'Press',
  'Blog',
  'Help',
  'Policies',
  'Terms & Privacy',
];
const listDiscover = [
  'Become a Member',
  'Properties List',
  'Sign in',
  'Widgets',
  'Components',
  'Tables',
  'Lists',
];

const Footer = () => (
  <div className="footerContainer">
    <div className="row">
      <ListComp list={listCompany}>Company</ListComp>
      <ListComp list={listDiscover}>Discover</ListComp>
      <GetInTouch>Get in Touch</GetInTouch>
      <Subscribe>Subscribe to Our Newsletter</Subscribe>
    </div>
    <div className="footerCopyRight">
      FamiCare Company<br /> © Copy right FamiCare technology Co
    </div>
  </div>
);

export default Footer;
