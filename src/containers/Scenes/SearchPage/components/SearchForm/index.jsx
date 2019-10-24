import React, { PureComponent } from 'react';
import {
  FaMap,
  FaThList,
  FaFilter,
} from 'react-icons/fa';
import 'react-input-range/lib/css/index.css';
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
} from 'reactstrap';
import classnames from 'classnames';
import AsyncSelect from 'react-select/async';
import StickyBox from 'react-sticky-box';
import SingleHouse from '../../../../../shared/components/SingleHouse';
import SearchMap from '../SearchMap';
import SearchFilter from '../../../../../shared/components/SearchFilter/index';


const houseData = [
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'خانه ویلایی',
    address: ' تهران، آزادی',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه آپارتمانی ',
    address: 'تهران، ونک',
    beds: 3,
    toilets: 2,
    square: 120,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
  {
    name: 'آپارتمان مسکونی',
    address: ' شیراز، شریعتی',
    beds: 3,
    toilets: 2,
    square: 200,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'آپارتمان اداری',
    address: 'تبریز، آبرسان',
    beds: 3,
    toilets: 2,
    square: 220,
    img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
  },
];

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

const customStyles = {
  option: provided => ({
    ...provided,
  }),
  container: () => ({
    width: '100%',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 5,
  }),
  menuList: () => ({
    width: '100%',
  }),
};

const selectTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#98EAD3',
    primary: '#54E1B9',
    primary50: '#B4EEDD',
  },
});

class SearchForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      sortTab: 1,
      resultTab: 'list',
      resultSize: 23,
      searchSelect: [],
      openModal: false,
      requestModal: false,
      requestModalLoading: false,
      requestTitle: '',
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.saveAsRequest = this.saveAsRequest.bind(this);
    this.handleCreateRequest = this.handleCreateRequest.bind(this);
    this.handleDismissModal = this.handleDismissModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchRegion = this.searchRegion.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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
          <Col xs={12} sm={6} md={6} lg={4} key={index.toString()}>
            <SingleHouse data={data} />
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

  promiseOptions = (inputValue, callback) => (
    new Promise((resolve) => {
      resolve(this.searchRegion(inputValue, callback));
      // setTimeout(() => {
      //   resolve(this.filterColors(inputValue));
      // }, 1000);
    }));

  searchRegion(name, callback) {
    console.log(this.state.region);
    setTimeout(() => {
      callback(zones);
    }, 1000);

    //   searchGoods(name, this.props.businessId)
    //     .then((response) => {
    //       this.setState({ totalGoods: response.totalScopes });
    //       callback(response.totalScopes);
    //     })
    //     .catch(() => (null));
  }

  handleTypeSelect(index, name) {
    this.setState({ [name]: index });
  }

  handleToggleModal() {
    this.setState(prevState => ({ openModal: !prevState.openModal }));
  }

  handleSearch() {
    console.group('handle search in search form (Search page)');
    console.log(this.state);
    console.groupEnd();
  }

  handleFilter(data) {
    console.group('handle search in search form (Search page)');
    console.log(data);
    console.log(this.state);
    console.groupEnd();
  }

  saveAsRequest() {
    this.setState({ requestModal: true });
  }

  handleCreateRequest() {
    if (this.state.requestTitle.length <= 0) {
      console.log('enter title for request');
      return;
    }
    this.setState({ requestModalLoading: true });
    setTimeout(() => {
      this.setState({
        requestModalLoading: false,
        requestModal: false,
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
    const { sortTab } = this.state;
    if (sortTab !== tab) {
      this.setState({
        sortTab: tab,
      });
    }
  }

  handleSearchSelect(searchSelect) {
    this.setState({ searchSelect });
  }

  render() {
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
                          className="text-right"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleCreateRequest}>نمایش نتیجه</Button>{' '}
                  <Button color="secondary" onClick={() => { this.handleDismissModal('requestModal'); }}>بازگشت</Button>
                </ModalFooter>
              </>
            )}
          </Modal>
          <Modal
            fade={false}
            isOpen={this.state.openModal}
            toggle={() => { this.handleDismissModal('openModal'); }}
          >
            <ModalHeader className="modal-title">فیلتر جستجو</ModalHeader>
            <SearchFilter
              handleDissmiss={() => { this.handleDismissModal('openModal'); }}
              isModal
              handleSearch={(data) => { this.handleFilter(data); }}
            />
          </Modal>
        </div>
        <div className="search-container">
          <div className="search-filter search-advanced">
            <StickyBox>
              <SearchFilter
                handleSave={this.handleToggleModal}
                handleDissmiss={this.handleToggleModal}
                isModal={false}
                handleSearch={(data) => { this.handleFilter(data); }}
              />
            </StickyBox>
          </div>
          <div className="searchForm">
            <div>
              <StickyBox bottom={false} offsetTop={0} offsetBottom={10} className="search-form-top">
                <Form>
                  <Row form className="search-input">
                    <Col lg={8} md={8} sm={8} xs={12}>
                      <FormGroup>
                        <AsyncSelect
                          isMulti
                          cacheOptions
                          defaultOptions
                          placeholder="نام شهر، منطقه و .. خود را وارد کنید"
                          loadOptions={(input, callback) => { this.promiseOptions(input, callback); }}
                          onChange={(e) => { this.handleSearchSelect(e); }}
                          value={this.state.city}
                          loadingMessage={() => ('درحال بارگزاری...')}
                          theme={theme => selectTheme(theme)}
                          noOptionsMessage={() => ('نتیجه ای یافت نشد')}
                          styles={customStyles}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={12}>
                      <Button
                        style={{ margin: '0px 2px 5px 2px' }}
                        onClick={() => { this.handleSearch(); }}
                        className="btn-success volume"
                      >تغییر جستجو
                      </Button>
                    </Col>
                    <Col lg={2} md={2} sm={2} xs={12}>
                      <Button
                        style={{ margin: '0px 2px 5px 2px' }}
                        color="success"
                        onClick={() => { this.saveAsRequest(); }}
                        className="volume"
                      >
                        درخواست
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </StickyBox>
              <div className="fab">
                <FaFilter className="fab-icon" onClick={this.handleToggleModal} />
              </div>
              <div className="sort-panel">
                <span className="sort-title">مرتب سازی:</span>
                <Nav tabs className="sort-tabs">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortTab === 1 })}
                      onClick={() => {
                        this.toggleSort(1);
                      }}
                    >
                      جدیدترین
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortTab === 2 })}
                      onClick={() => {
                        this.toggleSort(2);
                      }}
                    >
                      گران ترین
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.sortTab === 3 })}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
