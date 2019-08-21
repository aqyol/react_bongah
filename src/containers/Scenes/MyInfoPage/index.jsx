import React from 'react';
import Dashboard from '../../../shared/components/DashboardLayout';
import MyInfoForm from './components/MyInfoForm';


const InfoPage = () => (
  <div className="infoPage">
    <Dashboard>
      <div className="infoWrapper">
        <div className="dashboardTitle">
          <h3>Your details</h3>
          <h5>
            Wed love to find out more about you. Itll help us make
            sure our website and apps tick the right boxes.
          </h5>
        </div>
        <MyInfoForm />
      </div>
    </Dashboard>
  </div>
);

export default InfoPage;
