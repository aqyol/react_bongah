import React from 'react';
import PropTypes from 'prop-types';
import ListProperty from './components/ListProperty';
import Header from './components/Header';
import Footer from './components/Footer';


const HomePage = props => (
  <div className="homePage">
    <div className="headerWrapper">
      <Header />
    </div>
    <div className="bodyWrapper">
      <ListProperty history={props.history} />
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
  </div>
);

HomePage.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default HomePage;
