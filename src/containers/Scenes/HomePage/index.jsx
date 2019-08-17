import React from 'react';
import ListProperty from './components/ListProperty';


const HomePage = () => (
  <div className="homePage">
    <div className="headerWrapper">
      <h1>Header</h1>
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
