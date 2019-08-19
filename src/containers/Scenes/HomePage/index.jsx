import React from 'react';
import ListProperty from './components/ListProperty';
import Header from './components/Header';
import Footer from './components/Footer';


const HomePage = () => (
  <div className="homePage">
    <div className="headerWrapper">
      <Header />
    </div>
    <div className="bodyWrapper">
      <ListProperty />
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
  </div>
);

export default HomePage;
