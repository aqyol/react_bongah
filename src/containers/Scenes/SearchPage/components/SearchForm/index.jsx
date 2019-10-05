import React, { PureComponent } from 'react';
import {
  FaMap,
  FaThList,
  FaFilter,
} from 'react-icons/fa';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  // Collapse,
  // CustomInput,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import AsyncSelect from 'react-select/async';
import { PropTypes } from 'prop-types';
import SingleHouse from '../../../../../shared/components/SingleHouse';
import SearchMap from '../SearchMap';
import renderSelectField from '../../../../../shared/components/form/Select';


const houseData = [
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
];

const types = [
  {
    value: '0',
    label: 'فروش',
  },
  {
    value: '1',
    label: 'رهن و اجاره',
  },
  {
    value: '2',
    label: 'اقامتی، تفریحی',
  },
  {
    value: '3',
    label: 'پیش فروش',
  },
  {
    value: '4',
    label: 'مشارکت',
  },
];

const nums = [
  {
    value: '0',
    label: '0',
  },
  {
    value: '1',
    label: '1',
  }, {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
];

const area = [
  {
    value: '0',
    label: '30',
  },
  {
    value: '1',
    label: '50',
  }, {
    value: '2',
    label: '70',
  },
  {
    value: '3',
    label: '90',
  },
  {
    value: '4',
    label: '120',
  },
  {
    value: '5',
    label: '150',
  },
  {
    value: '6',
    label: '180',
  },
  {
    value: '7',
    label: '200',
  },
  {
    value: '8',
    label: '220',
  },
  {
    value: '9',
    label: '250',
  },
  {
    value: '10',
    label: '300',
  },
  {
    value: '11',
    label: '400',
  },
  {
    value: '12',
    label: '500',
  },
  {
    value: '13',
    label: '600',
  },
  {
    value: '14',
    label: '700',
  },
  {
    value: '15',
    label: '800',
  },
  {
    value: '16',
    label: '900',
  },
  {
    value: '17',
    label: '1000',
  },
  {
    value: '18',
    label: '1500',
  },
  {
    value: '19',
    label: '2000',
  },
  {
    value: '20',
    label: '2500',
  },
  {
    value: '21',
    label: '5000',
  },
];

const age = [
  {
    value: '0',
    label: 'نوساز',
  },
  {
    value: '1',
    label: '۳ سال',
  }, {
    value: '2',
    label: '۵ سال',
  },
  {
    value: '3',
    label: '۱۰ سال',
  },
  {
    value: '4',
    label: '۱۵ سال',
  },
  {
    value: '5',
    label: '۲۰ سال',
  },
  {
    value: '6',
    label: '۳۰ سال',
  },
  {
    value: '7',
    label: '۴۰ سال',
  },
  {
    value: '8',
    label: '۵۰ سال',
  },
];

const zones = [
  {
    value: 0,
    label: 'تهران',
  },
  {
    value: 1,
    label: 'شیراز',
  },
  {
    value: 2,
    label: 'مشهد',
  },
  {
    value: 3,
    label: 'تبریز',
  },
  {
    value: 4,
    label: 'اصفهان',
  },
  {
    value: 5,
    label: 'بندرعباس',
  },
  {
    value: 6,
    label: 'قم',
  },
  {
    value: 7,
    label: 'کرج',
  },
  {
    value: 8,
    label: 'یزد',
  },
  {
    value: 9,
    label: 'گنبد',
  },
  {
    value: 10,
    label: 'بندرترکمن',
  },
];

class SearchForm extends PureComponent {
  static propTypes = {
    searchParams: PropTypes.objectOf(PropTypes.object).isRequired,
    type: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor() {
    super();
    this.state = {
      resultTab: 'list',
      rooms: '',
      area_from: '',
      area_to: '',
      age_from: '',
      age_to: '',
      searchSelect: [],
      price: {
        min: 0,
        max: 38,
      },
      deposit: {
        min: 0,
        max: 38,
      },
      rent: {
        min: 0,
        max: 28,
      },
      dailyRent: {
        min: 0,
        max: 28,
      },
      type: 0,
      openModal: false,
      requestModal: false,
      requestModalLoading: false,
      requestTitle: '',
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.saveAsRequest = this.saveAsRequest.bind(this);
    this.handleCreateRequest = this.handleCreateRequest.bind(this);
    this.handleDismissRequestModal = this.handleDismissRequestModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoomNumSelect = this.handleRoomNumSelect.bind(this);
  }

  componentDidMount() {
    // search data from server using searchParams
    console.group('props in search page');
    console.log(this.props);
    console.groupEnd();
    let typeVal = 0;
    switch (this.props.type) {
      case 'sell':
        typeVal = 0;
        break;
      case 'rent':
        typeVal = 1;
        break;
      case 'preSell':
        typeVal = 3;
        break;
      case 'partnership':
        typeVal = 4;
        break;
      default:
        break;
    }
    this.setState({
      searchSelect: (this.props.searchParams !== undefined) ? this.props.searchParams : undefined,
      type: typeVal,
    });
    this.handleSearch();
  }

  changeResultTab = (tab) => {
    if (tab === 'list' || tab === 'map') {
      if (tab !== this.state.resultTab) {
        this.setState({
          resultTab: tab,
        });
      }
    }
  };

  resultList = () => (
    <div className="resultsList">
      <Row>
        {houseData.map((data, index) => (
          <Col xs={12} sm={6} md={6} lg={4} key={index.toString()}>
            <SingleHouse data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );

  resultMap = () => (
    <div className="resultsMap">
      <SearchMap />
    </div>
  );

  handlePriceLabel = (value, type) => {
    // type have => min, value, value, max
    if (type === 'min' || type === 'max') {
      return '';
    }
    if (value > 0 && value <= 9) {
      return (`میلیون تومان${value * 100}`);
    }
    if (value >= 10 && value <= 22) {
      return (`میلیارد تومان${1 + (value - 10) * 0.25}`);
    }
    if (value >= 23 && value <= 30) {
      return (`میلیارد تومان${4 + (value - 22) * 0.5}`);
    }
    if (value >= 31 && value <= 32) {
      return (`میلیارد تومان${8 + (value - 30)}`);
    }
    if (value >= 33 && value <= 34) {
      return (`میلیارد تومان${10 + (value - 32) * 5}`);
    }
    if (value >= 35 && value <= 38) {
      return (`میلیارد تومان${(value - 34) * 50}`);
    }

    return value;
  }

  handleRentLabel = (value, type) => {
    // type have => min, value, value, max
    if (type === 'min' || type === 'max') {
      return '';
    }
    if (value > 0 && value <= 1) {
      return (`هزار تومان${value * 100}`);
    }
    if (value === 2) {
      return (`هزار تومان${500}`);
    }
    if (value >= 3 && value <= 13) {
      return (`میلیون تومان${1 + (value - 3) * 0.5}`);
    }
    if (value >= 14 && value <= 17) {
      return (`میلیون تومان${6 + (value - 13)}`);
    }
    if (value >= 18 && value <= 19) {
      return (`میلیون تومان${10 + (value - 17) * 2.5}`);
    }
    if (value >= 20 && value <= 23) {
      return (`میلیون تومان${(value - 18) * 10}`);
    }
    if (value >= 24 && value <= 28) {
      return (`میلیون تومان${(value - 23) * 100}`);
    }

    return value;
  }

  handleDailyRentLabel = (value, type) => {
    // type have => min, value, value, max
    if (type === 'min' || type === 'max') {
      return '';
    }
    if (value > 0 && value <= 19) {
      return (`هزار تومان${value * 50}`);
    }
    if (value > 19 && value <= 28) {
      return (`میلیون تومان${1 + (value - 20) * 0.5}`);
    }
    return value;
  }

  filterColors = inputValue => (
    zones.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase())));

  promiseOptions = inputValue => (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.filterColors(inputValue));
      }, 1000);
    }));

  handleRangeChange(name, value) {
    this.setState({ [name]: { min: value.min, max: value.max } });
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
  }

  handleRoomNumSelect(rooms) {
    if (rooms === null) {
      this.setState({ rooms: [] });
      return;
    }
    this.setState({ rooms });
  }

  handleSearchSelect(searchSelect) {
    if (searchSelect === null) {
      this.setState({ searchSelect: [] });
      return;
    }
    this.setState({ searchSelect });
  }

  handleFilter() {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  }

  handleSearch() {
    console.group('handle search in search form (Search page)');
    console.log(this.state.searchSelect);
    console.groupEnd();
  }

  saveAsRequest() {
    this.setState({ requestModal: true });
  }

  handleCreateRequest() {
    if (this.state.requestTitle.length <= 0) {
      console.log('enter title for request');
      return;
    }
    this.setState({ requestModalLoading: true });
    setTimeout(() => {
      this.setState({
        requestModalLoading: false,
        requestModal: false,
      });
    }, 1000);
  }

  handleDismissRequestModal() {
    this.setState({
      requestModalLoading: false,
      requestModal: false,
      requestTitle: '',
    });
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div>
          <Modal fade={false} isOpen={this.state.openModal} toggle={this.handleFilter}>
            <ModalHeader toggle={this.handleFilter}>فیلتر جستجو</ModalHeader>
            <ModalBody>
              <Row className="search-input">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup>
                    {renderSelectField({
                      input: {
                        onChange: (e) => { this.handleTypeSelect(Number(e.value), 'type'); },
                        isMulti: false,
                        name: 'type',
                        value: types[this.state.type],
                      },
                      placeholder: 'نوع',
                      options: types,
                      name: 'select',
                      type: 'text',
                    })}
                  </FormGroup>
                </Col>
                {(this.state.type !== 1 && this.state.type !== 2)
                && (
                  <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col md={2} lg={2} sm={2} xs={2}>قیمت</Col>
                      <Col md={10} lg={10} sm={10} xs={10}>
                        <InputRange
                          name="price"
                          maxValue={38}
                          minValue={0}
                          step={1}
                          value={this.state.price}
                          formatLabel={(value, type) => this.handlePriceLabel(value, type)}
                          onChange={(value) => { this.handleRangeChange('price', value); }}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                )}
                {this.state.type === 1
                && (
                  <>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                      <FormGroup>
                        <Col md={2} lg={2} sm={2} xs={2}>رهن</Col>
                        <Col md={10} lg={10} sm={10} xs={10}>
                          <InputRange
                            name="deposit"
                            maxValue={38}
                            minValue={0}
                            step={1}
                            value={this.state.deposit}
                            formatLabel={(value, type) => this.handlePriceLabel(value, type)}
                            onChange={(value) => { this.handleRangeChange('deposit', value); }}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                      <FormGroup>
                        <Col md={2} lg={2} sm={2} xs={2}>اجاره</Col>
                        <Col md={10} lg={10} sm={10} xs={10}>
                          <InputRange
                            name="rent"
                            maxValue={28}
                            minValue={0}
                            step={1}
                            value={this.state.rent}
                            formatLabel={(value, type) => this.handleRentLabel(value, type)}
                            onChange={(value) => { this.handleRangeChange('rent', value); }}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  </>
                )}
                {this.state.type === 2
                && (
                  <>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                      <FormGroup>
                        <Col md={2} lg={2} sm={2} xs={2}>اجاره روزانه</Col>
                        <Col md={10} lg={10} sm={10} xs={10}>
                          <InputRange
                            name="dailyRent"
                            maxValue={28}
                            minValue={0}
                            step={1}
                            value={this.state.dailyRent}
                            formatLabel={(value, type) => this.handleDailyRentLabel(value, type)}
                            onChange={(value) => { this.handleRangeChange('dailyRent', value); }}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                  </>
                )}
                <Col lg={12} md={12} sm={12} xs={12}>
                  <FormGroup>
                    {renderSelectField({
                      input: {
                        onChange: (e) => { this.handleRoomNumSelect(e); },
                        isMulti: true,
                        name: 'rooms',
                        value: nums[() => {
                          const { rooms: value } = this.state;
                          return {
                            value,
                          };
                        }],
                      },
                      placeholder: 'تعداد اتاق',
                      options: nums,
                      name: 'select',
                      type: 'text',
                    })}
                  </FormGroup>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row>
                    <Col>
                      <FormGroup>
                        {renderSelectField({
                          input: {
                            onChange: (e) => { this.handleTypeSelect(Number(e.value), 'area_from'); },
                            isMulti: false,
                            name: 'area_from',
                            value: area[() => {
                              const { area_from: value } = this.state;
                              return {
                                value,
                              };
                            }],
                          },
                          placeholder: 'متراژ از',
                          options: area,
                          name: 'select',
                          type: 'text',
                        })}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        {renderSelectField({
                          input: {
                            onChange: (e) => { this.handleTypeSelect(Number(e.value), 'area_to'); },
                            isMulti: false,
                            name: 'area_to',
                            value: area[() => {
                              const { area_to: value } = this.state;
                              return {
                                value,
                              };
                            }],
                          },
                          placeholder: 'متراژ تا',
                          options: area,
                          name: 'select',
                          type: 'text',
                        })}
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row>
                    <Col>
                      <FormGroup>
                        {renderSelectField({
                          input: {
                            onChange: (e) => { this.handleTypeSelect(Number(e.value), 'age_from'); },
                            isMulti: false,
                            name: 'age_from',
                            value: age[() => {
                              const { age_from: value } = this.state;
                              return {
                                value,
                              };
                            }],
                          },
                          placeholder: 'سن از',
                          options: age,
                          name: 'select',
                          type: 'text',
                        })}
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        {renderSelectField({
                          input: {
                            onChange: (e) => { this.handleTypeSelect(Number(e.value), 'age_to'); },
                            isMulti: false,
                            name: 'age_to',
                            value: age[() => {
                              const { age_to: value } = this.state;
                              return {
                                value,
                              };
                            }],
                          },
                          placeholder: 'تا',
                          options: age,
                          name: 'select',
                          type: 'text',
                        })}
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleFilter}>نمایش نتیجه</Button>{' '}
              <Button color="secondary" onClick={this.handleFilter}>بازگشت</Button>
            </ModalFooter>
          </Modal>
          <Modal fade={false} isOpen={this.state.requestModal} toggle={this.handleDismissRequestModal}>
            <ModalHeader toggle={this.handleDismissRequestModal}>درخواست جدید</ModalHeader>
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
                  <Row className="search-input">
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <FormGroup>
                        <Label>عنوان درخواست</Label>
                        <Input
                          name="requestTitle"
                          type="text"
                          value={this.state.requestTitle}
                          onChange={this.handleInputChange}
                          className="text-right"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleCreateRequest}>نمایش نتیجه</Button>{' '}
                  <Button color="secondary" onClick={this.handleDismissRequestModal}>بازگشت</Button>
                </ModalFooter>
              </>
            )}
          </Modal>
        </div>
        <div className="searchForm">
          <Form>
            <Row form className="search-input">
              <Col lg={8} md={8} sm={8} xs={8}>
                <FormGroup>
                  <AsyncSelect
                    isMulti
                    cacheOptions
                    defaultOptions
                    placeholder="نام شهر، منطقه و .. خود را وارد کنید"
                    loadOptions={this.promiseOptions}
                  />
                </FormGroup>
              </Col>
              <Col lg={2} md={2} sm={2} xs={4}>
                <Button onClick={() => { this.handleSearch(); }} className="btn-success btn-search">تغییر جستجو</Button>
              </Col>
              <Col lg={2} md={2} sm={2} xs={12}>
                <Button
                  color="success"
                  onClick={() => { this.saveAsRequest(); }}
                  className="volume"
                >
                  درخواست
                </Button>
              </Col>
            </Row>
            <Row form className="search-input search-advanced">
              <Col lg={2} md={3} sm={4} xs={12}>
                <FormGroup>
                  {renderSelectField({
                    input: {
                      onChange: (e) => { this.handleTypeSelect(Number(e.value), 'type'); },
                      isMulti: false,
                      name: 'type',
                      value: types[this.state.type],
                      clearable: true,
                    },
                    placeholder: 'نوع',
                    options: types,
                    name: 'select',
                    type: 'text',
                  })}
                </FormGroup>
              </Col>
              {(this.state.type !== 1 && this.state.type !== 2)
              && (
                <Col lg={3} md={4} sm={6} xs={12} style={{ direction: 'ltr' }} className="range-price">
                  <FormGroup>
                    <Col md={2} lg={2} sm={2} xs={2}>قیمت</Col>
                    <Col md={10} lg={10} sm={10} xs={10}>
                      <InputRange
                        name="price"
                        maxValue={38}
                        minValue={0}
                        step={1}
                        value={this.state.price}
                        formatLabel={(value, type) => this.handlePriceLabel(value, type)}
                        onChange={(value) => { this.handleRangeChange('price', value); }}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              )}
              {this.state.type === 1
              && (
                <>
                  <Col lg={3} md={4} sm={6} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col md={2} lg={2} sm={2} xs={2}>رهن</Col>
                      <Col md={10} lg={10} sm={10} xs={10}>
                        <InputRange
                          name="deposit"
                          maxValue={38}
                          minValue={0}
                          step={1}
                          value={this.state.deposit}
                          formatLabel={(value, type) => this.handlePriceLabel(value, type)}
                          onChange={(value) => { this.handleRangeChange('deposit', value); }}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg={3} md={4} sm={6} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col md={2} lg={2} sm={2} xs={2}>اجاره</Col>
                      <Col md={10} lg={10} sm={10} xs={10}>
                        <InputRange
                          name="rent"
                          maxValue={28}
                          minValue={0}
                          step={1}
                          value={this.state.rent}
                          formatLabel={(value, type) => this.handleRentLabel(value, type)}
                          onChange={(value) => { this.handleRangeChange('rent', value); }}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </>
              )}
              {this.state.type === 2
              && (
                <>
                  <Col lg={3} md={4} sm={6} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col md={2} lg={2} sm={2} xs={2}>اجاره روزانه</Col>
                      <Col md={10} lg={10} sm={10} xs={10}>
                        <InputRange
                          name="dailyRent"
                          maxValue={28}
                          minValue={0}
                          step={1}
                          value={this.state.dailyRent}
                          formatLabel={(value, type) => this.handleDailyRentLabel(value, type)}
                          onChange={(value) => { this.handleRangeChange('dailyRent', value); }}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </>
              )}
              <Col md={4} sm={4} xs={12}>
                <FormGroup>
                  {renderSelectField({
                    input: {
                      onChange: (e) => { this.handleRoomNumSelect(e); },
                      isMulti: true,
                      name: 'rooms',
                      value: nums[() => {
                        const { rooms: value } = this.state;
                        return {
                          value,
                        };
                      }],
                    },
                    placeholder: 'تعداد اتاق',
                    options: nums,
                    name: 'select',
                    type: 'text',
                  })}
                </FormGroup>
              </Col>
              <Col md={4} xs={12} sm={6}>
                <Row>
                  <Col>
                    <FormGroup>
                      {renderSelectField({
                        input: {
                          onChange: (e) => { this.handleTypeSelect(Number(e.value), 'area_from'); },
                          isMulti: false,
                          name: 'area_from',
                          value: area[() => {
                            const { area_from: value } = this.state;
                            return {
                              value,
                            };
                          }],
                        },
                        placeholder: 'متراژ از',
                        options: area,
                        name: 'select',
                        type: 'text',
                      })}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      {renderSelectField({
                        input: {
                          onChange: (e) => { this.handleTypeSelect(Number(e.value), 'area_to'); },
                          isMulti: false,
                          name: 'area_to',
                          value: area[() => {
                            const { area_to: value } = this.state;
                            return {
                              value,
                            };
                          }],
                        },
                        placeholder: 'متراژ تا',
                        options: area,
                        name: 'select',
                        type: 'text',
                      })}
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md={4} xs={12} sm={6}>
                <Row>
                  <Col>
                    <FormGroup>
                      {renderSelectField({
                        input: {
                          onChange: (e) => { this.handleTypeSelect(Number(e.value), 'age_from'); },
                          isMulti: false,
                          name: 'age_from',
                          value: age[() => {
                            const { age_from: value } = this.state;
                            return {
                              value,
                            };
                          }],
                        },
                        placeholder: 'سن از',
                        options: age,
                        name: 'select',
                        type: 'text',
                      })}
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      {renderSelectField({
                        input: {
                          onChange: (e) => { this.handleTypeSelect(Number(e.value), 'age_to'); },
                          isMulti: false,
                          name: 'age_to',
                          value: age[() => {
                            const { age_to: value } = this.state;
                            return {
                              value,
                            };
                          }],
                        },
                        placeholder: 'تا',
                        options: age,
                        name: 'select',
                        type: 'text',
                      })}
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
          <div className="fab">
            <FaFilter className="fab-icon" onClick={this.handleFilter} />
          </div>
          <div>
            <div className="resultTable">
              <div className="resultTab">
                <ul>
                  <li
                    className={this.state.resultTab === 'list' ? 'active' : ''}
                  >
                    <a href="#1" onClick={() => { this.changeResultTab('list'); }}><FaThList /> نمایش لیست </a>
                  </li>
                  <li
                    className={this.state.resultTab === 'map' ? 'active' : ''}
                  >
                    <a href="#1" onClick={() => { this.changeResultTab('map'); }}><FaMap /> نمایش روی نقشه </a>
                  </li>
                </ul>
              </div>
              <div className="resultBody">
                {this.state.resultTab === 'list' ? this.resultList() : this.resultMap()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
