import React from 'react';
import AddNewPropertyForm from '../AddNewPropertyForm';


const RenovationPage = () => (
  <div className="renovationPage">
    <div className="dashboardTitle">
      <h3>Renovation Property</h3>
      <h5>
        We&apos;d love to find out more about you. It&apos;ll help us make
        sure our website and apps tick the right boxes.
      </h5>
    </div>
    <div className="dashboardBody">
      <AddNewPropertyForm />
    </div>
  </div>
);

export default RenovationPage;
