import React, { PureComponent } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import StickyBox from 'react-sticky-box';
import renderSelectField from '../../../../../../../shared/components/form/Select';


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

class Filter extends PureComponent {
  static propTypes = {
    handleSave: PropTypes.func.isRequired,
    handleDissmiss: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      rooms: '',
      area_from: '',
      area_to: '',
      age_from: '',
      age_to: '',
      price: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '',
      },
      deposit: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '',
      },
      rent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '',
      },
      dailyRent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '',
      },
      type: 0,
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoomNumSelect = this.handleRoomNumSelect.bind(this);
  }

  componentDidMount() {
  }

  handlePriceLabel = (value) => {
    let label = '';
    let price = 0;
    if (value > 0 && value <= 9) {
      label = `${value * 100}میلیون تومان`;
      price = value * 100;
    }
    if (value >= 10 && value <= 22) {
      label = `${1 + (value - 10) * 0.25}میلیارد تومان`;
      price = 1 + (value - 10) * 0.25;
    }
    if (value >= 23 && value <= 30) {
      label = `${4 + (value - 22) * 0.5}میلیارد تومان`;
      price = 4 + (value - 22) * 0.5;
    }
    if (value >= 31 && value <= 32) {
      label = `${8 + (value - 30)}میلیارد تومان`;
      price = 8 + (value - 30);
    }
    if (value >= 33 && value <= 34) {
      label = `${10 + (value - 32) * 5}میلیارد تومان`;
      price = 10 + (value - 32) * 5;
    }
    if (value >= 35 && value <= 38) {
      label = `${(value - 34) * 50}میلیارد تومان`;
      price = (value - 34) * 50;
    }

    return [label, price];
  }

  handleRentLabel = (value) => {
    let label = '';
    let price = 0;
    if (value > 0 && value <= 1) {
      label = `${value * 100}هزار تومان`;
      price = value * 100;
    }
    if (value === 2) {
      label = `${500}هزار تومان`;
      price = 500;
    }
    if (value >= 3 && value <= 13) {
      label = `${1 + (value - 3) * 0.5}میلیون تومان`;
      price = 1 + (value - 3) * 0.5;
    }
    if (value >= 14 && value <= 17) {
      label = `${6 + (value - 13)}میلیون تومان`;
      price = 6 + (value - 13);
    }
    if (value >= 18 && value <= 19) {
      label = `${10 + (value - 17) * 2.5}میلیون تومان`;
      price = 10 + (value - 17) * 2.5;
    }
    if (value >= 20 && value <= 23) {
      label = `${(value - 18) * 10}میلیون تومان`;
      price = (value - 18) * 10;
    }
    if (value >= 24 && value <= 28) {
      label = `${(value - 23) * 100}میلیون تومان`;
      price = (value - 23) * 100;
    }

    return [label, price];
  }

  handleDailyRentLabel = (value) => {
    let label = '';
    let rent = 0;
    if (value > 0 && value <= 19) {
      label = `${value * 50}هزار تومان`;
      rent = value * 50;
    }
    if (value > 19 && value <= 28) {
      label = `${1 + (value - 20) * 0.5}میلیون تومان`;
      rent = 1 + (value - 20) * 0.5;
    }
    return [label, rent];
  }

  handleRangeChange(name, value) {
    let min;
    let minLabel;
    let max;
    let maxLabel;
    switch (name) {
      case ('price'):
        [minLabel, min] = this.handlePriceLabel(value.min);
        [maxLabel, max] = this.handlePriceLabel(value.max);
        break;
      case ('deposit'):
        [minLabel, min] = this.handlePriceLabel(value.min);
        [maxLabel, max] = this.handlePriceLabel(value.max);
        break;
      case 'rent':
        [minLabel, min] = this.handleRentLabel(value.min);
        [maxLabel, max] = this.handleRentLabel(value.max);
        break;
      case 'dailyRent':
        [minLabel, min] = this.handleDailyRentLabel(value.min);
        [maxLabel, max] = this.handleDailyRentLabel(value.max);
        break;
      default:
        break;
    }
    console.log(min, max);
    this.setState({
      [name]: {
        min: value.min, minLabel, max: value.max, maxLabel,
      },
    });
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

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // search ads based on new parameters
  }

  render() {
    return (
      <div className="search-filter search-advanced">
        <Modal fade={false} isOpen={this.props.showModal}>
          <ModalHeader>فیلتر جستجو</ModalHeader>
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
                    <Col lg={12} md={12} sm={12} xs={12}>قیمت</Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <p>
                        {this.state.price.min > 0
                        && (
                          <span>از {this.state.price.minLabel}</span>
                        )}
                        {this.state.price.maxLabel.length > 0
                        && (
                          <span>تا {this.state.price.maxLabel}</span>
                        )}
                      </p>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                      <InputRange
                        name="price"
                        maxValue={38}
                        minValue={0}
                        step={1}
                        value={this.state.price}
                        formatLabel={() => ''}
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
                      <Col lg={12} md={12} sm={12} xs={12}>رهن</Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <p>
                          {this.state.deposit.min > 0
                          && (
                            <span>از {this.state.deposit.minLabel}</span>
                          )}
                          {this.state.deposit.maxLabel.length > 0
                          && (
                            <span>تا {this.state.deposit.maxLabel}</span>
                          )}
                        </p>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <InputRange
                          name="deposit"
                          maxValue={38}
                          minValue={0}
                          step={1}
                          value={this.state.deposit}
                          formatLabel={() => ''}
                          onChange={(value) => { this.handleRangeChange('deposit', value); }}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col lg={12} md={12} sm={12} xs={12}>اجاره</Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <p>
                          {this.state.rent.min > 0
                          && (
                            <span>از {this.state.rent.minLabel}</span>
                          )}
                          {this.state.rent.maxLabel.length > 0
                          && (
                            <span>تا {this.state.rent.maxLabel}</span>
                          )}
                        </p>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <InputRange
                          name="rent"
                          maxValue={28}
                          minValue={0}
                          step={1}
                          value={this.state.rent}
                          formatLabel={() => ''}
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
                      <Col lg={12} md={12} sm={12} xs={12}>اجاره روزانه</Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <p>
                          {this.state.dailyRent.min > 0
                          && (
                            <span>از {this.state.dailyRent.minLabel}</span>
                          )}
                          {this.state.dailyRent.maxLabel.length > 0
                          && (
                            <span>تا {this.state.dailyRent.maxLabel}</span>
                          )}
                        </p>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <InputRange
                          name="dailyRent"
                          maxValue={28}
                          minValue={0}
                          step={1}
                          value={this.state.dailyRent}
                          formatLabel={() => ''}
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
            <Button color="primary" onClick={this.props.handleSave}>نمایش نتیجه</Button>{' '}
            <Button color="secondary" onClick={this.props.handleDissmiss}>بازگشت</Button>
          </ModalFooter>
        </Modal>
        <StickyBox bottom={false} offsetTop={10} offsetBottom={10} className="search-sidebar">
          <div>
            <Form>
              <Row form className="search-input">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Label style={{ paddingTop: '6px' }}>فیلترها</Label>
                  <Button color="success" className="pull-left" outline>لغو فیلترها</Button>
                </Col>
                <div className="search-bar-divider" />
                <Col lg={12} md={12} sm={12} xs={12}>
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
                  <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                    <FormGroup>
                      <Col lg={12} md={12} sm={12} xs={12}>قیمت</Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <p>
                          {this.state.price.min > 0
                          && (
                            <span>از {this.state.price.minLabel}</span>
                          )}
                          {this.state.price.maxLabel !== ''
                          && (
                            <span>تا {this.state.price.maxLabel}</span>
                          )}
                        </p>
                      </Col>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <InputRange
                          name="price"
                          maxValue={38}
                          minValue={0}
                          step={1}
                          value={this.state.price}
                          formatLabel={() => ''}
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
                        <Col lg={12} md={12} sm={12} xs={12}>رهن</Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <p>
                            {this.state.deposit.min > 0
                            && (
                              <span>از {this.state.deposit.minLabel}</span>
                            )}
                            {this.state.deposit.maxLabel.length > 0
                            && (
                              <span>تا {this.state.deposit.maxLabel}</span>
                            )}
                          </p>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <InputRange
                            name="deposit"
                            maxValue={38}
                            minValue={0}
                            step={1}
                            value={this.state.deposit}
                            formatLabel={() => ''}
                            onChange={(value) => { this.handleRangeChange('deposit', value); }}
                          />
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
                      <FormGroup>
                        <Col lg={12} md={12} sm={12} xs={12}>اجاره</Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <p>
                            {this.state.rent.min > 0
                            && (
                              <span>از {this.state.rent.minLabel}</span>
                            )}
                            {this.state.rent.maxLabel.length > 0
                            && (
                              <span>تا {this.state.rent.maxLabel}</span>
                            )}
                          </p>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <InputRange
                            name="rent"
                            maxValue={28}
                            minValue={0}
                            step={1}
                            value={this.state.rent}
                            formatLabel={() => ''}
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
                        <Col lg={12} md={12} sm={12} xs={12}>اجاره روزانه</Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <p>
                            {this.state.dailyRent.min > 0
                            && (
                              <span>از {this.state.dailyRent.minLabel}</span>
                            )}
                            {this.state.dailyRent.maxLabel.length > 0
                            && (
                              <span>تا {this.state.dailyRent.maxLabel}</span>
                            )}
                          </p>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                          <InputRange
                            name="dailyRent"
                            maxValue={28}
                            minValue={0}
                            step={1}
                            value={this.state.dailyRent}
                            formatLabel={() => ''}
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
            </Form>
          </div>
        </StickyBox>
      </div>
    );
  }
}

export default Filter;