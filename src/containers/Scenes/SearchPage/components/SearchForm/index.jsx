import React, { PureComponent } from 'react';
import {
  FaMap,
  FaThList,
  FaFilter,
} from 'react-icons/fa';
import 'react-input-range/lib/css/index.css';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  PaginationLink,
  PaginationItem,
  Pagination,
} from 'reactstrap';
import classnames from 'classnames';
import StickyBox from 'react-sticky-box';
import SingleHouse from '../../../../../shared/components/SingleHouse';
import SearchMap from '../SearchMap';
import SearchFilter from '../../../../../shared/components/SearchFilter/index';
import { HOME_TYPE_ARRAY, FILTER_CHECKS } from '../../../../constants';


const houseData = [
  {
    id: 1,
    type: 2,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 2,
    toilets: 1,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 2,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  }, {
    id: 3,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 4,
    type: 2,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  }, {
    id: 5,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  }, {
    id: 6,
    type: 1,
    price: 100000000,
    deposit: 30000000,
    rent: 1500000,
    name: 'خانه آپارتمانی در نارمک',
    address: 'خیابان آزادی، کوچه ۳۹، پلاک ۲۳۱، واحد ۵',
    beds: 3,
    toilets: 2,
    square: 20,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
];

class SearchForm extends PureComponent {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  constructor() {
    super();
    this.state = {
      sortBy: 1,
      resultTab: 'list',
      resultSize: 23,
      searchSelect: [],
      filterModal: true,
      requestModal: false,
      requestModalLoading: false,
      searchLoading: false,
      requestTitle: '',
      filterData: {
        city: '',
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
        type: '',
        applicationType: '',
        homeType: '',
        homeTypeArr: HOME_TYPE_ARRAY[0],
        haveVam: false,
        isConvertable: false,
        checkItems: FILTER_CHECKS[0],
        toggleProperties: false,
      },
      result: {
        list: [],
        size: 22,
        pages: 3,
        currPagination: 0,
        pagination: 1,
      },
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.saveAsRequest = this.saveAsRequest.bind(this);
    this.handleCreateRequest = this.handleCreateRequest.bind(this);
    this.handleDismissModal = this.handleDismissModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.changePagination = this.changePagination.bind(this);
    this.isItemValid = this.isItemValid.bind(this);
    this.adsClick = this.adsClick.bind(this);
  }

  componentDidMount() {
    // search data from server using searchParams
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
          <Col xs={12} sm={6} md={6} lg={6} xl={4} key={index.toString()}>
            <SingleHouse onClick={(id) => { this.adsClick(id); }} data={data} />
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

  createPagination = () => {
    const pagination = [];
    for (let i = 0; i < this.state.result.pages; i += 1) {
      pagination.push(
        <PaginationItem>
          <PaginationLink
            className={`text-dark ${(this.state.result.currPagination === i) ? 'bg-success' : ''}`}
            onClick={() => { this.changePagination(i); }}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return pagination;
  }

  changePagination(page) {
    this.setState((prevState) => {
      const { pagination: pageVal, ...other } = prevState.result;
      const newResult = { pagination: page, ...other };
      return {
        result: newResult,
      };
    }, () => {
      this.handleSearch();
    });
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
  }

  handleToggleModal() {
    this.setState(prevState => ({ filterModal: !prevState.filterModal }));
  }

  handleSearch() {
    // search from server using filterData, selectedSearch, pagination and sortBy
    console.group('handle search in search form (Search page)');
    console.log(
      this.state.filterData,
      this.state.searchSelect,
      this.state.result.pagination,
      this.state.sortBy,
    );
    console.groupEnd();
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1000);
  }

  handleFilter(data) {
    this.setState((prevState) => {
      const { pagination: pageVal, ...other } = prevState.result;
      const newResult = { pagination: 1, ...other };
      return {
        result: newResult,
        filterData: data,
      };
    }, () => {
      this.handleSearch();
    });
  }

  saveAsRequest() {
    this.setState({ requestModal: true });
  }

  handleCreateRequest() {
    if (this.state.requestTitle.trim().length <= 0) {
      return;
    }
    this.setState({ requestModalLoading: true });
    setTimeout(() => {
      this.setState({
        requestModalLoading: false,
        requestModal: false,
        requestTitle: '',
      });
    }, 1000);
  }

  handleDismissModal(name) {
    this.setState({
      [name]: false,
    });
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  toggleSort(tab) {
    const { sortBy } = this.state;
    if (sortBy !== tab) {
      this.setState({
        sortBy: tab,
      }, () => {
        this.handleSearch();
      });
    }
  }

  isItemValid(name) {
    const { [name]: val } = this.state;
    return val.trim().length > 0;
  }

  adsClick(id) {
    console.group('ads click');
    console.log(id);
    console.log(this.state);
    console.groupEnd();
    this.props.history.push(`/ads/detail/${id}`);
  }

  render() {
    const width = window.innerWidth;

    return (
      <div>
        <div>
          <Modal
            fade={false}
            isOpen={this.state.requestModal}
            toggle={() => { this.handleDismissModal('requestModal'); }}
          >
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
                          className={`text-right ${this.isItemValid('requestTitle') ? '' : 'border-danger'}`}
                        />
                      </FormGroup>
                    </Col>
                    {!this.isItemValid('requestTitle')
                    && (
                      <Col lg={12} md={12} sm={12} xs={12} className="text-danger">
                        <p>وارد کردن عنوان درخواست الزامی است</p>
                      </Col>
                    )}
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleCreateRequest}>ذخیره درخواست</Button>{' '}
                  <Button color="secondary" onClick={() => { this.handleDismissModal('requestModal'); }}>بازگشت</Button>
                </ModalFooter>
              </>
            )}
          </Modal>
          {width <= 1080
          && (
            <Modal
              fade={false}
              isOpen={this.state.filterModal}
              toggle={() => { this.handleDismissModal('filterModal'); }}
            >
              <ModalHeader className="modal-title">فیلتر جستجو</ModalHeader>
              <SearchFilter
                filterData={this.state.filterData}
                handleDissmiss={() => { this.handleDismissModal('filterModal'); }}
                isModal
                handleSearch={(data) => { this.handleDismissModal('filterModal'); this.handleFilter(data); }}
              />
            </Modal>
          )}
        </div>
        <div className="search-container">
          {width > 1080
          && (
            <div className="search-filter">
              <StickyBox>
                <SearchFilter
                  filterData={this.state.filterData}
                  handleSave={this.handleToggleModal}
                  handleDissmiss={this.handleToggleModal}
                  isModal={false}
                  handleSearch={(data) => { this.handleFilter(data); }}
                />
              </StickyBox>
            </div>
          )}
          <div className="searchForm">
            <div>
              <StickyBox bottom={false} offsetTop={0} offsetBottom={10} className="search-form-top">
                <Form>
                  <Row form className="search-input">
                    <Col lg={2} md={2} sm={3} xs={12}>
                      <Button
                        style={{ margin: '0px 2px 5px 2px' }}
                        color="success"
                        onClick={() => { this.saveAsRequest(); }}
                        className="volume"
                      >
                        ذخیره جستجو
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </StickyBox>
              {width <= 1080
              && (
                <div className="fab">
                  <FaFilter className="fab-icon" onClick={this.handleToggleModal} />
                </div>
              )}
              <div className="sort-panel">
                <span className="sort-title">مرتب سازی:</span>
                <Nav tabs className="sort-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortBy === 1 })}
                      onClick={() => {
                        this.toggleSort(1);
                      }}
                    >
                      جدیدترین
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortBy === 2 })}
                      onClick={() => {
                        this.toggleSort(2);
                      }}
                    >
                      گران ترین
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortBy === 3 })}
                      onClick={() => {
                        this.toggleSort(3);
                      }}
                    >
                      ارزان ترین
                    </NavLink>
                  </NavItem>
                </Nav>
                <span className="pull-left span-result-size">
                  <span className="red-text bold-text">{this.state.resultSize}</span>
                  مورد یافت شد
                </span>
              </div>
              <div>
                {this.state.searchLoading
                && (
                  <div className={`relative-load${this.state.searchLoading ? '' : ' loaded'}`}>
                    <div className="load__icon-wrap">
                      <svg className="load__icon">
                        <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                      </svg>
                    </div>
                  </div>
                )
                }
                {!this.state.searchLoading
                && (
                  <div>
                    <div className="result-table">
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
                    <Row>
                      <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                          <PaginationLink
                            previous
                            onClick={() => { this.changePagination(this.state.result.currPagination - 1); }}
                          />
                        </PaginationItem>
                        {this.createPagination()}
                        <PaginationItem>
                          <PaginationLink
                            next
                            onClick={() => { this.changePagination(this.state.result.currPagination + 1); }}
                          />
                        </PaginationItem>
                      </Pagination>
                    </Row>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
