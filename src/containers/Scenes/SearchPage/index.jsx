import React from 'react';
import { PropTypes } from 'prop-types';
import SearchForm from './components/SearchForm';
import Dashboard from '../../../shared/components/DashboardLayout';

const SearchPage = props => (
  <div className="searchPage">
    <Dashboard>
      <div className="searchFormWrapper">
        <SearchForm
          history={props.history}
          type={(props.location.state !== undefined) ? props.location.state.type : undefined}
          searchParams={(props.location.state !== undefined) ? props.location.state.searchItem : undefined}
        />
      </div>
    </Dashboard>
  </div>
);

SearchPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      searchItem: PropTypes.string,
      type: PropTypes.string,
    }),
    search: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchPage;
