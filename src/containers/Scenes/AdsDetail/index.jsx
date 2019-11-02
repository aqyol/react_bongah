import React from 'react';
import { PropTypes } from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import AdsDetailForm from './components/AdsDetailForm';


const AdsDetail = props => (
  <div>
    <Dashboard>
      <AdsDetailForm history={props.history} id={props.match.params.id} />
    </Dashboard>
  </div>
);

AdsDetail.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default AdsDetail;
