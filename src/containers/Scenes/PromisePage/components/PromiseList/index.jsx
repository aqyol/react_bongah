import React from 'react';
import PropTypes from 'prop-types';


const PromiseList = props => (
  <div className="promise-list">
    <div className="row promise-head">
      <div className="col-lg-3 col-md-3 col-xs-3">
        وضعیت
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        طرف دوم
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        طرف اول
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        تاریخ
      </div>
    </div>
    {props.list.map(list => (
      <div className="agentInfoContainer">
        <div className={`row ${(list.status === 1 ? 'bg-success' : 'bg-warning')}`}>
          <div className="col-lg-3 col-md-3 col-xs-3 list-item">
            {(list.status === 1) ? 'تکمیل شده' : 'درحال بررسی'}
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 list-item">
            {list.second}
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 list-item">
            {list.first}
          </div>
          <div className="col-lg-3 col-md-3 col-xs-3 list-item">
            {list.date}
          </div>
        </div>
      </div>
    ))}
  </div>
);

PromiseList.propTypes = {
  list: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PromiseList;
