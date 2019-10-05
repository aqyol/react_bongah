import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AsyncSelect from 'react-select/async';
import classnames from 'classnames';

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

class SearchBar extends PureComponent {
  static propTypes = {
    isPersist: PropTypes.bool,
  };

  static defaultProps = {
    isPersist: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      isAdvance: false,
      activeTab: '1',
      searchItem: '',
    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  toggleAdvSearch = () => {
    this.setState(prevState => ({
      isAdvance: !prevState.isAdvance,
    }));
  }

  filterColors = inputValue => (
    zones.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase())));

  promiseOptions = inputValue => (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.filterColors(inputValue));
      }, 1000);
    }));

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
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

  handleSearch(searchItem) {
    this.setState({ searchItem });
    console.log(this.state.searchItem);
  }

  render() {
    if (!this.props.isPersist) {
      return (null);
    }
    return (
      <div className="search-panel">
        <Form>
          <Nav tabs style={{ border: 'none' }}>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                خرید
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                اجاره
              </NavLink>
            </NavItem>
          </Nav>
          <Row form>
            <Col md={6} sm={8} xs={12}>
              <FormGroup>
                <AsyncSelect
                  isMulti
                  cacheOptions
                  defaultOptions
                  placeholder="نام شهر، منطقه و .. خود را وارد کنید"
                  loadOptions={this.promiseOptions}
                  className="text-right text-black-50"
                  onChange={(e) => { this.handleSearch(e); }}
                />
              </FormGroup>
            </Col>
            <Col md={4} sm={4} xs={12}>
              <FormGroup style={{ width: '80%', margin: 'auto' }}>
                <Link
                  to={{
                    pathname: '/search',
                    state: {
                      searchItem: this.state.searchItem,
                      type: (this.state.activeTab === '1') ? 'sell' : 'rent',
                    },
                  }}
                  style={{ width: '100%' }}
                  className="btn btn-success"
                  color="success"
                >
                  جستجو و درخواست
                </Link>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
