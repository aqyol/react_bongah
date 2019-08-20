import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => (
  <div className="search">
    <FaSearch />
    <input type="text" placeholder="Search for houses, apartments..." />
  </div>
);

export default SearchForm;
