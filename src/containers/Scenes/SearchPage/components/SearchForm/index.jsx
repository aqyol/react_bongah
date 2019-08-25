import React, { PureComponent } from 'react';
import {
  FaMap,
  FaAngleLeft,
  FaAngleRight,
  FaThList,
} from 'react-icons/fa';
import SelectComponent from '../../../../../shared/components/SelectComponent';
import SingleHouse from '../../../../../shared/components/SingleHouse';
import SearchMap from '../SearchMap';


const houseData = [{
  name: 'خانه ویلایی',
  address: ' تهران، آزادی',
  beds: 3,
  toilets: 2,
  square: 120,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'خانه آپارتمانی ',
  address: 'تهران، ونک',
  beds: 3,
  toilets: 2,
  square: 120,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}, {
  name: 'آپارتمان مسکونی',
  address: ' شیراز، شریعتی',
  beds: 3,
  toilets: 2,
  square: 200,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'آپارتمان اداری',
  address: 'تبریز، آبرسان',
  beds: 3,
  toilets: 2,
  square: 220,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}];

class SearchForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      resultTab: 'list',
      beds: 1,
      baths: 1,
    };
    this.handleChangeValue = this.handleChangeValue.bind(this);
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
      <div className="row">
        {houseData.map((data, index) => (
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index.toString()}>
            <SingleHouse data={data} />
          </div>
        ))}
      </div>
    </div>
  );

  resultMap = () => (
    <div className="resultsMap">
      <SearchMap />
    </div>
  );

  handleChangeValue(name, increase) {
    this.setState((prevState) => {
      const { [name]: prevValue } = prevState;
      const newValue = (increase) ? prevValue + 1 : prevValue - 1;
      return {
        [name]: (newValue >= 0 ? newValue : 0),
      };
    });
  }

  render() {
    return (
      <div className="searchForm">
        <div className="filterBox">
          <div className="row form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 yearOfBirth">
              <h4>نوع ملک</h4>
              <div className="selectItem">
                <SelectComponent switchTop={false} listItem={['همه', 'اجاره', 'فروش', 'مشارکت', 'پیش فروش']} />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label htmlFor="beds">
                  <div id="beds" className="volume">
                    <a
                      href="#1"
                      className="btn btn-gray btn-round-left"
                      onClick={() => this.handleChangeValue('beds', 0)}
                    >
                      <FaAngleLeft />
                    </a>
                    <input type="text" className="form-control" readOnly value={this.state.beds} />
                    <a
                      href="#1"
                      className="btn btn-gray btn-round-right"
                      onClick={() => this.handleChangeValue('beds', 1)}
                    >
                      <FaAngleRight />
                    </a>
                  </div>
                  اتاق خواب
                </label>

              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label htmlFor="baths">
                  <div id="baths" className="volume">
                    <a
                      href="#1"
                      className="btn btn-gray btn-round-left"
                      onClick={() => this.handleChangeValue('baths', 0)}
                    >
                      <FaAngleLeft />
                    </a>
                    <input
                      type="text"
                      className="form-control"
                      readOnly
                      value={this.state.baths}
                    />
                    <a
                      href="#1"
                      className="btn btn-gray btn-round-right"
                      onClick={() => this.handleChangeValue('baths', 1)}
                    >
                      <FaAngleRight />
                    </a>
                  </div>
                  حمام
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="resultTable">
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
    );
  }
}

export default SearchForm;
