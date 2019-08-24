import React from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import SingleHouse from '../../../shared/components/SingleHouse';


const houseData = {
  name: 'خانه ویلایی با استخر روباز',
  address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
  beds: 6,
  toilets: 10,
  square: 500,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
};

const MyHouse = props => (
  <div className="myhousePage">
    <Dashboard>
      <div className="dashboardTitle">
        <h3>({props.match.params.id})</h3>
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
