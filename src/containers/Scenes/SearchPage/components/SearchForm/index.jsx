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
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}, {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png',
}, {
  name: 'Hauntingly Beautiful Estate',
  address: ' 169 Warren St, Brooklyn, NY 11201, USA',
  beds: 3,
  toilets: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/2-1.png',
}];

class SearchForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      resultTab: 'list',
    };
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

  render() {
    return (
      <div className="searchForm">
        <div className="filterBox">
          <div className="row form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 yearOfBirth">
              <h4>Prototype Type</h4>
              <div className="selectItem">
                <SelectComponent switchTop listItem={['All', 'Rent', 'Sale']} />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label htmlFor="beds">
                  <div id="beds" className="volume">
                    <a href="#1" className="btn btn-gray btn-round-left">
                      <FaAngleLeft />
                    </a>
                    <input type="text" className="form-control" readOnly value="1" />
                    <a href="#1" className="btn btn-gray btn-round-right">
                      <FaAngleRight />
                    </a>
                  </div>
                  Bedrooms
                </label>

              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label htmlFor="baths">
                  <div id="baths" className="volume">
                    <a href="#1" className="btn btn-gray btn-round-left"><FaAngleLeft /></a>
                    <input type="text" className="form-control" readOnly value="1" />
                    <a href="#1" className="btn btn-gray btn-round-right"><FaAngleRight /></a>
                  </div>
                  Bathrooms
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
                <a href="#1" onClick={() => { this.changeResultTab('list'); }}><FaThList /> Listing view</a>
              </li>
              <li
                className={this.state.resultTab === 'map' ? 'active' : ''}
              >
                <a href="#1" onClick={() => { this.changeResultTab('map'); }}><FaMap /> Map view</a>
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
