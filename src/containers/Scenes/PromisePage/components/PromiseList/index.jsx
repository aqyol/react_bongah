import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const PromiseList = props => (
  <div className="promise-list">
    <div className="row promise-head">
      <div className="col-lg-3 col-md-3 col-xs-3">
        تاریخ
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        طرف اول
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        طرف دوم
      </div>
      <div className="col-lg-3 col-md-3 col-xs-3">
        وضعیت
      </div>
    </div>
    {props.list.map(list => (
      <div className="agentInfoContainer">
        <Link to={`/promise/edit/${list.id}`}>
          <div className={`row ${(list.status === 1 ? 'promise-complete' : 'promise-in-progress')}`}>
            <div className="col-lg-3 col-md-3 col-xs-3 list-item text-black-50">
              {list.date}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3 list-item text-black-50">
              {list.first}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3 list-item text-black-50">
              {list.second}
            </div>
            <div className="col-lg-3 col-md-3 col-xs-3 list-item text-black-50">
              {(list.status === 1) ? 'تکمیل شده' : 'درحال بررسی'}
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

PromiseList.propTypes = {
  list: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PromiseList;
