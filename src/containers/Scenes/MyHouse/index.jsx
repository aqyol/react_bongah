import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import SingleHouse from '../../../shared/components/SingleHouse';


const houseData = {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
};

const MyHouse = props => (
  <div className="myhousePage">
    <Dashboard>
      <div className="dashboardTitle">
        <h3>Property ({props.match.params.id})</h3>
      </div>
      <div className="myHouseWrapper">
        <SingleHouse data={houseData} />
      </div>
    </Dashboard>
  </div>
);

MyHouse.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MyHouse;
