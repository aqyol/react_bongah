import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  Label,
  NavLink,
  NavItem,
  Nav,
} from 'reactstrap';
import classnames from 'classnames';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import Dashboard from '../../../shared/components/DashboardLayout';
import MyInfoForm from './components/MyInfoForm';


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


class InfoPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      info: {
        type: 2, // 0:normal user, 1:Agent, 2:Agency
        name: 'علی',
        surname: 'کریمی',
        number: '09111111111',
        phone: '0212223344',
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
    const { activeTab } = this.state;
    let navItem = <span>اطلاعات کاربری</span>;
    switch (activeTab) {
      case '1':
        navItem = <MyInfoForm />;
        break;
      case '3':
        navItem = <span>اطلاعات مشاور</span>;
        break;
      case '4':
        navItem = <span>اطلاعات بنگاه</span>;
        break;
      default:
        navItem = <span>اطلاعات کاربری</span>;
    }
    return (
      <Dashboard>
        <div className="infoForm">
          <Row className="profile-info">
            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
              <div className="profile-title">
                <img
                  className="profile-image"
                  alt="profile"
                  src={this.state.info.image}
                />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={12} className="profile-info-text">
              <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Label>{this.state.info.name}</Label>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Label>{this.state.info.surname}</Label>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Label>{this.state.info.number}</Label>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Label>{this.state.info.phone}</Label>
                </Col>
              </Row>
            </Col>
          </Row>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                مشخصات فردی
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                سابقه فعالیت
              </NavLink>
            </NavItem>
            {this.state.info.type === 1
            && (
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => {
                    this.toggle('3');
                  }}
                >
                  اطلاعات مشاور
                </NavLink>
              </NavItem>
            )}
            {this.state.info.type === 2
            && (
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '4' })}
                  onClick={() => {
                    this.toggle('4');
                  }}
                >
                  اطلاعات بنگاه
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {navItem}
        </div>
      </Dashboard>
    );
  }
}


export default InfoPage;
