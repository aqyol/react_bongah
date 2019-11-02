import React, { PureComponent } from 'react';
import {
  Col,
  Row,
  // Form,
  // Button,
  // FormGroup,
  // Input,
  // Nav,
  // NavItem,
  // NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SingleHouse from '../../../../../shared/components/SingleHouse';

const houseData = [
  {
    id: 1,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 2,
    toilets: 1,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 2,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  }, {
    id: 1,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 2,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  }, {
    id: 2,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 1,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
];

const arr = [0, 1, 2, 3, 4, 5];

class ListProperty extends PureComponent {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    console.log('dddddddd');
    console.log(props);
    this.adsClick = this.adsClick.bind(this);
  }

  adsClick(id) {
    console.group('ads click');
    console.log(id);
    console.log(this.state);
    console.groupEnd();
    this.props.history.push(`/ads/detail/${id}`);
  }

  render() {
    return (
      <div className="listProperty">
        <div className="listPropertyHeader">
          <Row>
            <Col />
            <Col>
              <h3>آخرین آگهی های افزوده شده</h3>
            </Col>
            <Col />
          </Row>
        </div>
        <div className="row listPropertyContent">
          {arr.map((value, index) => (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={index.toString()}>
              <SingleHouse onClick={(id) => { this.adsClick(id); }} data={houseData[value]} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListProperty;
