import React from 'react';
import SearchForm from './components/SearchForm';
import Dashboard from '../../../shared/components/DashboardLayout';

const SearchPage = () => (
  <div className="searchPage">
    <Dashboard>
      <div className="dashboardTitle">
        <h3>ملک مورد نظر خود را جستجو کنید</h3>
      </div>
      <div className="searchFormWrapper">
        <SearchForm />
      </div>
    </Dashboard>
  </div>
);

export default SearchPage;
