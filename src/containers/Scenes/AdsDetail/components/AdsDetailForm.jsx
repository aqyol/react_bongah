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
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
} from 'reactstrap';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import { Line } from 'react-chartjs-2';
import {
  MdBorderStyle,
  MdAirlineSeatIndividualSuite,
  MdClearAll,
  MdDomain,
} from 'react-icons/md';
import {
  GiChart,
} from 'react-icons/gi';
import {
  FaAngleUp,
  FaAngleDown,
} from 'react-icons/fa';
import renderSelectField from '../../../../shared/components/form/Select';


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
    key: '1',
    src: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    key: '2',
    src: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    key: '3',
    src: 'http://mariusn.com/themes/reales/images/prop/3-1.png',
  },
];

const {
  Marker,
  ZoomControl,
  ScaleControl,
} = CedarMaps.getReactMapboxGl();

const reportTypes = [
  {
    value: '0',
    label: 'کلاه برداری / دروغ',
  },
  {
    value: '1',
    label: 'کالای دزدی',
  },
  {
    value: '2',
    label: 'قیمت بیش از حد بازار',
  },
  {
    value: '3',
    label: 'محتوای نامناسب',
  },
  {
    value: '4',
    label: 'آگهی تکراری',
  },
  {
    value: '4',
    label: 'فروخته شده / ناموجود',
  },
  {
    value: '4',
    label: 'دسته بندی اشتباه',
  },
  {
    value: '4',
    label: 'سایر',
  },
];

class AdsDetailForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      reportModal: false,
      reportType: '',
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
        commonCommission: '10000000',
        ourCommission: '1000000',
      },
      toggleProperties: false,
      toggleMainProperties: false,
      toggleStatistics: false,
    };
    this.getAdsInfo = this.getAdsInfo.bind(this);
    this.handleCall = this.handleCall.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleDismissModal = this.handleDismissModal.bind(this);
    this.isItemValid = this.isItemValid.bind(this);
    this.handleSaveReport = this.handleSaveReport.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
          commonCommission: '10000000',
          ourCommission: '1000000',
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

  handleSelect(name, value) {
    this.setState({ [name]: value });
  }

  handleToggleModal(name) {
    this.setState((prevState) => {
      const { [name]: prevVal } = prevState;
      return {
        [name]: !prevVal,
      };
    });
  }

  handleDismissModal(name) {
    this.setState({ [name]: false });
  }

  isItemValid(name) {
    const { [name]: val } = this.state;
    return val !== '';
  }

  handleSaveReport() {
    this.setState({ reportModalLoading: true });
    setTimeout(() => {
      this.setState({
        reportModalLoading: false,
        reportModal: false,
      });
    }, 1000);
  }

  render() {
    const info = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <Col lg={3} md={6} sm={4} xs={6} className="text-center" key={i.toString()}>
        <Label>نام مشخصه{i}</Label>
        <span className="span-info">12</span>
      </Col>
    ));

    const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <Col lg={2} md={2} sm={3} xs={4} key={i.toString()}>
        <h2 className=" text-center btn-ads">ویژگی {i}</h2>
      </Col>
    ));

    const nf = new Intl.NumberFormat();

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
            <Modal
              fade={false}
              isOpen={this.state.reportModal}
              toggle={() => { this.handleToggleModal('reportModal'); }}
            >
              <ModalHeader>درخواست جدید</ModalHeader>
              {this.state.reportModalLoading
              && (
                <div className={`relative-load${this.state.isLoading ? '' : ' loaded'}`}>
                  <div className="load__icon-wrap">
                    <svg className="load__icon">
                      <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                    </svg>
                  </div>
                </div>
              )
              }
              {!this.state.reportModalLoading
              && (
                <>
                  <ModalBody>
                    <Row className="search-input">
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          {renderSelectField({
                            input: {
                              onChange: (e) => { this.handleSelect('reportType', e); },
                              isMulti: false,
                              name: 'reportType',
                              value: this.state.reportType,
                              clearable: true,
                            },
                            placeholder: 'علت گزارش',
                            options: reportTypes,
                            name: 'select',
                            type: 'text',
                          })}
                        </FormGroup>
                      </Col>
                      {!this.isItemValid('reportType')
                      && (
                        <Col lg={12} md={12} sm={12} xs={12} className="text-danger">
                          <p>انتخاب علت گزارش الزامی است</p>
                        </Col>
                      )}
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={() => { this.handleSaveReport(); }}
                      disabled={!this.isItemValid('reportType')}
                    >
                      ذخیره درخواست
                    </Button>
                    <Button
                      color="secondary"
                      onClick={() => { this.handleDismissModal('reportModal'); }}
                    >
                      بازگشت
                    </Button>
                  </ModalFooter>
                </>
              )}
            </Modal>
            <h4 className="text-center">{this.state.adsInfo.title}</h4>
            <Row className="ads-detail-height">
              <Col lg={8} md={7} sm={12} xs={12}>
                <UncontrolledCarousel autoPlay={false} indicators={false} items={items} />
              </Col>
              <Col lg={4} md={5} sm={12} xs={12}>
                <Card className="text-center">
                  <CardBody>
                    {this.state.adsInfo.type === 1
                      && (
                      <Row className="ads-price-card">
                        <Col>
                          <Label className="pull-right">قیمت</Label>
                          <span className="bold-text">{nf.format(this.state.adsInfo.price)}</span>
                          <Label className="pull-left">تومان</Label>
                        </Col>
                      </Row>
                      )
                    }
                    {this.state.adsInfo.type === 2
                    && (
                      <div className="ads-price-card">
                        <Row>
                          <Col>
                            <Label className="pull-right">ودیعه</Label>
                            <span className="bold-text">{nf.format(this.state.adsInfo.deposit)}</span>
                            <Label className="pull-left">تومان</Label>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Label className="pull-right">اجاره</Label>
                            <span className="bold-text">{nf.format(this.state.adsInfo.rent)}</span>
                            <Label className="pull-left">تومان</Label>
                          </Col>
                        </Row>
                      </div>
                    )
                    }
                    <Row className="ads-main-info">
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <MdBorderStyle className="chart-icon" />
                        <span>۹۰ متر</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <MdAirlineSeatIndividualSuite className="chart-icon" />
                        <span>۲ خواب</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <MdDomain className="chart-icon" />
                        <span>۲ ساله</span>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <MdClearAll className="chart-icon" />
                        <span>طبقه ۳</span>
                      </Col>
                    </Row>
                    <Row className="ads-commission-card">
                      <Col xs={12} md={12} sm={12}>
                        <Label className="pull-right">تعرفه عادی</Label>
                        <span className="bold-text">{nf.format(this.state.adsInfo.commonCommission)}</span>
                        <Label className="pull-left">تومان</Label>
                      </Col>
                      <Col xs={12} md={12} sm={12}>
                        <Label className="pull-right">تعرفه املاک ما</Label>
                        <span className="bold-text">{nf.format(this.state.adsInfo.ourCommission)}</span>
                        <Label className="pull-left">تومان</Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4} className="ads-col-btn">
                        <Button className="btn-ads btn-success" onClick={this.handleCall}>تماس</Button>
                      </Col>
                      <Col md={4} className="ads-col-btn">
                        <Button className="btn-ads btn-success" onClick={this.handleMessage}>پیام</Button>
                      </Col>
                      <Col md={4} className="ads-col-btn">
                        <Button className="btn-ads btn-success" onClick={this.handleEmail}>ایمیل</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col />
                      <Col md={4} className="ads-col-btn">
                        <Button
                          className="btn-ads btn-success"
                          onClick={() => { this.handleToggleModal('reportModal'); }}
                        >
                          گزارش تخلف
                        </Button>
                      </Col>
                      <Col />
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Card>
              <Button
                outline
                color="link"
                onClick={(e) => { this.toggle(e, 'toggleMainProperties'); }}
                className="full-width text-right"
              >
                ویژگی های اصلی
                {this.state.toggleMainProperties
                && (
                  <FaAngleUp className="ads-detail-angle" />
                )}
                {!this.state.toggleMainProperties
                && (
                  <FaAngleDown className="ads-detail-angle" />
                )}
              </Button>
              <Collapse className="collapse-container" isOpen={this.state.toggleMainProperties}>
                <Row>
                  {info}
                </Row>
              </Collapse>
            </Card>
            <Card>
              <Button
                outline
                color="link"
                onClick={(e) => { this.toggle(e, 'toggleProperties'); }}
                className="full-width text-right"
              >
                سایر ویژگی ها
                {this.state.toggleProperties
                && (
                  <FaAngleUp className="ads-detail-angle" />
                )}
                {!this.state.toggleProperties
                && (
                  <FaAngleDown className="ads-detail-angle" />
                )}
              </Button>
              <Collapse className="collapse-container" isOpen={this.state.toggleProperties}>
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
                  className="full-width text-right"
                >
                  آمار آگهی
                  {this.state.toggleStatistics
                  && (
                    <FaAngleUp className="ads-detail-angle" />
                  )}
                  {!this.state.toggleStatistics
                  && (
                    <FaAngleDown className="ads-detail-angle" />
                  )}
                  <GiChart className="chart-icon" />
                </Button>
                <Collapse className="collapse-container" isOpen={this.state.toggleStatistics}>
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
