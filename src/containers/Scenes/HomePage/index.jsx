import React from 'react';
import ListProperty from './components/ListProperty';
import Header from './components/Header';


const HomePage = () => (
  <div className="homePage">
    <div className="headerWrapper">
      <Header />
    </div>
    <div className="bodyWrapper">
      <ListProperty />
    </div>
    <div className="footerWrapper">
      <h3>Footer</h3>
    </div>
  </div>
);

export default HomePage;
