import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import SearchForm from './components/SearchForm';
import NotifyMenu from './components/NotifyMenu';
import UserMenu from '../../../UserMenu';


const Header = () => (
  <div className="dashboardHeader">
    <div className="logo">
      <Link to="/home">
        <span className="fa fa-home marker"><FaHome /></span>
      </Link>
    </div>
    <div className="userMenuWrapper">
      <UserMenu />
    </div>
    <SearchForm />
    <NotifyMenu />
    <div className="clearfix" />
  </div>
);


export default Header;
