import React from 'react';
import PropTypes from 'prop-types';
import {
  FaRegEye,
  FaRegHeart,
} from 'react-icons/fa';
import {
  MdBorderStyle,
  MdAirlineSeatIndividualSuite,
  MdDomain,
} from 'react-icons/md';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardImgOverlay,
  CardHeader,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const SingleHouse = ({ data }) => (
  <div className="singleHouse">
    <Card>
      <CardHeader style={{ position: 'relative', padding: 0 }}>
        <CardImg
          top
          width="100%"
          src={data.img}
          alt="Card image cap"
        />
        <CardImgOverlay style={{ top: 'unset', color: 'white', textAlign: 'right' }}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8}>{data.name}</Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>۳ هفته پیش</Col>
          </Row>
        </CardImgOverlay>
      </CardHeader>
      <CardBody style={{ textAlign: 'right', padding: '0.5rem' }}>
        <CardText>
          <Row className="ads-main-info-list">
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdBorderStyle className="chart-icon-list" />
              <span>{data.square} متر</span>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdAirlineSeatIndividualSuite className="chart-icon-list" />
              <span>{data.beds} خواب</span>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdDomain className="chart-icon-list" />
              <span>{data.toilets} ساله</span>
            </Col>
          </Row>
          <ul className="cardFeat">
            <li><span className="fa fa-moon-o"><FaRegEye /></span> 200</li>
            <li><span className="icon-drop"><FaRegHeart /></span> 54</li>
          </ul>
          <ul>
            <li>
              <Link
                to={`/ads/detail/${data.beds}`}
                className="btn-success"
                style={{ width: '30%', float: 'left', textAlign: 'center' }}
              >
                مشاهده
              </Link>
            </li>
          </ul>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

SingleHouse.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SingleHouse;
