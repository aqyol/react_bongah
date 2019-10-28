import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Form,
} from 'reactstrap';
import { ReactComponent as AddHome } from '../../../../../../../shared/img/addHome.svg';
import { ReactComponent as SearchHome } from '../../../../../../../shared/img/searchHome.svg';

const SearchBar = () => (
  <div className="search-panel">
    <Form style={{ width: '80%', margin: 'auto' }}>
      <Row style={{ textAlign: 'center' }}>
        <Col md={12} sm={12} xs={12}>
          <Link
            to="/newproperty"
          >
            <AddHome style={{ width: '50px', height: '50px' }} />
            <p className="text-white">افزودن آگهی</p>
          </Link>
        </Col>
      </Row>
      <Row style={{ textAlign: 'center' }}>
        <Col md={12} sm={12} xs={12}>
          <Link
            to="/search"
          >
            <SearchHome style={{ width: '50px', height: '50px' }} />
            <p className="text-white">جستجو و درخواست</p>
          </Link>
        </Col>
      </Row>
    </Form>
  </div>
);

export default SearchBar;
