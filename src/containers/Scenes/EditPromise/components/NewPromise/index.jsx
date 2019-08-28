import React, { PureComponent } from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import {
  DatePicker,
} from 'react-advance-jalaali-datepicker';
import renderSelectField from '../../../../../shared/components/form/Select';


const renderMaskField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput className="englishText" {...input} placeholder={placeholder} type={type} mask={mask} />
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


class NewPromise extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      ads: 0,
      number: '',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
    console.log(index);
    console.log(name);
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(e.target);
  }

  handleSelectChange(e) {
    console.log(e);
    console.log(this.state.type);
  }

  render() {
    return (
      <div>
        <div className="bold-text promise-title">
          فرم ایجاد قول نامه
        </div>
        <Container>
          <Row>
            <Col xs={12} md={4} sm={6}>
              {renderSelectField({
                input: {
                  onChange: (e) => { this.handleTypeSelect(Number(e.value), 'type'); },
                  isMulti: false,
                  name: 'type',
                  value: types[this.state.type],
                },
                placeholder: 'نوع قول نامه',
                options: types,
                name: 'select',
                type: 'text',
              })}
            </Col>
            <Col xs={12} md={4} sm={6}>
              {renderSelectField({
                input: {
                  onChange: (e) => { this.handleTypeSelect(Number(e.value), 'ads'); },
                  isMulti: false,
                  name: 'ads',
                  value: adsList[this.state.ads],
                },
                placeholder: 'انتخاب آگهی',
                options: adsList,
                name: 'select',
                type: 'text',
              })}
            </Col>
            <Col xs={12} md={4} sm={6}>
              <div className="form__form-group promise-phone">
                <div className="form__form-group-field">
                  {renderMaskField({
                    input: {
                      name: 'number',
                      autoComplete: 'off',
                      value: this.state.number,
                      onChange: (e) => { this.handleInputChange(e); },
                    },
                    placeholder: 'شماره موبایل',
                    mask: [/[0]/, /[9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
                  })}
                </div>
                <span>شماره موبایل</span>
              </div>
            </Col>
            <Col xs={12} md={4} sm={6}>
              <div className="promise-date">
                <DatePicker
                  inputComponent={this.DatePickerInput}
                  placeholder="انتخاب تاریخ"
                  format="jYYYY/jMM/jDD"
                  onChange={this.change}
                  id="datePicker"
                  preSelected="1398/01/01"
                />
                <span>شماره موبایل</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewPromise;
