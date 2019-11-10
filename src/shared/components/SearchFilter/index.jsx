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
  Collapse,
} from 'reactstrap';
import {
  FaAngleUp,
  FaAngleDown,
} from 'react-icons/fa';
import renderSelectField from '../form/Select';
import RangeSlider from '../RangeSlider/RangeSlider';
import CheckBox from '../CheckBox';
import { FILTER_CHECKS, HOME_TYPE_ARRAY } from '../../../containers/constants';


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

const applicationType = [
  {
    value: '0',
    label: 'مسکونی',
  },
  {
    value: '1',
    label: 'اداری، تجاری',
  },
  {
    value: '2',
    label: 'صنعتی',
  },
];

class SearchFilter extends PureComponent {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleDissmiss: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
    filterData: PropTypes.objectOf(PropTypes.object).isRequired,
  };


  constructor() {
    super();
    this.state = {
      beds: {
        0: {
          label: '0',
          value: false,
        },
        1: {
          label: '1',
          value: false,
        },
        2: {
          label: '2',
          value: false,
        },
        3: {
          label: '3',
          value: false,
        },
        4: {
          label: '+4',
          value: false,
        },
      },
      area: {
        min: 0,
        max: 85,
        minLabel: '',
        maxLabel: 12000,
      },
      age: {
        min: 0,
        max: 30,
        minLabel: 'نوساز',
        maxLabel: '30 سال و بیشتر',
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
      type:
        {
          value: '0',
          label: 'فروش',
        },
      applicationType:
        {
          value: '0',
          label: 'مسکونی',
        },
      homeType: '',
      homeTypeArr: HOME_TYPE_ARRAY[0],
      haveVam: false,
      isConvertable: false,
      checkItems: FILTER_CHECKS[0],
      toggleProperties: false,
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.selectBeds = this.selectBeds.bind(this);
    this.handleAreaRangeChange = this.handleAreaRangeChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getAdsTypeInitData = this.getAdsTypeInitData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    console.group('filter props');
    console.log(this.props);
    console.groupEnd();
    const state = this.props.filterData;
    if (state !== undefined) {
      this.setState(state);
    }
  }

  getInitialData() {
    // get init data using selected applicationType
    console.group();
    console.log('init data, selected type');
    console.log(this.state.applicationType);
    console.groupEnd();
    const val = Number(this.state.applicationType.value);
    this.setState({
      homeType: '',
      homeTypeArr: HOME_TYPE_ARRAY[val],
    });
  }

  getAdsTypeInitData(index) {
    this.setState({ checkItems: FILTER_CHECKS[index] });
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

  handleAge = (value) => {
    let label = 'نوساز';
    if (value > 0 && value < 30) {
      label = value;
    }
    if (value >= 30) {
      label = '30 سال و بیشتر';
    }
    return label;
  }

  handleRangeChange(name, value, isComplete) {
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
    }, () => {
      if (isComplete) {
        this.handleSearch(false);
      }
    });
  }

  handleAreaRangeChange(name, value, isComplete) {
    let min;
    let max;
    if (name === 'area') {
      min = this.handleArea(value[1]);
      max = this.handleArea(value[0]);
    } else if (name === 'age') {
      min = this.handleAge(value[1]);
      max = this.handleAge(value[0]);
    }
    console.log(min, max);
    this.setState({
      [name]: {
        min: value[1], minLabel: min, max: value[0], maxLabel: max,
      },
    }, () => {
      if (isComplete) {
        this.handleSearch(false);
      }
    });
  }

  handleSelect(value, name) {
    this.setState({ [name]: value }, () => {
      this.handleSearch(false);
    });
    if (name === 'applicationType') {
      // get initial data from server based ads selected type
      // like : applicationType, homeType, ...
      this.getInitialData();
    }
    if (name === 'type') {
      // get initial data from server based ads selected type
      // like : applicationType, homeType, ...
      this.getAdsTypeInitData(Number(value.value));
    }
  }

  handleSearch(clickEvent) {
    console.log(clickEvent, this.props.isModal);
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
      beds: {
        0: {
          label: '0',
          value: false,
        },
        1: {
          label: '1',
          value: false,
        },
        2: {
          label: '2',
          value: false,
        },
        3: {
          label: '3',
          value: false,
        },
        4: {
          label: '+4',
          value: false,
        },
      },
      area: {
        min: 0,
        max: 85,
        minLabel: '',
        maxLabel: 12000,
      },
      age: {
        min: 0,
        max: 30,
        minLabel: 'نوساز',
        maxLabel: '30 سال و بیشتر',
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
      type:
        {
          value: '0',
          label: 'فروش',
        },
      applicationType: '',
      homeType: '',
      haveVam: false,
      isConvertable: false,
      checkItems: FILTER_CHECKS[0],
      toggleProperties: false,
    }, () => {
      const { handleSearch } = this.props;
      handleSearch(this.state);
    });
  }

  selectBeds(num) {
    this.setState(prevState => (
      {
        ...prevState,
        beds: {
          ...prevState.beds,
          [num]: {
            ...prevState.beds[num],
            value: !prevState.beds[num].value,
          },
        },
      }
    ), () => {
      this.handleSearch(false);
    });
  }

  handleToggle(num) {
    this.setState(prevState => (
      {
        ...prevState,
        checkItems: {
          ...prevState.checkItems,
          checks: {
            ...prevState.checkItems.checks,
            [num]: {
              ...prevState.checkItems.checks[num],
              value: !prevState.checkItems.checks[num].value,
            },
          },
        },
      }
    ), () => {
      this.handleSearch(false);
    });
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
    const bedItems = [0, 1, 2, 3, 4].map(item => (
      <div
        role="none"
        className={`${(this.state.beds[item].value ? 'beds-active' : '')}`}
        onClick={() => { this.selectBeds(item); }}
      >
        {(item === 4) ? `+${item}` : item}
      </div>
    ));

    let checks;

    if (this.state.checkItems !== undefined) {
      checks = this.state.checkItems.ids.map(num => (
        <Col lg={6} md={6} sm={6} xs={6} className="filter-checkbox">
          <CheckBox
            name={this.state.checkItems.checks[num].label}
            value={this.state.checkItems.checks[num].value}
            onChange={() => { this.handleToggle(num); }}
          >
            {this.state.checkItems.checks[num].label} {this.props.isModal ? 'modal' : ''}
          </CheckBox>
        </Col>
      ));
    }


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
                    onChange: (e) => { this.handleSelect(e, 'type'); },
                    isMulti: false,
                    name: 'type',
                    value: this.state.type,
                    clearable: true,
                  },
                  placeholder: 'نوع آگهی',
                  options: types,
                  name: 'select',
                  type: 'text',
                })}
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <FormGroup>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleSelect(e, 'applicationType'); },
                    isMulti: false,
                    name: 'applicationType',
                    value: this.state.applicationType,
                  },
                  placeholder: 'کاربری ملک',
                  options: applicationType,
                  type: 'text',
                })}
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <FormGroup>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleSelect(e, 'homeType'); },
                    isMulti: false,
                    name: 'homeType',
                    value: this.state.homeType,
                  },
                  placeholder: 'نوع ملک',
                  options: this.state.homeTypeArr,
                  type: 'text',
                })}
              </FormGroup>
            </Col>
            {(this.state.type.value !== '1' && this.state.type.value !== '2')
            && (
              <Col lg={12} md={12} sm={12} xs={12} className="range-price">
                <FormGroup>
                  <Col lg={12} md={12} sm={12} xs={12} className="bold-text text-black-50">قیمت</Col>
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
                  <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                    <RangeSlider
                      minValue={0}
                      maxValue={38}
                      values={[this.state.price.min, this.state.price.max]}
                      onChange={(value, isCompleted) => { this.handleRangeChange('price', value, isCompleted); }}
                    />
                  </Col>
                </FormGroup>
              </Col>
            )}
            {this.state.type.value === '1'
            && (
              <>
                <Col lg={12} md={12} sm={12} xs={12} className="range-price">
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
                    <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                      <RangeSlider
                        minValue={0}
                        maxValue={38}
                        values={[this.state.deposit.min, this.state.deposit.max]}
                        onChange={(value, isCompleted) => { this.handleRangeChange('deposit', value, isCompleted); }}
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="range-price">
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
                    <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                      <RangeSlider
                        minValue={0}
                        maxValue={28}
                        values={[this.state.rent.min, this.state.rent.max]}
                        onChange={(value, isCompleted) => { this.handleRangeChange('rent', value, isCompleted); }}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </>
            )}
            {this.state.type.value === '2'
            && (
              <>
                <Col lg={12} md={12} sm={12} xs={12} className="range-price">
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
                    <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                      <RangeSlider
                        minValue={0}
                        maxValue={28}
                        values={[this.state.dailyRent.min, this.state.dailyRent.max]}
                        onChange={(value, isCompleted) => { this.handleRangeChange('dailyRent', value, isCompleted); }}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </>
            )}
            <Col lg={12} md={12} sm={12} xs={12}>
              <Label>تعداد اتاق</Label>
              <FormGroup>
                <div className="bed-container">
                  {bedItems}
                </div>
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="range-price">
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
                <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                  <RangeSlider
                    minValue={0}
                    maxValue={85}
                    values={[this.state.area.min, this.state.area.max]}
                    onChange={(value, isCompleted) => { this.handleAreaRangeChange('area', value, isCompleted); }}
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="range-price">
              <FormGroup>
                <Col lg={12} md={12} sm={12} xs={12}>سن</Col>
                <Col lg={12} md={12} sm={12} xs={12} style={{ direction: 'rtl' }}>
                  <p>
                    {this.state.age.min >= 0
                    && (
                      <span> {this.state.age.minLabel}</span>
                    )}
                    {this.state.age.maxLabel !== ''
                    && (
                      <span>تا {this.state.age.maxLabel}</span>
                    )}
                  </p>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="range-slider-col">
                  <RangeSlider
                    minValue={0}
                    maxValue={30}
                    values={[this.state.age.min, this.state.age.max]}
                    onChange={(value, isCompleted) => { this.handleAreaRangeChange('age', value, isCompleted); }}
                  />
                </Col>
              </FormGroup>
            </Col>
            {this.props.isModal
            && (
              <Row style={{ width: '100%' }}>
                {checks}
              </Row>
            )}
            {!this.props.isModal
            && (
              <div className="filter-properties">
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
                  <Row style={{ width: '100%' }}>
                    {checks}
                  </Row>
                </Collapse>
              </div>
            )}
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
