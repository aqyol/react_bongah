import React from 'react';
import SearchForm from './components/SearchForm';
import Dashboard from '../../../shared/components/DashboardLayout';

const SearchPage = () => (
  <div className="searchPage">
    <Dashboard>
      <div className="searchFormWrapper">
        <SearchForm />
      </div>
    </Dashboard>
  </div>
);

export default SearchPage;
