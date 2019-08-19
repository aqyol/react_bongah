import React from 'react';
import SlideShow from './components/SlideShow';
import MenuBar from './components/MenuBar';
import Caption from './components/Caption';

const Header = () => (
  <div className="header">
    <div className="slideShowBarWrapper">
      <SlideShow />
    </div>
    <div className="menuBarWrapper">
      <MenuBar isLogin={false} isPersist />
    </div>
    <Caption isPresist />
  </div>
);

export default Header;
