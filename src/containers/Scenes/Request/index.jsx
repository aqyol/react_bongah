import React, { PureComponent } from 'react';
import {
  Row,
  Col,
  // FormGroup,
  Container,
  // Card,
  // CardTitle,
  // CardSubtitle,
} from 'reactstrap';
import { css } from 'emotion';
import Select from 'react-select';
import InfiniteScroll from 'react-infinite-scroller';
import Dashboard from '../../../shared/components/DashboardLayout';
import renderSelectField from '../../../shared/components/form/Select';
import SingleHouse from '../../../shared/components/SingleHouse';


const adsList = [
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


class Request extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      requestList: [],
      selectedRequest: '',
      requestAds: [],
      hasMoreData: false,
    };
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
    this.getRequestList = this.getRequestList.bind(this);
    this.getRequestResult = this.getRequestResult.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    // request list from server
    this.getRequestList();
  }

  getRequestList() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        requestList: [
          {
            value: '0',
            label: 'درخواست ۱',
            desc: 'توضیحات درخواست ۱',
          },
          {
            value: '1',
            label: 'درخواست ۲',
            desc: 'توضیحات درخواست ۲',
          },
          {
            value: '2',
            label: 'درخواست ۳',
            desc: 'توضیحات درخواست ۳',
          },
          {
            value: '3',
            label: 'درخواست ۴',
            desc: 'توضیحات درخواست ۴',
          },
          {
            value: '4',
            label: 'درخواست ۵',
            desc: 'توضیحات درخواست ۵',
          },
        ],
      });
    }, 1000);
  }

  getRequestResult() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        requestAds: [
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
        ],
        hasMoreData: true,
      });
    }, 1000);
  }

  handleTypeSelect(index, name) {
    console.group('select');
    console.log(index);
    console.groupEnd();
    this.setState({ [name]: index });
    this.getRequestResult();
  }

  loadMoreData() {
    setTimeout(() => {
      this.setState(prevState => ({
        requestAds: [...prevState.requestAds, ...adsList],
        isLoading: false,
      }));
    }, 1000);
  }

  handleSelectChange(e) {
    console.log(this.state.isLoading);
    console.log(e);
  }

  render() {
    let list;
    if (this.state.requestAds.length > 0) {
      list = this.state.requestAds.map(item => (
        <Col xs={12} sm={6} md={6} lg={4}>
          <SingleHouse data={item} />
        </Col>
      ));
    }

    // const Option = (props) => {
    //   const {
    //     children,
    //   } = props;
    //   return (
    //     <Row
    //       className="request-select"
    //     >
    //       <Col className="text-right">{children}</Col>
    //       <Col className="text-right">توضیحات</Col>
    //     </Row>
    //   );
    // };

    const Option = (props) => {
      const {
        children,
        className,
        cx,
        getStyles,
        isDisabled,
        isFocused,
        isSelected,
        innerRef,
        innerProps,
      } = props;
      return (
        <div
          ref={innerRef}
          className={cx(
            css(getStyles('option', props)),
            {
              option: true,
              'option--is-disabled': isDisabled,
              'option--is-focused': isFocused,
              'option--is-selected': isSelected,
            },
            className,
          )}
          {...innerProps}
        >
          <Row className="request-select">
            <Col className="text-right">{children}</Col>
            <Col className="text-right">{children}</Col>
          </Row>
        </div>
      );
    };

    // const customStyles = {
    //   option: (provided, state) => ({
    //     ...provided,
    //     borderBottom: '1px dotted pink',
    //     color: state.isSelected ? 'red' : 'blue',
    //     padding: 20,
    //   }),
    //   control: () => ({
    //     // none of react-select's styles are passed to <Control />
    //     width: '100%',
    //   }),
    //   singleValue: (provided, state) => {
    //     const opacity = state.isDisabled ? 0.5 : 1;
    //     const transition = 'opacity 300ms';
    //
    //     return { ...provided, opacity, transition };
    //   },
    // };

    return (
      <Dashboard>
        {this.state.isLoading
        && (
          <div className={`load${this.state.isLoading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )
        }
        {!this.state.isLoading
        && (
          <>
            <Row className="request-direction request-select-row position-fixed">
              <Col md={6} sm={6} xs={12}>
                {renderSelectField({
                  input: {
                    onChange: (e) => { this.handleTypeSelect(Number(e.value), 'selectedRequest'); },
                    isMulti: false,
                    isClearable: true,
                    name: 'requestList',
                    value: this.state.requestList[this.state.selectedRequest],
                  },
                  placeholder: 'انتخاب درخواست',
                  options: this.state.requestList,
                  name: 'select',
                  type: 'text',
                })}
              </Col>
              <Col md={6} sm={6} xs={12}>
                <Select
                  closeMenuOnSelect
                  isRtl
                  name="selectedRequest"
                  options={this.state.requestList}
                  components={{ Option }}
                  value={this.state.requestList[this.state.selectedRequest]}
                  onChange={(e) => { this.handleTypeSelect(Number(e.value), 'selectedRequest'); }}
                  placeholder="انتخاب درخواست"
                />
              </Col>
            </Row>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMoreData}
              hasMore={this.state.hasMoreData}
              loader={<div className="loader" key={0}>Loading ...</div>}
              useWindow={false}
              className="request-container"
            >
              <Container>
                <Row>
                  {list}
                </Row>
              </Container>
            </InfiniteScroll>
          </>
        )}
      </Dashboard>
    );
  }
}

export default Request;
