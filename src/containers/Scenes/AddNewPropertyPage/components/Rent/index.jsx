import React from 'react';
import AddNewPropertyForm from '../AddNewPropertyForm';


const RentPropertyPage = () => (
  <div className="rentPropertyPage">
    <div className="dashboardTitle">
      <h3>آگهی اجاره</h3>
      <h5>
        در این قسمت میتوانید اطلاعات مربوط به ملک خود را ثبت کنید.
      </h5>
    </div>
    <div className="dashboardBody">
      <AddNewPropertyForm />
    </div>
  </div>
);

export default RentPropertyPage;
