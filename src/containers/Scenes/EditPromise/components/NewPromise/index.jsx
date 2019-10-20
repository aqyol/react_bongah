import React, { PureComponent } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Form,
  Button,
  FormGroup,
  Label,
  Collapse,
  Input,
  CustomInput,
  ModalBody,
  ModalFooter,
  Modal,
  ModalHeader,
} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import AsyncSelect from 'react-select/async';
import renderSelectField from '../../../../../shared/components/form/Select';


const renderMaskField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput className="englishText form-control" {...input} placeholder={placeholder} type={type} mask={mask} />
);

renderMaskField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.any).isRequired,
};

renderMaskField.defaultProps = {
  placeholder: '',
  type: 'text',
};

const types = [
  {
    value: '0',
    label: 'نوع قول نامه',
  },
  {
    value: '1',
    label: 'فروش',
  }, {
    value: '2',
    label: 'رهن و اجاره',
  }, {
    value: '3',
    label: 'پیش فروش',
  }, {
    value: '4',
    label: 'مشارکت',
  },
];


const adsList = [
  {
    value: '0',
    label: 'انتخاب آگهی',
  },
  {
    value: '1',
    label: 'آگهی ۱',
  }, {
    value: '2',
    label: 'آگهی ۲',
  }, {
    value: '3',
    label: 'آگهی ۳',
  }, {
    value: '4',
    label: 'آگهی ۴',
  },
];

const customStyles = {
  option: provided => ({
    ...provided,
  }),
  container: () => ({
    width: '100%',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 5,
  }),
  menuList: () => ({
    width: '100%',
  }),
};

const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#98EAD3',
    primary: '#54E1B9',
    primary50: '#B4EEDD',
  },
});

const numberMask = createNumberMask({
  prefix: '',
  suffix: '    تومان',
});


class NewPromise extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      status: 1,
      closeModal: true,
      requestModalLoading: false,
      rating: 0,
      rateDesc: '',
      isOwner: true,
      toggleUserInfo: false,
      toggleOwnerInfo: false,
      toggleAdsInfo: false,
      type: 0,
      ads: 0,
      number: '',
      name: '',
      surname: '',
      nationalCode: '',
      postCode: '',
      shenasname: '',
      melk: {
        dang: 0,
        fareiAz: '',
        asliGhete: '',
        serialSanad: '',
        safheSanad: '',
        daftarSanad: '',
        nameSanad: '',
        pelakSabt: '',
        bakhsh: '',
        hozeSabt: '',
        otherInfo: '',
        normalCommission: 0,
        ourCommission: 0,
      },
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputMelkChange = this.handleInputMelkChange.bind(this);
    this.toggleUserInfoForm = this.toggleUserInfoForm.bind(this);
    this.handleCreatePromise = this.handleCreatePromise.bind(this);
    this.getPromiseInfo = this.getPromiseInfo.bind(this);
    this.searchAds = this.searchAds.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRatePromise = this.handleRatePromise.bind(this);
    this.handleDismissRatePromise = this.handleDismissRatePromise.bind(this);
    this.setRating = this.setRating.bind(this);
    this.getAdsInfo = this.getAdsInfo.bind(this);
  }

  componentDidMount() {
    if (this.state.id !== undefined) {
      this.getPromiseInfo();
    }
  }

  getPromiseInfo() {
    console.group('get promise info => id');
    console.log(this.props.id);
    console.groupEnd();
  }

  setRating(rating) {
    this.setState({ rating });
  }

  getAdsInfo(id) {
    // get ads info from server using selected ads id
    this.setState({
      normalCommission: 10000000,
      ourCommission: 1000000,
    });
    console.log(id);
  }

  promiseOptions = (inputValue, callback) => (
    new Promise((resolve) => {
      resolve(this.searchAds(inputValue, callback));
    }));

  searchAds(name, callback) {
    console.log(this.state.region);
    setTimeout(() => {
      callback(adsList);
    }, 1000);

    //   searchGoods(name, this.props.businessId)
    //     .then((response) => {
    //       this.setState({ totalGoods: response.totalScopes });
    //       callback(response.totalScopes);
    //     })
    //     .catch(() => (null));
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
    if (name === 'ads') {
      this.getAdsInfo(index.value);
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(e.target.value);
  }

  handleInputMelkChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState((prevState) => {
      const { [name]: prevValue, ...other } = prevState.melk;
      const newMelk = { ...other, [name]: value };
      return {
        melk: newMelk,
      };
    });
    console.log(e.target.value);
  }

  handleSelectChange(e) {
    console.log(e);
    console.log(this.state.type);
  }

  toggleUserInfoForm(e, name) {
    e.preventDefault();
    this.setState((prevState) => {
      const { [name]: prevValue } = prevState;
      return {
        [name]: !prevValue,
      };
    });
  }

  handleCreatePromise() {
    console.group('create promise');
    console.log(this.state);
    console.groupEnd();
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  handleRatePromise() {
    if (this.state.rating < 1) {
      return;
    }
    this.setState({ requestModalLoading: true });
    setTimeout(() => {
      this.setState({
        requestModalLoading: false,
        closeModal: false,
      });
    }, 1000);
  }

  handleDismissRatePromise() {
    this.setState({
      requestModalLoading: false,
      closeModal: false,
    });
  }


  render() {
    return (
      <div>
        <div>
          <div>
            <Modal fade={false} isOpen={(this.state.status === 1 && this.state.closeModal)} toggle={this.closeModal}>
              <ModalHeader style={{ textAlign: 'right' }} toggle={this.handleDismissRequestModal}>
                امتیاز بنگاه/مشاور
              </ModalHeader>
              {this.state.requestModalLoading
              && (
                <div className={`request-modal load${this.state.isLoading ? '' : ' loaded'}`}>
                  <div className="load__icon-wrap">
                    <svg className="load__icon">
                      <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                    </svg>
                  </div>
                </div>
              )
              }
              {!this.state.requestModalLoading
              && (
                <>
                  <ModalBody>
                    <Row className="search-input form">
                      <Col lg={12} md={12} sm={12} xs={12} style={{ textAlign: 'center' }}>
                        <FormGroup>
                          <StarRatings
                            rating={this.state.rating}
                            starDimension="40px"
                            starSpacing="15px"
                            changeRating={(rating) => { this.setRating(rating); }}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12} style={{ textAlign: 'right' }}>
                        <FormGroup>
                          <Label>توضیحات</Label>
                          <Input
                            type="textarea"
                            value={this.state.rateDesc}
                            name="rateDesc"
                            className="text-right"
                            onChange={(e) => { this.handleInputChange(e); }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.handleRatePromise}>ثبت نظر</Button>{' '}
                    <Button color="secondary" onClick={this.handleDismissRatePromise}>بعدا نظر می دهم</Button>
                  </ModalFooter>
                </>
              )}
            </Modal>
          </div>
        </div>
        <div className="newPropertyForm">
          <div className="bold-text promise-title">
            فرم ایجاد قول نامه
          </div>
          <Form>
            <Row className="form">
              <Col xs={12} md={4} sm={6}>
                <FormGroup>
                  {renderSelectField({
                    input: {
                      onChange: (e) => { this.handleTypeSelect(e, 'type'); },
                      isMulti: false,
                      isDisabled: (!this.state.isOwner),
                      name: 'type',
                      value: types[this.state.type],
                    },
                    placeholder: 'نوع قول نامه',
                    options: types,
                    name: 'select',
                    type: 'text',
                  })}
                </FormGroup>
              </Col>
              <Col xs={12} md={4} sm={6}>
                <FormGroup>
                  <AsyncSelect
                    isMulti={false}
                    cache={false}
                    defaultOptions
                    loadOptions={(input, callback) => { this.promiseOptions(input, callback); }}
                    onChange={(e) => { this.handleTypeSelect(e, 'ads'); }}
                    placeholder="انتخاب آگهی"
                    value={this.state.ads}
                    options={adsList}
                    loadingMessage={() => ('درحال بارگزاری...')}
                    theme={theme => selectTheme(theme)}
                    noOptionsMessage={() => ('آگهی یافت نشد')}
                    styles={customStyles}
                    isDisabled={!this.state.isOwner}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={4} sm={6}>
                <FormGroup>
                  {renderMaskField({
                    input: {
                      name: 'number',
                      autoComplete: 'off',
                      value: this.state.number,
                      onChange: (e) => { this.handleInputChange(e); },
                      disabled: (!this.state.isOwner),
                    },
                    placeholder: 'شماره موبایل',
                    mask: [/[0]/, /[9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
                  })}
                </FormGroup>
              </Col>
            </Row>
            <Row className="form">
              <Col xs={12} md={4} sm={6}>
                <FormGroup>
                  <Label>تعرفه عادی</Label>
                  <MaskedInput
                    mask={numberMask}
                    className="input-commission text-center form-control"
                    name="normalCommission"
                    value={this.state.normalCommission}
                    autoComplete="off"
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={4} sm={6}>
                <FormGroup>
                  <Label>تعرفه املاک ما</Label>
                  <MaskedInput
                    mask={numberMask}
                    className="input-commission text-center form-control"
                    name="ourCommission"
                    value={this.state.ourCommission}
                    autoComplete="off"
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="form">
              <Col xs={12} md={4} sm={6}>
                <Button
                  outline
                  color="success"
                  onClick={(e) => { this.toggleUserInfoForm(e, 'toggleOwnerInfo'); }}
                  style={{ marginBottom: '1rem', width: '100%' }}
                >
                  اطلاعات طرف اول (مالک)
                </Button>
              </Col>
            </Row>
            <Collapse
              className="form"
              isOpen={this.state.toggleOwnerInfo}
            >
              <Row>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="name">نام</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="نام"
                      value={this.state.name}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="surname">نام خانوادگی</Label>
                    <Input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="نام خانوادگی"
                      value={this.state.surname}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="shenasname">شماره شناسنامه</Label>
                    <Input
                      type="text"
                      name="shenasname"
                      id="shenasname"
                      placeholder="شماره شناسنامه"
                      value={this.state.shenasname}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="nationalCode">کد ملی</Label>
                    <Input
                      type="text"
                      name="nationalCode"
                      id="nationalCode"
                      placeholder="کد ملی"
                      value={this.state.nationalCode}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="postCode">کد پستی</Label>
                    <Input
                      type="text"
                      name="postCode"
                      id="postCode"
                      placeholder="کد پستی"
                      value={this.state.postCode}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Collapse>
            <Row className="form">
              <Col xs={12} md={4} sm={6}>
                <Button
                  outline
                  color="success"
                  onClick={(e) => { this.toggleUserInfoForm(e, 'toggleUserInfo'); }}
                  style={{ marginBottom: '1rem', width: '100%' }}
                >
                  اطلاعات طرف دوم
                </Button>
              </Col>
            </Row>
            <Collapse
              className="form"
              isOpen={this.state.toggleUserInfo}
            >
              <Row>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="name">نام</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="نام"
                      value={this.state.name}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="surname">نام خانوادگی</Label>
                    <Input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="نام خانوادگی"
                      value={this.state.surname}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="shenasname">شماره شناسنامه</Label>
                    <Input
                      type="text"
                      name="shenasname"
                      id="shenasname"
                      placeholder="شماره شناسنامه"
                      value={this.state.shenasname}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="nationalCode">کد ملی</Label>
                    <Input
                      type="text"
                      name="nationalCode"
                      id="nationalCode"
                      placeholder="کد ملی"
                      value={this.state.nationalCode}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="postCode">کد پستی</Label>
                    <Input
                      type="text"
                      name="postCode"
                      id="postCode"
                      placeholder="کد پستی"
                      value={this.state.postCode}
                      onChange={(e) => { this.handleInputChange(e); }}
                      disabled={this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Collapse>
            <Row className="form">
              <Col xs={12} md={4} sm={6}>
                <Button
                  outline
                  color="success"
                  onClick={(e) => { this.toggleUserInfoForm(e, 'toggleAdsInfo'); }}
                  style={{ marginBottom: '1rem', width: '100%' }}
                >
                  اطلاعات ملک(اختیاری)
                </Button>
              </Col>
            </Row>
            <Collapse
              className="form"
              isOpen={this.state.toggleAdsInfo}
            >
              <Row>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="dang">
                      تعداد دانگ
                      <span>{this.state.melk.dang}</span>
                    </Label>
                    <CustomInput
                      type="range"
                      id="dang"
                      name="dang"
                      value={this.state.melk.dang}
                      max={6}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="pelakSabt">پلاک ثبتی</Label>
                    <Input
                      type="text"
                      name="pelakSabt"
                      id="pelakSabt"
                      placeholder="پلاک ثبتی"
                      value={this.state.melk.pelakSabt}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="fareiAz">فرعی از</Label>
                    <Input
                      type="text"
                      name="fareiAz"
                      id="fareiAz"
                      placeholder="فرعی از"
                      value={this.state.melk.fareiAz}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="asliGhete">اصلی قطعه</Label>
                    <Input
                      type="text"
                      name="asliGhete"
                      id="asliGhete"
                      placeholder="اصلی قطعه"
                      value={this.state.melk.asliGhete}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="serialSanad">سریال سند</Label>
                    <Input
                      type="text"
                      name="serialSanad"
                      id="serialSanad"
                      placeholder="سریال سند"
                      value={this.state.melk.serialSanad}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="bakhsh">واقع در بخش</Label>
                    <Input
                      type="text"
                      name="bakhsh"
                      id="bakhsh"
                      placeholder="واقع در بخش"
                      value={this.state.melk.bakhsh}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="hozeSabt">حوزه ثبتی</Label>
                    <Input
                      type="text"
                      name="hozeSabt"
                      id="hozeSabt"
                      placeholder="حوزه ثبتی"
                      value={this.state.melk.hozeSabt}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="safheSanad">صفحه</Label>
                    <Input
                      type="text"
                      name="safheSanad"
                      id="safheSanad"
                      placeholder="صفحه"
                      value={this.state.melk.safheSanad}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="daftarSanad">دفتر</Label>
                    <Input
                      type="text"
                      name="daftarSanad"
                      id="daftarSanad"
                      placeholder="دفتر"
                      value={this.state.melk.daftarSanad}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
                <Col xs={12} md={4} sm={6}>
                  <FormGroup>
                    <Label for="nameSanad">به نام</Label>
                    <Input
                      type="text"
                      name="nameSanad"
                      id="nameSanad"
                      placeholder="به نام"
                      value={this.state.melk.nameSanad}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="otherInfo">اطلاعات بیشتر</Label>
                    <Input
                      type="textarea"
                      name="otherInfo"
                      id="otherInfo"
                      placeholder="اطلاعات بیشتر"
                      value={this.state.melk.otherInfo}
                      onChange={(e) => { this.handleInputMelkChange(e); }}
                      disabled={!this.state.isOwner}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Collapse>
          </Form>
          {this.state.status === 0
          && (
            <Row>
              <Col />
              <Col>
                <Button
                  outline
                  color="success"
                  className="promise-btn"
                  onClick={this.handleCreatePromise}
                >
                  ایجاد قول نامه
                </Button>
              </Col>
              <Col />
            </Row>
          )}
        </div>
      </div>
    );
  }
}

export default NewPromise;
