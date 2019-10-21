import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';


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


class MyInfoForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      isDisabled: false,
      info: {
        name: 'علی',
        surname: 'کریمی',
        number: '09111111111',
        phone: '02122233444',
        budget: '0',
        nationalCode: '1234567890',
        image: 'http://mariusn.com/themes/reales/images/avatar-1.png',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState((prevState) => {
      const { [name]: prevVal, ...other } = prevState.info;
      const newInfo = { [name]: value, ...other };
      return {
        info: newInfo,
      };
    });
  }

  saveChanges(e) {
    e.preventDefault();
    console.group('save profile info changes');
    console.log(this.state.info);
    console.groupEnd();
  }


  render() {
    return (
      <div className="myInfoForm nav-link">
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <FormGroup>
              <Label>نام</Label>
              <Input
                value={this.state.info.name}
                name="name"
                onChange={this.handleInputChange}
                disabled={this.state.isDisabled}
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <FormGroup>
              <Label>نام خانوادگی</Label>
              <Input
                value={this.state.info.surname}
                name="surname"
                onChange={this.handleInputChange}
                disabled={this.state.isDisabled}
                autoComplete="off"
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <FormGroup>
              <Label>تلفن همراه</Label>
              {renderMaskField({
                input: {
                  name: 'number',
                  autoComplete: 'off',
                  value: this.state.info.number,
                  onChange: (e) => { this.handleInputChange(e); },
                  disabled: (this.state.isDisabled),
                },
                placeholder: 'شماره موبایل',
                mask: [/[0]/, /[9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
              })}
            </FormGroup>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <FormGroup>
              <Label>تلفن ثابت</Label>
              {renderMaskField({
                input: {
                  name: 'phone',
                  autoComplete: 'off',
                  value: this.state.info.phone,
                  onChange: (e) => { this.handleInputChange(e); },
                  disabled: (this.state.isDisabled),
                },
                placeholder: 'شماره تلفن ثابت',
                mask: [/[0]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
              })}
            </FormGroup>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <FormGroup>
              <Label>کد ملی</Label>
              {renderMaskField({
                input: {
                  name: 'nationalCode',
                  autoComplete: 'off',
                  value: this.state.info.nationalCode,
                  onChange: (e) => { this.handleInputChange(e); },
                  disabled: (this.state.isDisabled),
                },
                placeholder: 'کد ملی',
                mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
              })}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <Button
              onClick={this.saveChanges}
              color="success"
              className="full-width"
            >
              ذخیره تغییرات
            </Button>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}


export default MyInfoForm;
