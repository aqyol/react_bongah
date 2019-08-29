import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../../shared/components/DashboardLayout';
import PromiseList from './components/PromiseList';


const list = [
  {
    id: 1,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 0,
  },
  {
    id: 2,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 0,
  },
  {
    id: 3,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
  {
    id: 4,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
  {
    id: 5,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
  {
    id: 6,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
  {
    id: 7,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
  {
    id: 8,
    date: '1398-12-12',
    first: 'محمد رضایی',
    second: 'علی کریمی',
    status: 1,
  },
];

class Promise extends PureComponent {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true,
    };
    this.getPromiseList = this.getPromiseList.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(prevState => ({ isLoading: !prevState.isLoading }));
    }, 2000);
    this.getPromiseList();
  }

  getPromiseList() {
    this.setState({ list });
  }

  render() {
    return (
      <Dashboard>
        <div className="promise-container">
          <div className="promise-page">
            <Link to="promise/edit" className="btn btn-success link-new">ایجاد قول نامه</Link>
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
            <PromiseList list={this.state.list} />
          </div>
        </div>
      </Dashboard>
    );
  }
}

export default Promise;
