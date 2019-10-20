import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
} from 'reactstrap';


const PromiseList = props => (
  <div className="promise-list">
    <Row className="row promise-head">
      <Col xs={3} sm={3} md={3} lg={3}>
        تاریخ
      </Col>
      <Col xs={3} sm={3} md={3} lg={3}>
        طرف اول
      </Col>
      <Col xs={3} sm={3} md={3} lg={3}>
        طرف دوم
      </Col>
      <Col xs={3} sm={3} md={3} lg={3}>
        وضعیت
      </Col>
    </Row>
    {props.list.map(list => (
      <div className="agentInfoContainer">
        <Link to={`/promise/edit/${list.id}`}>
          <Row className={`row ${(list.status === 1 ? 'promise-complete' : 'promise-in-progress')}`}>
            <Col xs={3} sm={3} md={3} lg={3} className="list-item text-black-50">
              {list.date}
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} className="list-item text-black-50">
              {list.first}
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} className="list-item text-black-50">
              {list.second}
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} className="col-lg-3 col-md-3 col-xs-3 list-item text-black-50">
              {(list.status === 1) ? 'تکمیل شده' : 'درحال بررسی'}
            </Col>
          </Row>
        </Link>
      </div>
    ))}
  </div>
);

PromiseList.propTypes = {
  list: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PromiseList;
