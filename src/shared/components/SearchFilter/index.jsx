import React, { PureComponent } from 'react';
import 'react-input-range/lib/css/index.css';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Label,
} from 'reactstrap';
import renderSelectField from '../form/Select';
import RangeSlider from '../RangeSlider/RangeSlider';


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

const applicationType = [
  {
    value: '0',
    label: 'اداری',
  },
  {
    value: '1',
    label: 'تجاری',
  },
];

class SearchFilter extends PureComponent {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleDissmiss: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      rooms: '',
      beds: [
        {
          label: '0',
          value: false,
        },
        {
          label: '1',
          value: false,
        },
        {
          label: '2',
          value: false,
        },
        {
          label: '3',
          value: false,
        },
        {
          label: '+4',
          value: false,
        },
      ],
      area: {
        min: 0,
        max: 85,
        minLabel: '',
        maxLabel: 12000,
      },
      area_from: '',
      area_to: '',
      age_from: '',
      age_to: '',
      price: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '200 میلیارد تومان',
      },
      deposit: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '200 میلیارد تومان',
      },
      rent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '500 میلیون تومان',
      },
      dailyRent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '5 میلیون تومان',
      },
      type: 0,
      applicationType: '',
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.selectRooms = this.selectRooms.bind(this);
    this.handleAreaRangeChange = this.handleAreaRangeChange.bind(this);
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

  handleArea = (value) => {
    let label = 0;
    if (value > 0 && value <= 50) {
      label = value * 5;
    }
    if (value > 50 && value <= 65) {
      label = 250 + (value - 50) * 50;
    }
    if (value > 65 && value <= 75) {
      label = 1000 + (value - 65) * 100;
    }
    if (value > 75 && value <= 85) {
      label = 2000 + (value - 75) * 1000;
    }
    return label;
  }

  handleRangeChange(name, value) {
    let min;
    let minLabel;
    let max;
    let maxLabel;
    switch (name) {
      case ('price'):
        [minLabel, min] = this.handlePriceLabel(value[1]);
        [maxLabel, max] = this.handlePriceLabel(value[0]);
        break;
      case ('deposit'):
        [minLabel, min] = this.handlePriceLabel(value[1]);
        [maxLabel, max] = this.handlePriceLabel(value[0]);
        break;
      case 'rent':
        [minLabel, min] = this.handleRentLabel(value[1]);
        [maxLabel, max] = this.handleRentLabel(value[0]);
        break;
      case 'dailyRent':
        [minLabel, min] = this.handleDailyRentLabel(value[1]);
        [maxLabel, max] = this.handleDailyRentLabel(value[0]);
        break;
      default:
        break;
    }
    console.log(min, max);
    this.setState({
      [name]: {
        min: value[1], minLabel, max: value[0], maxLabel,
      },
    }, function () {
      this.handleSearch(false);
    });
  }

  handleAreaRangeChange(name, value) {
    let min;
    let max;
    if (name === 'area') {
      min = this.handleArea(value[1]);
      max = this.handleArea(value[0]);
    }
    console.log(min, max);
    this.setState({
      [name]: {
        min: value[1], minLabel: min, max: value[0], maxLabel: max,
      },
    }, function () {
      this.handleSearch(false);
    });
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index }, function () {
      this.handleSearch(false);
    });
  }

  handleApplicationSelect(type) {
    this.setState({ applicationType: type }, function () {
      this.handleSearch(false);
    });
  }

  handleSearch(clickEvent) {
    const { handleSearch } = this.props;
    if (!this.props.isModal) {
      handleSearch(this.state);
      return;
    }
    if (clickEvent) {
      handleSearch(this.state);
    }
  }

  handleDismiss() {
    this.props.handleDissmiss();
  }

  clearFilter() {
    this.setState({
      rooms: '',
      beds: [
        {
          label: '0',
          value: false,
        },
        {
          label: '1',
          value: false,
        },
        {
          label: '2',
          value: false,
        },
        {
          label: '3',
          value: false,
        },
        {
          label: '+4',
          value: false,
        },
      ],
      area_from: '',
      area_to: '',
      age_from: '',
      age_to: '',
      area: {
        min: 0,
        max: 85,
        minLabel: '',
        maxLabel: 12000,
      },
      price: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '200 میلیارد تومان',
      },
      deposit: {
        min: 0,
        minLabel: '',
        max: 38,
        maxLabel: '200 میلیارد تومان',
      },
      rent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '500 میلیون تومان',
      },
      dailyRent: {
        min: 0,
        minLabel: '',
        max: 28,
        maxLabel: '5 میلیون تومان',
      },
      applicationType: '',
      type: 0,
    });
  }

  selectRooms(num) {
    this.setState((prevState) => {
      const { beds } = prevState;
      const newBeds = beds.map((item, index) => {
        if (index === num) {
          return {
            label: item.label,
            value: !item.value,
          };
        }
        return {
          label: item.label,
          value: item.value,
        };
      });
      return {
        beds: newBeds,
      };
    }, function () {
      this.handleSearch(false);
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Label style={{ paddingTop: '6px', paddingRight: '4%', float: 'right' }}>فیلترها</Label>
              <Button
                color="success"
                className="pull-left"
                outline
                style={{ marginLeft: '4%' }}
                onClick={() => { this.clearFilter(); }}
              >
                لغو فیلترها
              </Button>
            </Col>
          </Row>
          <div className="search-bar-divider" />
          <Row form className="search-input">
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
                    <RangeSlider
                      minValue={0}
                      maxValue={38}
                      values={[this.state.price.min, this.state.price.max]}
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
                      <RangeSlider
                        minValue={0}
                        maxValue={38}
                        values={[this.state.deposit.min, this.state.deposit.max]}
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
                      <RangeSlider
                        minValue={0}
                        maxValue={28}
                        values={[this.state.rent.min, this.state.rent.max]}
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
                      <RangeSlider
                        minValue={0}
                        maxValue={28}
                        values={[this.state.dailyRent.min, this.state.dailyRent.max]}
                        onChange={(value) => { this.handleRangeChange('dailyRent', value); }}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </>
            )}
            <Col lg={12} md={12} sm={12} xs={12}>
              <FormGroup>
                <Label>تعداد اتاق</Label>
                <FormGroup>
                  <div className="bed-container">
                    <div
                      role="none"
                      className={`${(this.state.beds[0].value ? 'beds-active' : '')}`}
                      onClick={() => { this.selectRooms(0); }}
                    >
                      0
                    </div>
                    <div
                      role="none"
                      className={`${(this.state.beds[1].value ? 'beds-active' : '')}`}
                      onClick={() => { this.selectRooms(1); }}
                    >
                      1
                    </div>
                    <div
                      role="none"
                      className={`${(this.state.beds[2].value ? 'beds-active' : '')}`}
                      onClick={() => { this.selectRooms(2); }}
                    >
                      2
                    </div>
                    <div
                      role="none"
                      className={`${this.state.beds[3].value ? 'beds-active' : ''}`}
                      onClick={() => { this.selectRooms(3); }}
                    >
                      3
                    </div>
                    <div
                      role="none"
                      className={`${(this.state.beds[4].value ? 'beds-active' : '')}`}
                      onClick={() => { this.selectRooms(4); }}
                    >
                      +4
                    </div>
                  </div>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'ltr' }} className="range-price">
              <FormGroup>
                <Col lg={12} md={12} sm={12} xs={12}>متراژ</Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <p>
                    {this.state.area.min > 0
                    && (
                      <span>از {this.state.area.minLabel}</span>
                    )}
                    {this.state.area.maxLabel !== ''
                    && (
                      <span>تا {this.state.area.maxLabel}</span>
                    )}
                  </p>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <RangeSlider
                    minValue={0}
                    maxValue={85}
                    values={[this.state.area.min, this.state.area.max]}
                    onChange={(value) => { this.handleAreaRangeChange('area', value); }}
                  />
                </Col>
              </FormGroup>
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
            <Col lg={12} md={12} sm={12} xs={12}>
              <FormGroup>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleApplicationSelect(e); },
                    isMulti: false,
                    name: 'applicationType',
                    value: this.state.applicationType,
                  },
                  placeholder: 'نوع کاربری',
                  options: applicationType,
                  type: 'text',
                })}
              </FormGroup>
            </Col>
          </Row>
          <Row className="filter-modal-btn">
            <Col />
            <Col>
              <Button color="primary" onClick={() => { this.handleSearch(true); }}>نمایش نتیجه</Button>
              <Button color="secondary" onClick={this.handleDismiss}>بازگشت</Button>
            </Col>
            <Col />
          </Row>
        </Form>
      </div>
    );
  }
}

export default SearchFilter;
