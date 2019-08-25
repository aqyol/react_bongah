import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => (
  <div className="search">
    <FaSearch />
    <input type="text" placeholder="عبارت خود را برای جستجو وارد کنید" />
  </div>
);

export default SearchForm;
