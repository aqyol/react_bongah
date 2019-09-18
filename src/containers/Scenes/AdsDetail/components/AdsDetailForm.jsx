import React, { PureComponent } from 'react';
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Button,
  Collapse,
} from 'reactstrap';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  datasets: [
    {
      label: 'مشاهده',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55],
    },
    {
      label: 'پسندیده',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(247, 80, 44,1)',
      borderColor: 'rgba(247, 80, 44,1)',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(247, 80, 44,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(247, 80, 44,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 9, 0, 8, 5, 5, 4, 6, 5, 8, 1, 6, 5, 0, 5, 9, 0, 1, 6, 5],
    },
  ],
};

const items = [
  {
    src: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    src: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    src: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
];

const {
  Marker,
  ZoomControl,
  ScaleControl,
} = CedarMaps.getReactMapboxGl();

class AdsDetailForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      adsInfo: {
        isOwner: false,
        type: '',
        title: '',
        price: '',
        deposit: '',
        rent: '',
        location: {
          lat: '',
          lng: '',
        },
      },
      toggleProperties: false,
      toggleStatistics: false,
    };
    this.getAdsInfo = this.getAdsInfo.bind(this);
    this.handleCall = this.handleCall.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.getAdsInfo();
  }

  getAdsInfo() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        adsInfo: {
          isOwner: true,
          type: 2,
          title: 'عنوان آگهی',
          price: '200000000',
          deposit: '200000000',
          rent: '2000000',
          location: {
            lat: 51.34379364705882,
            lng: 35.74109568627451,
          },
        },
      });
    }, 1000);
  }

  handleCall(e) {
    e.preventDefault();
    console.log(this.state.adsInfo);
  }

  handleMessage(e) {
    e.preventDefault();
    console.log(this.state.adsInfo);
  }

  handleEmail(e) {
    e.preventDefault();
    console.log(this.state.adsInfo);
  }

  toggle(e, name) {
    e.preventDefault();
    this.setState((prevState) => {
      const { [name]: prevVal } = prevState;
      return {
        [name]: !prevVal,
      };
    });
  }

  render() {
    const info = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <Col lg={3} md={6} sm={4} xs={6} className="text-center">
        <Label>نام مشخصه{i}</Label>
        <span className="span-info">12</span>
      </Col>
    ));

    const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <Col lg={2} md={2} sm={3} xs={4}>
        <h2 className=" text-center btn-ads">ویژگی {i}</h2>
      </Col>
    ));

    return (
      <div>
        {this.state.isLoading
        && (
          <div className={`load${this.state.isLoading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )
        }
        {!this.state.isLoading
        && (
          <div className="ads-detail-container">
            <h4 className="text-center">{this.state.adsInfo.title}</h4>
            <Row className="ads-detail-height">
              <Col lg={5} md={6} sm={12} xs={12}>
                <UncontrolledCarousel autoPlay={false} indicators={false} items={items} />
              </Col>
              <Col lg={7} md={6} sm={12} xs={12}>
                <Card className="text-center">
                  <CardBody>
                    {this.state.adsInfo.type === 1
                      && (
                      <Row className="ads-price-card">
                        <Col>
                          <Label>قیمت (تومان)</Label>
                          <span className="bold-text">{this.state.adsInfo.price}</span>
                        </Col>
                      </Row>
                      )
                    }
                    {this.state.adsInfo.type === 2
                    && (
                      <div className="ads-price-card">
                        <Row>
                          <Col>
                            <Label>ودیعه (تومان)</Label>
                            <span className="bold-text">{this.state.adsInfo.deposit}</span>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Label>اجاره (تومان)</Label>
                            <span className="bold-text">{this.state.adsInfo.rent}</span>
                          </Col>
                        </Row>
                      </div>
                    )
                    }
                    <Row>
                      {info}
                    </Row>
                    <Row>
                      <Col md={4}>
                        <Button className="btn-ads btn-success" onClick={this.handleCall}>تماس</Button>
                      </Col>
                      <Col md={4}>
                        <Button className="btn-ads btn-success" onClick={this.handleMessage}>پیام</Button>
                      </Col>
                      <Col md={4}>
                        <Button className="btn-ads btn-success" onClick={this.handleEmail}>ایمیل</Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Card>
              <Button
                outline
                color="link"
                onClick={(e) => { this.toggle(e, 'toggleProperties'); }}
              >
                ویژگی های اصلی
              </Button>
              <Collapse isOpen={this.state.toggleProperties}>
                <Row>
                  {properties}
                </Row>
              </Collapse>
            </Card>
            {this.state.adsInfo.isOwner
            && (
              <Card>
                <Button
                  outline
                  color="link"
                  onClick={(e) => { this.toggle(e, 'toggleStatistics'); }}
                >
                  آمار آگهی
                </Button>
                <Collapse isOpen={this.state.toggleStatistics}>
                  <Row>
                    <Line data={data} />
                  </Row>
                </Collapse>
              </Card>
            )}
            <div className="ads-map">
              <CedarMaps
                containerStyle={{
                  height: '80vh',
                  width: '100%',
                }}
                token="8d8be29d01ea833ea7bacdd1836567d67c678a70"
                center={[this.state.adsInfo.location.lat, this.state.adsInfo.location.lng]}
                preserveDrawingBuffer={false}
              >
                <ZoomControl />
                <ScaleControl />
                {this.state.adsInfo.location !== undefined
                && (
                  <Marker
                    coordinates={[this.state.adsInfo.location.lat, this.state.adsInfo.location.lng]}
                  >
                    <img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="marker" />
                  </Marker>
                )}

              </CedarMaps>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdsDetailForm;
