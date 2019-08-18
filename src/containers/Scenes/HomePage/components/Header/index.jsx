import React from 'react';
import SlideShow from './components/SlideShow';
import MenuBar from './components/MenuBar';

const Header = () => (
  <div className="header">
    <div className="slideShowBarWrapper">
      <SlideShow />
    </div>
    <div className="menuBarWrapper">
      <MenuBar isLogin={false} isPersist />
    </div>
  </div>
);

export default Header;
