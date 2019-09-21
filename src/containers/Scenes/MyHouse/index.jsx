import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container,
} from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';
import Dashboard from '../../../shared/components/DashboardLayout';
import SingleHouse from '../../../shared/components/SingleHouse';
import { getUserAdsList } from '../../util/APIUtils';


const houseData = [
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
  {
    name: 'خانه ویلایی با استخر روباز',
    address: 'تهران، شریعتی، خیابان عدالت شرقی، پلاک ۹۲۴',
    beds: 6,
    toilets: 10,
    square: 500,
    img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
  },
];

class MyHouse extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      houseList: [],
      isLoading: false,
      hasMoreData: false,
    };
    this.getList = this.getList.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  componentDidMount() {
    // get list data from server based on page id property in props
    // use id as server request url params
    this.getList(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id === undefined || this.props.match.params.id === prevProps.match.params.id) {
      return;
    }
    this.getList(this.props.match.params.id);
  }

  getList(type) {
    console.log(this.state.houseList);
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        houseList: houseData,
        hasMoreData: true,
      });
    }, 1000);

    // get server data
    getUserAdsList(type)
      .then((response) => {
        this.setState({
          houseList: response,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  loadMoreData() {
    setTimeout(() => {
      this.setState(prevState => ({
        houseList: [...prevState.houseList, ...houseData],
      }));
    }, 1000);
  }

  render() {
    let list;
    if (this.state.houseList !== undefined) {
      list = this.state.houseList.map(data => (
        <Col xs={12} sm={6} md={6} lg={4}>
          <SingleHouse data={data} />
        </Col>
      ));
    }

    return (
      <div>
        {this.state.isLoading && (
          <div className={`load${this.state.isLoading ? '' : ' loaded'}`}>
            <div className="load__icon-wrap">
              <svg className="load__icon">
                <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
              </svg>
            </div>
          </div>
        )}
        {!this.state.isLoading && (
          <Dashboard>
            <div className="dashboardTitle">
              <h3>({this.props.match.params.id})</h3>
            </div>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMoreData}
              hasMore={this.state.hasMoreData}
              loader={<div className="loader" key={0}>Loading ...</div>}
              useWindow={false}
            >
              <Container>
                <Row>
                  {list}
                </Row>
              </Container>
            </InfiniteScroll>

          </Dashboard>
        )}
      </div>
    );
  }
}

export default MyHouse;
