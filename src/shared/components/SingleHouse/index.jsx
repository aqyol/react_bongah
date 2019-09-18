import React from 'react';
import PropTypes from 'prop-types';
import {
  FaBed,
  FaParking,
  FaVectorSquare,
  FaRegEye,
  FaRegHeart,
} from 'react-icons/fa';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  NavLink,
} from 'reactstrap';

const SingleHouse = ({ data }) => (
  <div className="singleHouse">
    <Card>
      <CardImg
        top
        width="100%"
        src={data.img}
        alt="Card image cap"
      />
      <CardBody style={{ textAlign: 'right' }}>
        <CardTitle>{data.name}</CardTitle>
        <CardText>
          {data.address}
        </CardText>
        <CardText>
          <ul className="cardFeat">
            <li><span className="fa fa-moon-o"><FaBed /></span> {data.beds}</li>
            <li><span className="icon-drop"><FaParking /></span> {data.toilets}</li>
            <li><span className="icon-frame"><FaVectorSquare /></span> {data.square} مترمربع</li>
          </ul>
          <ul className="cardFeat">
            <li><span className="fa fa-moon-o"><FaRegEye /></span> 200</li>
            <li><span className="icon-drop"><FaRegHeart /></span> 54</li>
          </ul>
          <small className="text-muted">{data.beds} دقیقه پیش</small>
          <NavLink
            href={`/ads/detail/${data.beds}`}
            className="btn-success"
            style={{ width: '30%', float: 'left', textAlign: 'center' }}
          >
            مشاهده
          </NavLink>
        </CardText>
      </CardBody>
    </Card>
  </div>
);

SingleHouse.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SingleHouse;
