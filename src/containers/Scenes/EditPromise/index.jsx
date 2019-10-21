import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import NewPromise from './components/NewPromise';


const EditPromise = props => (
  <Dashboard>
    <div>
      <NewPromise id={props.match.params.id} />
    </div>
  </Dashboard>
);

EditPromise.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditPromise;
