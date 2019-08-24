import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';
import SearchForm from './components/SearchForm';
import NotifyMenu from './components/NotifyMenu';
import UserMenu from '../../../UserMenu';


const Header = props => (
  <div className="dashboardHeader">
    <div className="logo">
      <Link to="/home">
        <span className="fa fa-home marker"><FaHome /></span>
        <span className="logoText">reales</span>
      </Link>
    </div>
    <a href="#1" className="navHandler" onClick={() => props.clickToggle()}><FaBars /></a>
    <div className="userMenuWrapper">
      <UserMenu />
    </div>
    <SearchForm />
    <NotifyMenu />
    <div className="clearfix" />
  </div>
);

Header.propTypes = {
  clickToggle: PropTypes.func.isRequired,
};


export default Header;
