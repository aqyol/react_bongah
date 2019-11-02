import React from 'react';
import PropTypes from 'prop-types';
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
  Label,
} from 'reactstrap';

const nf = new Intl.NumberFormat();

const SingleHouse = props => (
  <div
    className="singleHouse"
    onClick={() => {
      const { onClick } = props;
      onClick(props.data.id);
    }}
    role="none"
  >
    <Card>
      <CardHeader style={{ position: 'relative', padding: 0 }}>
        <CardImg
          top
          width="100%"
          src={props.data.img}
          alt="Card image cap"
        />
        <CardImgOverlay style={{ top: 'unset', color: 'white', textAlign: 'right' }}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{ padding: 0 }}>{props.data.name}</Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{ padding: 0 }}>۳ هفته پیش</Col>
          </Row>
        </CardImgOverlay>
      </CardHeader>
      <CardBody style={{ textAlign: 'right', padding: '0.5rem' }}>
        <CardText>
          <Row className="ads-main-info-list">
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdBorderStyle className="chart-icon-list" />
              <span>{props.data.square} متر</span>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdAirlineSeatIndividualSuite className="chart-icon-list" />
              <span>{props.data.beds} خواب</span>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
              <MdDomain className="chart-icon-list" />
              <span>{props.data.toilets} ساله</span>
            </Col>
          </Row>
          {props.data.type === 1
          && (
            <div className="ads-price-card">
              <Row>
                <Col>
                  <Label className="pull-right" style={{ width: '20%' }}>قیمت</Label>
                  <Label className="bold-text" style={{ width: '60%', textAlign: 'left', padding: '0 5px' }}>
                    {nf.format(props.data.price)}
                  </Label>
                  <Label className="pull-left" style={{ width: '20%' }}>تومان</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="pull-right" style={{ width: '20%' }}>هر متر</Label>
                  <Label className="bold-text" style={{ width: '60%', textAlign: 'left', padding: '0 5px' }}>
                    {nf.format(props.data.price)}
                  </Label>
                  <Label className="pull-left" style={{ width: '20%' }}>تومان</Label>
                </Col>
              </Row>
            </div>
          )
          }
          {props.data.type !== 1
          && (
            <div className="ads-price-card">
              <Row>
                <Col>
                  <Label className="pull-right" style={{ width: '20%' }}>ودیعه</Label>
                  <Label className="bold-text" style={{ width: '60%', textAlign: 'left', padding: '0 5px' }}>
                    {nf.format(props.data.deposit)}
                  </Label>
                  <Label className="pull-left" style={{ width: '20%' }}>تومان</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label className="pull-right" style={{ width: '20%' }}>اجاره</Label>
                  <Label className="bold-text" style={{ width: '60%', textAlign: 'left', padding: '0 5px' }}>
                    {nf.format(props.data.rent)}
                  </Label>
                  <Label className="pull-left" style={{ width: '20%' }}>تومان</Label>
                </Col>
              </Row>
            </div>
          )
          }
        </CardText>
      </CardBody>
    </Card>
  </div>
);

SingleHouse.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SingleHouse;
