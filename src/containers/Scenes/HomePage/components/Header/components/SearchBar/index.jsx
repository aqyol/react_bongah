import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';


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

  handleSearch(e) {
    e.preventDefault();
    console.group('search click');
    console.log(this.state.searchItem);
    console.groupEnd();
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
                <Input
                  type="text"
                  name="searchItem"
                  id="searchItem"
                  placeholder="شهر مورد نظر را وارد کنید"
                  value={this.state.searchItem}
                  onChange={(e) => { this.handleInputChange(e); }}
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
